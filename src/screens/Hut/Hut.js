import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'

const Hut = () => {
    const [title, setTitle] = useState("");
    const [des, setDes] = useState("");
    const [img, setImg] = useState(null);
    const [list, setList] = useState([]);
    const id = firebase.auth().currentUser.uid;

    const retrieve = async() => {
        await firebase.firestore().collection(id).get()
            .then((snap) => {
                snap.docs.map(doc => {
                    console.log(doc.data());
                    list.push(doc.data());
                })
            })
        let n = list.length;
        let ix = Math.floor((Math.random()*n));
        setTitle(list[ix].title);
        setDes(list[ix].description);
        setImg(list[ix].imageUrl.localUri)
    }

    useEffect(() => {
        retrieve();
    },[])
    return(
        <View style={styles.container}>
            <Text style={styles.boldT}>You have written down the good things today:)</Text>
            <View style={styles.sr}>
                <Text style={styles.text}>Search memories ..</Text>
            </View>
            <Text style={styles.boldT}>{title}</Text>
            { img!==null?<Image source={{ uri: img }} style={styles.img} /> : <></>}
            <Text style={styles.text}>{des}</Text>
        </View>
    )
}

export default Hut;
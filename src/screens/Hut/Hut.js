import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'

const Hut = () => {
    const [title, setTitle] = useState("");
    const [des, setDes] = useState("");
    const [img, setImg] = useState(null);
    const [time, setTime] = useState("");
    const [list, setList] = useState([]);
    const [searchText, setSearchText] = useState("");
    const id = firebase.auth().currentUser.uid;
    let user = firebase.auth().currentUser;

    
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
        setTime(list[ix].time);
    }

    useEffect(() => {
        retrieve();
    },[])
    return(
        <View style={styles.container}>
            <View style={styles.backg}>
               <Text style={styles.boldT}>You have written down the good things today:)</Text>
            </View>
            <View style={styles.sr}>
                <TextInput
                    style={styles.ttext}
                    placeholder='Search memories ..'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setSearchText(text)}
                    value={searchText}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
            </View>
            <Text style={styles.mem}>We do not remember days , we remember moments ...</Text>
            <Text style={styles.time}>Remember {time} ??</Text>
            <Text style={styles.boldT}>" {title} "</Text>
            { img!==null?<Image source={{ uri: img }} style={styles.img} /> : <></>}
            <Text style={styles.text}>{des}</Text>
        </View>
    )
}

export default Hut;
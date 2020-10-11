import Timeline from 'react-native-timeline-flatlist'
import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'


const Time = () => {

    const [title, setTitle] = useState("");
    const [des, setDes] = useState("");
    const [img, setImg] = useState(null);
    const [list, setList] = useState([]);
    const  id = firebase.auth().currentUser.uid;
    
    const retrieve = async() => {
        let tmp = [];
        await firebase.firestore().collection(id).get()
            .then((snap) => {
                snap.docs.map(doc => {
                    tmp.push(doc.data());
                })
            })
        setList(tmp);
    }
      
    useEffect(() => {
        retrieve();
    },[])

    
    const renderDetail = (rowData, sectionID, rowID) => {
        let title = <Text style={[styles.title]}>{rowData.title}</Text>
        var desc = null
        if(rowData.description && rowData.imageUrl)
          desc = (
            <View style={styles.descriptionContainer}>
              <Image source={{uri: rowData.imageUrl.localUri}} style={styles.image}/>
              <Text style={[styles.textDescription]}>{rowData.description}</Text>
            </View>
          )
     
        return (
          <View >
            {title}
            {desc}
          </View>
        )
      }

    return (
        <View style={styles.container}>
            <Timeline 
                style={styles.list}
                data={list}
                circleSize={20}
                circleColor='rgba(0,0,0,0)'
                lineColor='rgb(45,156,219)'
                timeContainerStyle={{minWidth:52}}
                timeStyle={{textAlign: 'center', backgroundColor:'#ff9797', color:'white', padding:10, borderRadius:13}}
                descriptionStyle={{color:'gray'}}
                options={{
                    style:{paddingTop:5}
                }}
                renderDetail={renderDetail}
            />
        </View>
    )
}

export default Time;

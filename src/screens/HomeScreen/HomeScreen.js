import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'
import upload from "../../pics/upload.png";
import plus from "../../pics/plus.png"
import * as ImagePicker from 'expo-image-picker';

export default function HomeScreen(props) {

    const [title, setTitle] = useState("");
    const [des, setDes] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);
    const id = firebase.auth().currentUser.uid;

    const openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("Permission to access gallery is required!");
          return;
        }
    
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        //console.log(pickerResult);
        if (pickerResult.cancelled === true) {
            return;
          }
      
          setSelectedImage({ localUri: pickerResult.uri });
      }

    const uploadIt = () => {
        firebase.firestore().collection(id).add({
            title,
            des,
            image:selectedImage
        })
         .then(() => {
             setSelectedImage(null);
             setTitle("");
             setDes("");
         })
    }

    const handleNav = () => {
        // store on firestore
        uploadIt();      
        // navigate , we are done with todays work   
        props.navigation.navigate("Hut");
    }
    const handlePlus = () => {
        // store on firestore
        uploadIt();         
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Write down about something good that happened today</Text>

            <Text style={styles.subt}>It can be anything - someone helped, nice weather, promotion...</Text>

            <TextInput
                style={styles.inputT}
                placeholder='Title'
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => setTitle(text)}
                value={title}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />

            <TextInput
                style={styles.inputD}
                placeholder='Description'
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => setDes(text)}
                value={des}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />

            <TouchableOpacity style={styles.img} onPress={openImagePickerAsync} >
                <Image source={upload} style={styles.imageUpIcon} />
            </TouchableOpacity>
            {
                selectedImage!==null?<Image
                source={{ uri: selectedImage.localUri }}
                style={styles.thumbnail}
              /> : <></>
            }
            
            {
                title===""?
                <></>:
                <TouchableOpacity onPress={handlePlus} >
                    <Image source={plus} style={styles.thumbnail} />
                </TouchableOpacity>
            }
            

            <TouchableOpacity style={styles.btn} onPress={handleNav}>
                <Text style={styles.bText}>Finish</Text>
            </TouchableOpacity>

        </View>
    )
}

console.disableYellowBox = true;
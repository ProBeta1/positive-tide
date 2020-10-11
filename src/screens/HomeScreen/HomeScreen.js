import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'
import upload from "../../pics/upload.png";
import plus from "../../pics/plus.png"
import * as ImagePicker from 'expo-image-picker';
import { KeyboardAvoidingView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = today.getMonth()
        let time = monthNames[mm] + ' ' + dd; 
        firebase.firestore().collection(id).add({
            time,
            title,
            description:des,
            imageUrl:selectedImage
        })
         .then(() => {
             setSelectedImage(null);
             setTitle("");
             setDes("");
         })
    }

    const handleNav = () => {
        // store on firestore
        if(title!=="")
            uploadIt();      
        // navigate , we are done with todays work   
        props.navigation.navigate("Hut");
    }
    const handlePlus = () => {
        // store on firestore
        if(title!=="")
            uploadIt();         
    }

    const handleDel = () => {
        setSelectedImage(null);
             setTitle("");
             setDes("");
        props.navigation.navigate("Hut");
    }

    return (
        <KeyboardAvoidingView       behavior={Platform.OS == "ios" ? "padding" : null}
        style={styles.container}>
            <Text style={styles.title}>Write down about something good that happened today</Text>

            <Text style={styles.subt}>It can be anything : any luck with that piece of code ? Maybe your favorite band released new songs.. </Text>
            <TextInput
                style={styles.inputT}
                placeholder='What could be the best caption ..'
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => setTitle(text)}
                value={title}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />

            <TextInput
                style={styles.inputD}
                placeholder='What made this moment so special ??'
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => setDes(text)}
                value={des}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />

            <TouchableOpacity style={styles.img} onPress={openImagePickerAsync} >
                <MaterialCommunityIcons name="camera-plus" size={50} color="white" />
            </TouchableOpacity>
            {
                selectedImage!==null?<Image
                source={{ uri: selectedImage.localUri }}
                style={styles.thumbnail}
              /> : <></>
            }

            
            <View style={styles.btns}>
                <TouchableOpacity onPress={handleDel} >
                    <MaterialCommunityIcons name="trash-can" size={40} color="white" />
                </TouchableOpacity> 

                <TouchableOpacity onPress={handlePlus} >
                    <MaterialCommunityIcons name="pen-plus" size={40} color="white" />
                </TouchableOpacity>            

                <TouchableOpacity onPress={handleNav}>
                    <MaterialCommunityIcons name="check-all" size={40} color="white" />
                </TouchableOpacity>
            </View>
                

        </KeyboardAvoidingView>
        
    )
}

console.disableYellowBox = true;
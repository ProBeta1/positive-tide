import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'
import upload from "../../pics/upload.png";
//import ImagePicker from 'react-native-image-picker';

export default function HomeScreen(props) {

    const [title, setTitle] = useState("");
    const [des, setDes] = useState("");

    // const [image, setImage] = useState(null);

    // const selectImage = () => {
    //     const options = {
    //         maxWidth: 2000,
    //         maxHeight: 2000,
    //         storageOptions: {
    //             skipBackup: true,
    //             path: 'images'
    //         }
    //     };
    //     ImagePicker.showImagePicker(options, response => {
    //         if (response.didCancel) {
    //             console.log('User cancelled image picker');
    //         } else if (response.error) {
    //             console.log('ImagePicker Error: ', response.error);
    //         } else if (response.customButton) {
    //             console.log('User tapped custom button: ', response.customButton);
    //         } else {
    //             const source = { uri: response.uri };
    //             console.log(source);
    //             setImage(source);
    //         }
    //     });
    // }

    const handleNav = () => {
        props.navigation.navigate("Hut");
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

            <TouchableOpacity style={styles.img} >
                <Image source={upload} style={styles.imageUpIcon} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={handleNav}>
                <Text style={styles.bText}>Finish</Text>
            </TouchableOpacity>

        </View>
    )
}

console.disableYellowBox = true;
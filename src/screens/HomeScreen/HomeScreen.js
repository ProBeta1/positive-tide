import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'
import upload from "../../pics/upload.png";

export default function HomeScreen(props) {

    const [title, setTitle] = useState("");
    const [des, setDes] = useState("");

    const uploadImage = () => {

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

            <TouchableOpacity style={styles.img} onPress={uploadImage}>
                <Image source={upload} style={styles.imageUpIcon} />
            </TouchableOpacity>

        </View>
    )
}

console.disableYellowBox = true;
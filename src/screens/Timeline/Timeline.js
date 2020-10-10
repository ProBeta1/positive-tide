import Timeline from 'react-native-timeline-flatlist'
import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'


const TimeLine = () => {
    const data = [
        { time: '09:00', title: 'Event 1', description: 'Event 1 Description' },
        { time: '10:45', title: 'Event 2', description: 'Event 2 Description' },
        { time: '12:00', title: 'Event 3', description: 'Event 3 Description' },
        { time: '14:00', title: 'Event 4', description: 'Event 4 Description' },
        { time: '16:30', title: 'Event 5', description: 'Event 5 Description' }
    ]
    return (
        <View styles={styles.container}>
            <Text>yo</Text>
            <Text>yo</Text>
            <Text>yo</Text>
            <Text>yo</Text>
            <Text>yo</Text>
            <Timeline
                //..other props
                data={data}
                innerCircle={'icon'}
            />
        </View>
    )
}

export default TimeLine;

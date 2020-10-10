import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 25,
        backgroundColor: 'white'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    subt: {
        fontSize: 18,
        color: '#8E8E8E',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 20
    },
    inputT: {
        height: 35,
        borderRadius: 10,
        width: '90%',
        backgroundColor: '#E2E2E2',
        padding: 5,
        textAlign: 'center'

    },
    inputD: {
        height: '30%',
        width: '90%',
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#E2E2E2',
        marginTop: 20,
        marginBottom: 10,
        padding: 5,
        textAlign: 'center'
    },
    img: {
    },
    imageUpIcon: {
        width: 100,
        height: 100,
        resizeMode: 'cover'
    },
    btn:{
        backgroundColor:'purple',
        padding:10,
        borderRadius:10,
        width:'50%',
        marginTop:15
    },
    bText:{
        color:'white',
        fontWeight:'bold',
        textAlign:'center'
    },
    thumbnail: {
        width: 100,
        height: 100,
        resizeMode: "cover"
      }
})

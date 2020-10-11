import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor:'#15202B',
    },
    title: {
        fontSize: 18,
        textAlign: 'center',
        color:'white',
        fontWeight:'bold'
    },
    subt: {
        fontSize: 16,
        color: '#8E8E8E',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
        fontWeight:'bold'
    },
    inputT: {
        height: 35,
        borderRadius: 10,
        width: '90%',
        backgroundColor: '#1F4150',
        padding: 5,
        textAlign: 'center',
        color:'white'
    },
    inputD: {
        height: '30%',
        width: '90%',
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#1F4150',
        marginTop: 20,
        marginBottom: 20,
        padding: 5,
        textAlign: 'center',
        color:'white'
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
    },
    plus:{
        height:50,
        width:50,
        resizeMode:'cover',
        margin:20
    },
    btns:{
        flexDirection:'row',
        margin:20,
        padding:20,
        justifyContent:'space-between',
        width:'100%'
    }

})

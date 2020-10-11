import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
    },
    list: {
        marginTop:10,
        padding:10,
      },
      title:{
        fontSize:16,
        fontWeight: 'bold'
      },
      descriptionContainer:{
        flexDirection: 'row',
        paddingRight: 50,
      },
      image:{
        width: 50,
        height: 50,
        borderRadius: 25
      },
      textDescription: {
        marginLeft: 10,
        color: 'gray'
      }
})

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        padding: 20,
        backgroundColor: '#15202B'
    },
    btns: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10
    },
    lbutton: {
        backgroundColor: '#007FFF',
        marginLeft: 15,
        marginTop: 20,
        height: 42,
        padding: 10,
        alignItems: "center",
        justifyContent: 'center'
    },
    rbutton: {
        backgroundColor: '#002D62',
        marginRight: 15,
        marginTop: 20,
        height: 42,
        padding: 10,
        alignItems: "center",
        justifyContent: 'center',

    },
    logo: {
        flex: 1,
        height: 200,
        width: 200,
        alignSelf: "center",
        margin: 30
    },
    input: {
        height: 42,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: '#E2E2E2',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    button: {
        backgroundColor: '#007FFF',
        marginLeft: 40,
        marginRight: 40,
        marginTop: 20,
        height: 44,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d'
    },
    footerLink: {
        color: "#788eec",
        fontWeight: "bold",
        fontSize: 16
    }
})

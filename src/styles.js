import { StyleSheet } from 'react-native';
import colors from "./colors";

export default StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: colors.white,
    },
    centerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
    },
    bottomContainer: {
        flexDirection: 'row',
        marginTop: 40,
        width: 280,
        height: 60,
        borderWidth: 2,
        borderColor: colors.grey,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: colors.white,
    },
    menuRight: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingTop: 40,
        paddingBottom: 40,
        paddingRight: 15,
    },
    textMenu: {
        color: colors.greyLight,
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 60,
        paddingRight: 15,
    },
    icon: {
        width: 64,
        backgroundColor: colors.greyLight,
        padding: 8,
        textAlign: 'center',
        borderRadius: 32,
        color: colors.white,
    },
    item: {
        width: 60,
        height: 60,
        marginVertical: 5,
        marginHorizontal: 5,
        borderRadius: 15,
        borderColor: colors.red,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',      
    },
    textItem: {
        color: colors.white,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',        
    },
    word: {
        width: 180,        
        color: colors.green,
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 25,
    },
    validate: {
        width: 60,        
        color: colors.redLight,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'right',
    },
    valid: {
        color: colors.greyLight,
    }
});

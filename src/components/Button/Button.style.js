import { StyleSheet } from "react-native";
import { COLORS } from "../../colors/Colors";

export default StyleSheet.create({
    container:{
        backgroundColor:COLORS.orange100,
        marginHorizontal:10,
        alignItems:'center',
        borderRadius:10,
        padding:10
    },
    title:{
        color:COLORS.gray200,
        fontWeight:'bold',
        fontSize:20
    }
})
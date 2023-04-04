import { StyleSheet } from "react-native";
import { COLORS } from "../../colors/Colors";

export default StyleSheet.create({
    container:{
        backgroundColor:COLORS.orange,
        flex:1,
    },
    titleContainer:{
        alignItems:'center',
        padding:40,
    },
    title:{
        color:COLORS.gray100,
        fontWeight:'bold',
        fontSize:36,
    },
    boxContainer:{
        position:"absolute",
        bottom:0,
        right:0,
        left:0,
    },
    questionContainer:{
        justifyContent:'center',
        flexDirection:'row',
        gap:10,
    },
    question:{
        color:COLORS.gray300,
        textAlign:"center",
        fontWeight:'bold',
        fontSize:14,
    },
    route:{
        color:COLORS.orange100,
        textAlign:"center",
        fontWeight:'bold',
        fontSize:14,
    },
    space:{
        paddingVertical:140
    }
})
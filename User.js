import { Image,Text, View, StyleSheet } from "react-native"

export const User = ({ data }) => {
    return (
        <View style={userStyles.userContainer}>
            <View style={userStyles.box1}>
                <Image style={userStyles.Image}
                    source={{ uri: data.image }} />
            </View>
            <View style={userStyles.box2}>
                <Text style={{fontWeight:"bold",fontSize:20}}>{data.firstName} {data.lastName}</Text>
                <Text style={{fontSize:15,color:"gray"}}>{data.email} </Text>

            </View>
            <View style={userStyles.box3}>
                <View style={userStyles.miniBox}>
                    <Text style={userStyles.boxText}>{data.age}</Text>
                    </View>
            </View>
        </View>
    )
}
const userStyles = StyleSheet.create({
    userContainer: {
        width: "90%",
        height: 80,
        padding: 2,
        margin: 3,
        flexDirection: "row"
    },
    box1: {
        flex: 2,

        justifyContent: "center",
        alignItems: "center"
    },
    box2: {
        flex: 5,
        justifyContent:"center"

    }, box3: {
        flex: 1,
justifyContent:"center",
alignItems:"center"
    },
    Image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: "black"
    },
    miniBox:{
        width:30,
        height:30,
        borderRadius:20,
        backgroundColor:"#BC85FF",
        justifyContent:"center",
        alignItems:"center"
    },
    boxText:{
        fontWeight:"bold",
        color:"white"
    }
});

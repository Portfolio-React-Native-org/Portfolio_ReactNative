import React from "react";
import { View, StyleSheet, Image, ImageBackground, Text } from "react-native";
import ButtonComponent from "./ButtonComponent";
// import profilepic from "../assets/images/red_tie_day.jpeg";
import profilepicbw from "../assets/images/red_tie_day_bw.png";
import backgroundpic from "../assets/images/buildingsbackground.png";

export default function Intro() {
    return(
        <View style={styles.container}>
            <View style={styles.subcontainerA}>
                <View style={styles.Btn_Container}>
                    <ButtonComponent title="HOME"/>
                    <ButtonComponent title="ABOUT ME"/>
                    <ButtonComponent title="MY WORK"/>
                    <ButtonComponent title="GET IN TOUCH"/>
                </View>
                <View style={styles.introtxtcontainer}>
                    <Text style={styles.introtext}>Backend Developer</Text>
                </View> 
            </View>
            <View style={styles.subcontainerB}>
                <ImageBackground source={backgroundpic} style={styles.backgroundpic} >
                    <Image source={profilepicbw} style={styles.profile_pic} />
                </ImageBackground>
            </View>
        </View>
    )}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 750,
    },
    subcontainerA: {
        backgroundColor: "white",
        flex: 1,
    },
    subcontainerB: {
        backgroundColor: '#161C58' ,
        justifyContent: "center",
        flex: 1,
    },
    Btn_Container: {
        paddingTop: 10,
        flexDirection: "row",
        justifyContent:"space-evenly",
    },
    profile_pic: {
        width: 500,
        height: 500,
        borderRadius: 20,
 
    },
    backgroundpic: {
        alignItems: "center",
        justifyContent: "center",
        height: 750,
    },
    introtxtcontainer: {
        // borderBlockColor: "black",
        // borderBlockWidth: 1,
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    introtext:{
            fontFamily: "Ubuntu",
            fontSize: 48,
            fontWeight: "bold",
    }
})    
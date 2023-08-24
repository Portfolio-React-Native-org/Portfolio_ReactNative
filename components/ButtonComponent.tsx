import React from "react";
import {Text, TouchableOpacity,StyleSheet} from "react-native";

export default function Intro(props: any) {
    return(
    <TouchableOpacity style={styles.btnstyle}>
    <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    btnstyle: {
        backgroundColor: '#73779B',
        width: 150,
        height: 50,
        borderRadius: 5,
       
    },
    buttonText: {
        fontFamily:'Ubuntu',
        fontSize: 16,
        alignSelf: 'center',
        paddingTop: 12,
    }
})
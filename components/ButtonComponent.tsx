import React from "react";
import {Text, TouchableOpacity,StyleSheet} from "react-native";

export default function Intro() {
    return(
    <TouchableOpacity style={styles.btnstyle}>
    <Text style={styles.buttonText}>click me</Text>
    </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    btnstyle: {
        backgroundColor: '#007bff',
        width: 100,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    }
})
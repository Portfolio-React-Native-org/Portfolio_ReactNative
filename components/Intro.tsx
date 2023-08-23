import React from "react";
import { View, StyleSheet, } from "react-native";
import ButtonComponent from "./ButtonComponent";

export default function Intro() {
    return(
        <View style={styles.container}>
            <View style={styles.subcontainerA}>
                <ButtonComponent/>
            </View>
            <View style={styles.subcontainerB}>
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
        flex: 1,
    }

})    
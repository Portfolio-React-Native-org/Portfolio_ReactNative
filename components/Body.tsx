import React from "react";
import{View, StyleSheet} from "react-native"; 

export default function Body(){
    return(
        <View style={styles.body_container}>
            <View style={styles.body_containerA}>

            </View>
        </View>
)}

const styles = StyleSheet.create({
    body_container: {
        backgroundColor: "white",
        borderWidth: 5,
        borderColor: "red",
        height: 750,
    },
    body_containerA: {
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "blue",
    },
})
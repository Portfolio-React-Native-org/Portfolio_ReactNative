import React from "react";
import { View, Text, Pressable,StyleSheet} from "react-native";

export default function cardcomponent() {
    const styles = StyleSheet.create({
        container: {
            borderWidth: 5,
            borderRadius: 20,
            borderColor: "#73779B",
            height: 500,
            width: 400,
            alignContent: "center",
        
        },
        projectopic: {
            fontFamily: "Ubuntu",
            fontSize: 24,
            textAlign: "center",
            paddingTop: 30,
            
        }
    });
    return (
        <View style={styles.container}>
            <Pressable>
                <Text style={styles.projectopic}>ML Server</Text>
                <Text>dgdg</Text>
            </Pressable>
        </View>
    )
}
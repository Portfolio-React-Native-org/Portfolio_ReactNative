import React from "react";
import { View, Text, Pressable,StyleSheet} from "react-native";
import PrjCardComponent from "./PrjCardComponent";

export default function Projects() {
    const styles = StyleSheet.create({
        container: {
            borderWidth: 1,
            borderColor: "red",
            height: 750
        },
        projectopic: {
            fontFamily: "Ubuntu",
            fontWeight: "bold",
            fontSize: 36,
            textAlign: "center",
            paddingTop: 30
        }
    });
    return (
        <View style={styles.container}>
            <Pressable>
                <Text style={styles.projectopic}>PROJECTS</Text>
                <PrjCardComponent/>
            </Pressable>
        </View>
    )
}

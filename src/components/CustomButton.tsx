import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function CustomButton(props) {

    return (
        <View style={styles.buttonContainer}>
            <View style={styles.buttonContainer}>
                <Text style={styles.flag}>{props.flag}</Text>
                <Text style={styles.country}>{props.name}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center'
    },
    flag: {
        fontSize: 28,
        color: "#FFFFFF",
        marginBottom: 4
    },
    country: {
        fontSize: 14,
        color: "#2d3436",

    }
})
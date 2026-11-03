import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

const ButtonScreen = () =>{
    let counter , counterT = 0;

    return(
        <View>
            <Text>Button Screen</Text>
            <Button
            title="Click me"
            color="blue"
            onPress={()=>console.log("Button Clicked: ", counter++)}
            />
            <TouchableOpacity
            style={StyleSheet.TouchableBtn}
            onPress={()=>console.log("ButtonT Clicked: ", counterT++)}
            >
                <Text style={style.btnText}>Click this button</Text>
            </TouchableOpacity>
        </View>
    );
}

const style = StyleSheet.create({
    textStyle:{
        textStyle: 'center',
        marginTop: 10,
        fontSize: 15,
        marginBottom: 10
    },
    TouchableBtn:{
        backgroundColor: "blue",
        marginVertical: 15,
        paddingVertical: 20,
        borderRadius: 6,
        marginHorizontal: 20,
    },

    btnText:{
        color:"white",
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold'
    }
})


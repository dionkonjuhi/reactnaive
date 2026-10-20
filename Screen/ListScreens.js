import React from "react";
import {Text, View, StyleSheet, FlatList } from 'react-native';


const students = [
    {name:'Dion' , surname:'Konjuhi' , age:'32'},
    {name:'Liron' , surname:'Aliu' , age:'32'},
    {name:'Reina' , surname:'Beadini' , age:'20'},
]



const ListScreen = (props) =>{
    return(
        <View>
            <Text style={styles.text}>List of Students</Text>
            <FlatList
            horizontal = {true}
            showsVerticalScrollIndicator={false}
            keyExtractor={student => student.name}
            data={students}
            renderItem={({item})=> {
                return <Text>{item.name} {item.surname} - {item.age} </Text>
            }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
text: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
},
item:{
    marginHorizontal:10,
    padding:8,
    backgroundColor: 'white',
    borderRadius: 6
}
});


export default ListScreen;
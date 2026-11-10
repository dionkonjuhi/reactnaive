import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import StudentInfo from "../components/studentinfo";
import Project from "../components/project";


const ProfileScreen = () => {
    return(
        <View>
            <StudentInfo
                name="John Doe"
                description="A passionate learner and aspiring software developer."/>
                <Project
                    name="Project Alpha"
                    image={require('../assets/project-alpha.png')}
                    image={require('../assets/project-alpha.png')}
                />
        </View>

    );
}

// const styles = StyleSheet.create({
//     text: {
//         textAlign: 'center',
//         fontSize: 20,
//         marginVertical: 20,
//     }
// });

export default ProfileScreen ;
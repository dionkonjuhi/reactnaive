import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const StudentInfo = ({ name, description, image, buttonText = 'View Details', onPress }) => {
    return (
        <View style={styles.container}> 
            <View style={styles.cardWrapper}>
   
                <View style={styles.infoWrapper}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.description}>{description}</Text>

                    <TouchableOpacity style={styles.button} onPress={onPress}>
                        <Text style={styles.buttonText}>{buttonText}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        marginTop: 12,
    },
    cardWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 16,
        width: '92%',
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.12,
        shadowRadius: 8,
        elevation: 5,
    },
    img: {
        width: 140,
        height: 180,
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16,
    },
    infoWrapper: {
        flex: 1,
        paddingHorizontal: 18,
        paddingVertical: 18,
        alignItems: 'center',
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#1f2937',
        marginBottom: 8,
        textAlign: 'center',
    },
    description: {
        fontSize: 14,
        color: '#4b5563',
        textAlign: 'center',
        lineHeight: 20,
        marginBottom: 14,
    },
    button: {
        backgroundColor: '#2563eb',
        paddingVertical: 10,
        paddingHorizontal: 22,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 14,
    },
});

export default StudentInfo;
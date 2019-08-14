import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, StyleSheet, Image, TextInput, Text, TouchableOpacity, Platform } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../services/api';

import logo from '../assets/logo.png';


export default function Login({ navigation }) {
    const [user, setUser] = useState('');

    useEffect(() => {
        AsyncStorage.getItem('user').then(user => {
            if(user){
                navigation.navigate('Main', { user });
            }
        })
    }, []);

    async function handleLogin() {
        const response = await api.post('/devs', {username: user});

        const { _id } = response.data;

        await AsyncStorage.setItem('user', _id);

        navigation.navigate('Main', {'user': _id});
    }
    return(
        <KeyboardAvoidingView 
            style={styles.container}
            behavior="padding"
            enabled={Platform.OS === 'ios'}
        >
            <Image source={logo} />
            <TextInput
                autoCapitalize="none"
                autoCorrect={ false } 
                placeHolderTextColor="#959595"
                placeholder="Digite seu usuário do Github"
                style={styles.input}
                value={user}
                onChangeText={setUser} 
            />
            <TouchableOpacity onPress={handleLogin} style={styles.button}>
                <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30
    },
    input: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#ddd',
        marginTop: 20,
        paddingHorizontal: 15
    },
    button: {
        height: 46,
        backgroundColor: '#DF4723',
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        marginTop: 10
    },
    buttonText: {
        fontWeight: 'bold',
        color: '#FFF',
    }
  });
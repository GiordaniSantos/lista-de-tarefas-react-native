import React, { Component } from 'react'
import { ImageBackground, Text, StyleSheet, View, TouchableOpacity, Alert } from 'react-native'

import backgroundImage from '../../assets/imgs/login.jpg'
import CommonStyles from '../CommonStyles'
import AuthInput from '../components/AuthInput'

export default class Auth extends Component {

    state = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        telaCriacao: false
    }

    signinOrSiginUp = () => {
        if(this.state.telaCriacao){
            Alert.alert('Sucesso!', 'Criar conta')
        } else {
            Alert.alert('Sucesso!', 'Logar')
        }
    }

    render() {
        return (
            <ImageBackground source={backgroundImage} style={styles.background}>
                <Text style={styles.title}>Tarefas</Text>
                <View style={styles.formContainer}>
                    <Text style={styles.subTitle}>{this.state.telaCriacao ? 'Crie a sua conta' : 'Informe seus dados'}</Text>
                    {this.state.telaCriacao && 
                    <AuthInput 
                        icon='user' 
                        placeholder='Nome' 
                        value={this.state.name} 
                        style={styles.input} 
                        onChangeText={textName => this.setState({ name: textName })} />}
                    <AuthInput 
                        icon='at'
                        placeholder='E-mail' 
                        value={this.state.email} 
                        style={styles.input} 
                        onChangeText={textEmail => this.setState({ email: textEmail })} />
                    <AuthInput 
                        icon='lock' 
                        placeholder='Senha' 
                        value={this.state.password} 
                        secureTextEntry={true} style={styles.input} 
                        onChangeText={textSenha => this.setState({ password: textSenha })} />
                    {this.state.telaCriacao && 
                    <AuthInput 
                        icon='asterisk' 
                        placeholder='Confirme a Senha' 
                        value={this.state.confirmPassword} 
                        secureTextEntry={true} style={styles.input} 
                        onChangeText={textConfirmaSenha => this.setState({ confirmPassword: textConfirmaSenha })} />}
                    <TouchableOpacity onPress={this.signinOrSiginUp}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>
                                {this.state.telaCriacao ? 'Registrar' : 'Entrar'}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ padding: 10 }} onPress={() => this.setState({ telaCriacao: !this.state.telaCriacao })}>
                    <Text style={styles.buttonText}>
                        {this.state.telaCriacao ? 'Já possui conta?' : 'Ainda não possui conta?'}
                    </Text>
                </TouchableOpacity>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontFamily: CommonStyles.fontFamily,
        color: CommonStyles.colors.secondary,
        fontSize: 60,
        marginBottom: 10
    }, 
    subTitle: {
        fontFamily: CommonStyles.fontFamily,
        color: '#FFF',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10
    },
    background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    formContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 20,
        width: '90%'
    },
    input: {
        marginTop: 10,
        backgroundColor: '#FFF'
    },
    button: {
        backgroundColor: '#080',
        marginTop: 10,
        padding: 10,
        alignItems: 'center',
        borderRadius: 7
    },
    buttonText: {
        fontFamily: CommonStyles.fontFamily,
        color: '#FFF',
        fontSize: 20
    }
})
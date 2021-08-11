import React, { useRef } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {View, Text, ScrollView } from 'react-native';
import { Form } from '@unform/mobile';

import { styles } from './styles'

import { ButtonPattern } from '../../components/ButtonPattern';
import { Input } from '../../components/Input';

import { useNavigation } from '@react-navigation/native';
import { FormHandles } from '@unform/core';

export function Login(){

const navigation = useNavigation()

const formRef = useRef<FormHandles>(null);

function handleSubmit(data: any) {

}

return(
<LinearGradient 
style={styles.container} 
colors={['#2D9CDB', '#2F80ED']}
>


<Text style={styles.title}>Kids up</Text>

<ScrollView>

<View style={styles.ViewContainer} >
 <Text style={styles.caption}>Login</Text>

<Form ref={formRef} onSubmit={handleSubmit}>


<Text style={styles.label}>E-mail</Text> 
<Input name={"email"} 
placeholder="email@provedor.com" 
 marginBottom={20} />

<Text style={styles.label}>Senha</Text> 
<Input name={"password"}
placeholder="*******" 
marginBottom={20} />

</Form>

<ButtonPattern  marginBottom={20}  navigation={navigation} >
Entrar
</ButtonPattern> 

<Text>Você não possui uma conta?<Text style={styles.LinkText}> Registre-se</Text> </Text>

</View>

</ScrollView>
</LinearGradient>

 );
}
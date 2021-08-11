import React, { useRef } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {View, Text, ScrollView } from 'react-native';
import { Form } from '@unform/mobile';

import { styles } from './styles'

import { ButtonPattern } from '../../components/ButtonPattern';
import { Input } from '../../components/Input';

import { useNavigation } from '@react-navigation/native';
import { FormHandles } from '@unform/core';

export function Signin(){

const navigation = useNavigation()

const formRef = useRef<FormHandles>(null);

function handleSubmit(data: any) {

}

return(
<ScrollView>

<LinearGradient 
style={styles.container} 
colors={['#2D9CDB', '#2F80ED']}
>


<Text style={styles.title}>Kids up</Text>


<View style={styles.ViewContainer} >
 <Text style={styles.caption}>Registrar </Text>

<Form ref={formRef} onSubmit={handleSubmit}>

 <Input name={"email"} placeholder="email@provedor.com" marginBottom={34} />

 <Input name={"phone"} placeholder="(00) 900000-0000" marginBottom={34} />

 <Input name={"password"} placeholder="*******" marginBottom={34} />

 <Input name={"confirm"} placeholder="*******" marginBottom={34} />

</Form>

<ButtonPattern  marginBottom={20}  navigation={navigation} >
 Próximo
</ButtonPattern> 

<Text>Já possui uma conta? <Text style={styles.LinkText}>Entre</Text> </Text>

</View>

</LinearGradient>

</ScrollView>
 );
}
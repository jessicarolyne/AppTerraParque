import React from 'react';
import {View, Text, Image, Button, ImageBackground, Pressable} from 'react-native';

import estilos from './estilos';
import fachada from '../../assets/images/fachada.jpg';

export default function TelaInicial(props){
    return (
        <ImageBackground 
            source={fachada} 
            style={estilos.container}
            blurRadius={1}
            resizeMode="cover"
        >
            <View style={estilos.container}>
                <View style={estilos.card}>
                    <View style={estilos.conteudo}>
                        <Text style={estilos.titulo}>Terra Parque</Text>
                        <Text style={estilos.texto}>Saiba o que visitar no Terra Parque</Text>
                    </View>
                    <Pressable 
                        style={estilos.botao}
                        onPress={()=>{props.navigation.navigate("Restaurante")}}
                    >
                        <Text style={estilos.botaotitulo}>Restaurante</Text>
                    </Pressable>
                    <Pressable
                        style={estilos.botao}
                        onPress={()=>{props.navigation.navigate("Passeios")}}
                    >
                        <Text style={estilos.botaotitulo}>Passeios</Text>
                    </Pressable>
                    <Pressable 
                        style={estilos.botao}
                        onPress={()=>{props.navigation.navigate("Hospedagens")}}
                    >
                        <Text style={estilos.botaotitulo}>Hospedagens</Text>
                    </Pressable>
                </View>
            </View>
        </ImageBackground>
    )
}
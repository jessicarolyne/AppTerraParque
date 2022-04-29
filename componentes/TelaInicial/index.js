import React from 'react';
import {View, Text, Image, Button, ImageBackground} from 'react-native';

import estilos from './estilos';
import fachada from '../../assets/images/fachada.jpg';

export default function TelaInicial(props){
    return (
        <ImageBackground source={fachada} style={estilos.container}>
            <View style={estilos.container}>
                <View style={estilos.card}>
                    <View style={estilos.conteudo}>
                        <Text style={estilos.titulo}>Terra Parque</Text>
                        <Text style={estilos.texto}>Saiba o que visitar no Terra Parque</Text>
                    </View>
                    <View style={estilos.botao}>
                        <Button
                            title="Restaurantes"
                            onPress={()=>{props.navigation.navigate("Restaurante")}}
                        />
                    </View>
                    <View style={estilos.botao}>
                        <Button
                            style={estilos.botao}
                            title='Passeios'
                            onPress={()=>{props.navigation.navigate("Passeios")}}
                        />
                    </View>
                    <View style={estilos.botao}>
                        <Button
                            style={estilos.botao}
                            title="Hospedagens"
                            onPress={()=>{props.navigation.navigate("Hospedagens")}}
                        />
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}
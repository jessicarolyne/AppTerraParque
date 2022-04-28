import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import estilos from '../TelaRestaurantes/estilos';

import cafe from '../../assets/images/cafe-da-manha.jpg';
import salada from '../../assets/images/salada.jpg';
import pratos from '../../assets/images/pratos-quentes.jpg';

export default function TelaRestaurantes(){
    return (
        <ScrollView>
            <View style={estilos.container}>
                <View style={estilos.conteudo}>
                    <Text style={estilos.titulo}>Restaurante</Text>
                    <Text style={estilos.texto}>Traga a sua família e amigos para uma boa refeição no restaurante mais musical do Oeste Paulista.</Text>
                </View>
                <View style={estilos.card}>
                    <Image source={cafe} style={estilos.imagem}/>
                    <Text style={estilos.titulocard}>Café da manhã</Text>
                    <Text style={estilos.textocard}>Temos 8 tipos de pães e 3 tipos de salgados.</Text>
                </View>
                <View style={estilos.card}>
                    <Image source={salada} style={estilos.imagem}/>
                    <Text style={estilos.titulocard}>Saladas</Text>
                    <Text style={estilos.textocard}>Mais de 15 tipos de saladas (folhas, e saladas).</Text>
                </View>
                <View style={estilos.card}>
                    <Image source={pratos} style={estilos.imagem}/>
                    <Text style={estilos.titulocard}>Pratos Quentes</Text>
                    <Text style={estilos.textocard}>Refeições temáticas com mais de 15 pratos.</Text>
                </View>
            </View>
        </ScrollView>
    )
}
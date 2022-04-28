import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import estilos from '../TelaPasseios/estilos';

import arena from '../../assets/images/arena-paintball.jpg';
import arborismo from '../../assets/images/arborismo-com-tirolesa.jpg';
import passeio from '../../assets/images/passeio-a-cavalo.jpg';

export default function TelaRestaurantes(){
    return (
        <ScrollView>
            <View style={estilos.container}>
                <View style={estilos.conteudo}>
                    <Text style={estilos.titulo}>Passeios</Text>
                    <Text style={estilos.texto}>No Terra Parque, o combate é realizado entre equipes de, no mínimo, dois integrantes cada...</Text>
                </View>
                <View style={estilos.card}>
                    <Text style={estilos.titulocard}>Arena paintball</Text>
                    <Image source={arena} style={estilos.imagem}/>
                </View>
                <View style={estilos.card}>
                    <Text style={estilos.titulocard}>arborismo com tirolesa</Text>
                    <Image source={arborismo} style={estilos.imagem}/>
                </View>
                <View style={estilos.card}>
                    <Text style={estilos.titulocard}>Passeio a cavalo</Text>
                    <Image source={passeio} style={estilos.imagem}/>
                </View>
            </View>
        </ScrollView>
    )
}
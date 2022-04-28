import React from 'react';
import {View, Text, Image} from 'react-native';
import estilos from '../TelaHospedagens/estilos';

import gold from '../../assets/images/vip-gold.jpg';
import luxo from '../../assets/images/vip-luxo.jpg';
import master from '../../assets/images/master-gold.jpg';

export default function TelaRestaurantes(){
    return (
        <View style={estilos.container}>
            <View style={estilos.conteudo}>
                <Text style={estilos.titulo}>Hospedagens</Text>
                <Text style={estilos.texto}>Apartamentos localizados na Petra Ville, situados entre 100 e 120 metros da recepção e restaurante.</Text>
            </View>
            <View style={estilos.card}>
                <Image source={gold} style={estilos.imagem}/>
                <Text style={estilos.titulocard}>Vip Gold</Text>
                <Text style={estilos.textocard}>Valor: R$ 350,00 por dia</Text>
            </View>
            <View style={estilos.card}>
                <Image source={luxo} style={estilos.imagem}/>
                <Text style={estilos.titulocard}>Vip Luxo</Text>
                <Text style={estilos.textocard}>Valor: R$ 500,00 por dia</Text>
            </View>
            <View style={estilos.card}>
                <Image source={master} style={estilos.imagem}/>
                <Text style={estilos.titulocard}>Master Gold</Text>
                <Text style={estilos.textocard}>Valor: R$ 750,00 por dia</Text>
            </View>
        </View>
    )
}
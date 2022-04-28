import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
    container: {
        backgroundColor: 'pink',
        padding: 10,
        height: '100%',
    },
    conteudo: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 5,
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    texto: {
        fontSize: 16,
        textAlign: 'center',
    },
    card: {
        backgroundColor: '#fff',
        width: '100%',
        height: 160,
        padding: 10,
        marginVertical: 10,
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 5,
    },
    imagem: {
        width: '100%',
        height: 80,
    },
    titulocard: {
        fontSize: 15,
        fontWeight: 'bold',
        paddingVertical: 5,
    },
    textocard: {
        fontSize: 14,
    }
});

export default estilos;
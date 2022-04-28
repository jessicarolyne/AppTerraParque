import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
    container: {
        backgroundColor: 'lightblue',
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
        fontSize: 14,
        textAlign: 'center',
    },
    card: {
        backgroundColor: '#fff',
        width: '100%',
        height: 250,
        padding: 10,
        marginVertical: 10,
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 5,
    },
    imagem: {
        width: '100%',
        height: 170,
        borderRadius: 5,
    },
    titulocard: {
        fontSize: 15,
        fontWeight: 'bold',
        paddingVertical: 5,
        paddingVertical: 5,
    },
});

export default estilos;
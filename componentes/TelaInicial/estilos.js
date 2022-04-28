import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
    container: {
        backgroundColor: 'gray',
        padding: 15,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    card: {
        backgroundColor: 'white',
        padding: 10,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5,
    },
    conteudo: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    texto: {
        fontSize: 16,
        marginBottom: 10
    },
    imagem: {
        width: 300,
        height: 300,
        marginBottom: 10,
    },
    botao: {
        marginBottom: 10,
    }
});

export default estilos;
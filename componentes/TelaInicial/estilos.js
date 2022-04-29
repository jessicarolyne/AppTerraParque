import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        alignItems:'center',
        justifyContent: 'center',
    },
    card: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 10,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 5,
        
    },
    conteudo: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 24,
        fontWeight: '500',
        color: '#fff',
    },
    texto: {
        fontSize: 16,
        marginBottom: 10,
        color: '#fff',
    },
    botao: {
        marginBottom: 10,
    }
});

export default estilos;
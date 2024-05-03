import { View, Text, StyleSheet, Button, TouchableHighlight} from 'react-native'
import React from 'react'

export default function Cita(props) {
    
    const procesoEliminar = (id) => {
        console.log('eliminando....', id);
        props.eliminarCitas(id);
    }

    return (
    <View style={styles.cita}>
        <View>
            <Text style={styles.label}>Paciente: </Text>
            <Text style={styles.texto}>{props.item.paciente}</Text>
        </View>
        <View>
            <Text style={styles.label}>Medico: </Text>
            <Text style={styles.texto}>{props.item.propietario}</Text>
        </View>
        <View>
            <Text style={styles.label}>Sintomas: </Text>
            <Text style={styles.texto}>{props.item.sintomas}</Text>
        </View>
        <View>
            <TouchableHighlight onPress={()=> procesoEliminar(props.item.id)} style={styles.btnEliminar}>
                <Text style={styles.textoEliminar}>Eliminar</Text>
            </TouchableHighlight>
        </View>
    </View>
  )
}



const styles = StyleSheet.create({
    cita: {
        backgroundColor: '#DDC582',
        marginBottom: 10,
        borderStyle: 'solid',
        borderRadius: 15,
        borderBottomWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    label: {
        color: '#030303',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20
    },
    texto: {
        color: '#1E18A8',
        fontSize: 18,
    },
    btnEliminar: {
        padding: 10,
        borderRadius: 15,
        backgroundColor: '#0B05B6',
        marginVertical: 10         
    },
    textoEliminar: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'        
    }
})
import { View, Text, StyleSheet, TextInput, Button, ScrollView } from 'react-native'
import React, { useState } from 'react'
import DateTimePickerModal from "react-native-modal-datetime-picker";



export default function Formulario() {

    //DataPicker

        const [isDatePickerVisible, setDatePickerVisibility] = useState(false); 
        const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
      
        // Fecha
        const showDatePicker = () => {
          setDatePickerVisibility(true);
        };
      
        const hideDatePicker = () => {
          setDatePickerVisibility(false);
        };
        const confirmarFecha = (date) => {
            console.warn("A date has been picked: ", date);
            hideDatePicker();
          };
        // Hora
        const showTimePicker = () => {
            setTimePickerVisibility(true);
          };
        
          const hideTimePicker = () => {
            setTimePickerVisibility(false);
          };
          const confirmarHora = (date) => {
            console.warn("A date has been picked: ", date);
            hideTimePicker();
          };
        
  return (
    <>
    
    <View style={styles.formulario}>
      <Text style={styles.label}>Paciente: </Text>
      <TextInput
        placeholder='Nombre completo del paciente'
        style={styles.input}
        onChangeText={(texto)=> console.log(texto)}
      />
    </View>

    <View style={styles.formulario}>
      <Text style={styles.label}>Cédula: </Text>
      <TextInput
        placeholder='Número de cédula del paciente'
        style={styles.input}
        onChangeText={(texto)=> console.log(texto)}
        keyboardType='numeric'
      />
    </View>

    <View style={styles.formulario}>
      <Text style={styles.label}>Médico Tratante: </Text>
      <TextInput
        placeholder='Nombre del Médico'
        style={styles.input}
        onChangeText={(texto)=> console.log(texto)}
      />
    </View>
    <View style={styles.formulario}>
      <Text style={styles.label}>Teléfono de contacto: </Text>
      <TextInput
        placeholder='Número de teléfono'
        style={styles.input}
        onChangeText={(texto)=> console.log(texto)}
        keyboardType='numeric'
      />
    </View>
    <View style={styles.formulario}>
      <Text style={styles.label}>Síntomas: </Text>
      <TextInput
      multiline
        style={styles.input}
        onChangeText={(texto)=> console.log(texto)}
      />
    </View>

    <View style={styles.formulario}>
      <Button title="Seleccione fecha" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={confirmarFecha}
        onCancel={hideDatePicker}
        locale='es_ES'
        cancelTextIOS='Cancelar'
        confirmTextIOS='Confirmar'
      />
    </View>
    <View style={styles.formulario}>
      <Button title="Seleccionar hora" onPress={showTimePicker} />
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={confirmarHora}
        onCancel={hideTimePicker}
        locale='es_ES'
        cancelTextIOS='Cancelar'
        confirmTextIOS='Confirmar'
      />
    </View>
   
    </>
    
  )
}

const styles = StyleSheet.create({
    formulario: {
        backgroundColor: '#DDC582',
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: -1
    },
    input: {
        backgroundColor: '#fff',
        marginTop: 10,
        height: 45,
        borderColor: '#0B0404',
        borderWidth: 1,
        borderRadius: 15,
        paddingLeft: 8,
        borderStyle: 'solid'
    }
})
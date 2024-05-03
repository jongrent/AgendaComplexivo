import React, { useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import Cita from "./components/Cita";
import Formulario from "./components/Formulario";



export default function App() {
  
  //definir el state del citas
  const [citas, setCitas] = useState([
    {
      id: "1",
      paciente: "Carlos Jacome",
      propietario: "Juan",
      sintomas: "Dificultad al respirar",
    },
    {
      id: "2",
      paciente: "Sede",
      propietario: "Jesus",
      sintomas: "No presenta examenes",
    },
    { id: "3",
     paciente: "Cuarto", 
     propietario: "Paulo", 
     sintomas: "No explica" },
  ]);

  const eliminarCitas = id => {
    setCitas((citasActuales) => {
      return citasActuales.filter(cita => cita.id !== id)
    }) 
}

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.titulo}>Administrador de Citas</Text>

      <Formulario/>

      <Text style={styles.titulo}> { citas.length > 0 ? 'Administra tus citas' : 'No hay citas, agrega una'}</Text>
      <FlatList
        data={citas}
        renderItem={({item}) => <Cita item={item} eliminarCitas = {eliminarCitas}/>}
        keyExtractor={citas.id}
      /> 
      
    </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#47E0E5",
  },

  titulo: {
    color: "black",
    marginTop: 60,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});

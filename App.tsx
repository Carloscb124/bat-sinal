import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import styles from './styles/batLogo';
import React, { useState } from 'react';


interface FormData {
  nome: string;
  telefone: string;
  localizacao: string;
  observacao: string;
}

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    telefone: "",
    localizacao: "",
    observacao: ""
  });

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (!formData.nome || !formData.localizacao) {
      Alert.alert('Erro', 'Por favor, preencha pelo menos nome e localização');
      return;
    }
    
    Alert.alert('Sucesso', 'Bat-Sinal ativado! Batman está a caminho.');
    console.log('Dados enviados:', formData);
    
    setFormData({
      nome: "",
      telefone: "",
      localizacao: "",
      observacao: ""
    });
    
    setShowForm(false);
  };

  return (     
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {!showForm ? (
        <>
          <View style={styles.logoContainer}>
            <Image 
              source={require("./assets/batman-logo3.png")}
              style={styles.logoImage}
            />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => setShowForm(true)}
            >
              <Text style={styles.buttonText}>
                Ativar Bat-Sinal
              </Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <KeyboardAvoidingView 
          style={{flex: 1}} 
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center', padding: 20}}>
            <View style={styles.formContainer}>
              <Text style={styles.title}>Preencha todos os campos</Text>

              <TextInput 
                style={styles.input}
                placeholder='Nome'
                value={formData.nome}
                onChangeText={text => handleChange('nome', text)}
                autoCapitalize='words'
              />

              <TextInput
                style={styles.input}
                placeholder="Telefone"
                keyboardType="phone-pad"
                value={formData.telefone}
                onChangeText={text => handleChange('telefone', text)}
              />

              <TextInput
                style={styles.input}
                placeholder="Localização atual"
                value={formData.localizacao}
                onChangeText={text => handleChange('localizacao', text)}
              />

              <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Observação"
                multiline
                value={formData.observacao}
                onChangeText={text => handleChange('observacao', text)}
              />
              
              <View style={styles.buttonWrapper}>
                <TouchableOpacity style={styles.formButton} onPress={handleSubmit}>
                  <Text style={styles.buttonText}>Enviar</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.buttonWrapper}>
                <TouchableOpacity onPress={() => setShowForm(false)}>
                  <Text style={styles.backButtonText}>Voltar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      )}
    </View>
  );
}
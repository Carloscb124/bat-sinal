import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '80%',
    paddingBottom: 20,
    marginTop: 100
  },
  logoImage: {
    width: 320,
    height: 250,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: "#fff200",
    padding: 35,
    borderRadius: 30,
    width: "80%",
    alignItems: "center",
    justifyContent: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 180,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    width: '100%',
  },
  textArea: {
    height: 100,
    textAlignVertical: "top"
  },
  title: {
    fontSize: 24,
    fontFamily: 'BatmanForeverAlternate',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontFamily: 'BatmanForeverAlternate', 
    fontSize: 18, 
    fontWeight: 'bold',
    color: '#000',
  },
  backButtonText: {
    color: '#fff200',
    fontSize: 16,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  formContainer: {
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center', // Centraliza todos os itens
  },
  buttonWrapper: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  formButton: {
    backgroundColor: "#fff200",
    padding: 30,
    borderRadius: 30,
    width: "100%",
    alignItems: "center",
    justifyContent: 'center',
  },
});

export default styles;
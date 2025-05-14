import React from "react";
import { View, Text, TextInput,TouchableOpacity,StyleSheet } from "react-native";

interface InputProps {
  term: string;
  setTerm: (text: string) => void;
  onSubmit: () => void;
}

const Input: React.FC<InputProps> = ({ term, setTerm, onSubmit }) => {
  return (
  <View>
      <TextInput
        style={styles.input}
        placeholder="Enter a term (e.g. photosynthesis)"
        value={term}
        onChangeText={setTerm}
      />
      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Input;


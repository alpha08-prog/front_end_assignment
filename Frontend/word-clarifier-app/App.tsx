import React,{useState, useEffect} from 'react';
import { View, Text, ActivityIndicator, ScrollView, StyleSheet } from 'react-native';

import Input from './components/Input';
import Card from './components/Card';
import ErrorMsg from './components/ErrorMsg';


export default function App() {
  const [term , setTerm] = useState('');
  const [definition, setDefinition] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchDefinition = async () => {
    if (!term.trim()) return;

    setLoading(true);
    setError(null);
    setDefinition(null);

    try {
      const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${term.trim()}`);
      if (!res.ok) throw new Error('Term not found');
      const data = await res.json();
      setDefinition(data[0]);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
};

return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Term Clarifier</Text>
      <Input term={term} setTerm={setTerm} onSubmit={fetchDefinition} />
      {loading && <ActivityIndicator size="large" color="#007AFF" />}
      {error && <ErrorMsg message={error} />}
      {definition && <Card definition={definition} />}
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#fff',
    minHeight: '100%',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
});

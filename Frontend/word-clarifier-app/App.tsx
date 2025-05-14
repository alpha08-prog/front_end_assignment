import React, { useState } from 'react';
import { View, Text, ActivityIndicator, ScrollView, StyleSheet } from 'react-native';

import Input from './components/Input';
import Card from './components/Card';
import ErrorMsg from './components/ErrorMsg';

export default function App() {
  const [term, setTerm] = useState('');
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
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.title}> Word Clarifier</Text>
      <Text style={styles.subtitle}>
        Instantly find definitions and examples of any word
      </Text>

      <Input term={term} setTerm={setTerm} onSubmit={fetchDefinition} />

      <View style={styles.resultContainer}>
        {loading && (
          <View style={styles.loading}>
            <ActivityIndicator size="large" color="#4F46E5" />
            <Text style={styles.loadingText}>Searching...</Text>
          </View>
        )}
        {error && <ErrorMsg message={error} />}
        {definition && <Card definition={definition} />}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingTop: 60,
    backgroundColor: '#F9FAFB',
    minHeight: '100%',
  },
  title: {
    fontSize: 28,
    marginBottom: 6,
    fontWeight: '700',
    textAlign: 'center',
    color: '#1F2937',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#6B7280',
    marginBottom: 24,
  },
  resultContainer: {
    marginTop: 16,
  },
  loading: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  loadingText: {
    marginTop: 8,
    fontSize: 14,
    color: '#6B7280',
  },
});
import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface CardProps {
  definition: any;
}

const Card: React.FC<CardProps> = ({ definition }) => {
    return (
    <>
      {definition.meanings.map((meaning: any, i: number) => (
        <View key={i} style={styles.card}>
          <Text style={styles.partOfSpeech}>{meaning.partOfSpeech}</Text>
          {meaning.definitions.map((def: any, j: number) => (
            <View key={j} style={styles.definitionBlock}>
              <Text style={styles.definitionText}>• {def.definition}</Text>
              {def.synonyms && def.synonyms.length > 0 && (
                <Text style={styles.synonyms}>
                  Synonyms:{" "}
                  {def.synonyms.map((syn: string, k: number) => (
                    <Text key={k} style={styles.synonymHighlight}>
                      {syn}
                      {k < def.synonyms.length - 1 ? ', ' : ''}
                    </Text>
                  ))}
                </Text>
              )}
            </View>
          ))}
        </View>
      ))}
    </>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
    elevation: 2,
  },
  partOfSpeech: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 6,
  },
  definitionBlock: {
    marginBottom: 8,
  },
  definitionText: {
    fontSize: 15,
    color: '#444',
  },
  synonyms: {
    marginTop: 4,
    fontSize: 14,
    color: '#333',
  },
  synonymHighlight: {
    color: '#007AFF',
    fontWeight: '500',
  },
});


export default Card;
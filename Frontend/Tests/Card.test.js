import React from 'react';
import { render } from '@testing-library/react-native';
import Card from '../word-clarifier-app/components/Card';

const mockDefinition = {
  word: 'gravity',
  phonetic: '/ˈɡravədē/',
  meanings: [
    {
      partOfSpeech: 'noun',
      definitions: [
        {
          definition: 'The force that attracts a body toward the center of the earth.',
          example: 'Gravity keeps us on the ground.',
        },
      ],
    },
  ],
};

describe('DefinitionCard', () => {
  it('renders the word and definition', () => {
    const { getByText } = render(<Card definition={mockDefinition} />);
    expect(getByText(/gravity/i)).toBeTruthy();
    expect(getByText(/The force that attracts/i)).toBeTruthy();
  });
});

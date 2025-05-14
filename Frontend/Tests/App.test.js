import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../word-clarifier-app/App';


describe('App', () => {
  it('renders the title correctly', () => {
    const { getByText } = render(<App />);
    expect(getByText(/Word Clarifier/i)).toBeTruthy();
  });
});

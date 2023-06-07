// Import necessary libraries
import React from 'react';
import styled from 'styled-components';
import { HomePage } from './app/containers/HomePage';

// Create a styled container
const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Create an App function styled with a component
function App() {
  return <AppContainer>
    <HomePage />
  </AppContainer>
}

// Export the function
export default App;

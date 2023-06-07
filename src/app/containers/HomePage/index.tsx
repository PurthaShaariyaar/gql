// Import required libraries
import React from 'react';
import styled from 'styled-components';

// Initialize a HomePage interface
interface IHomePageProps {

}

// Create a styled container
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Export HomePage function
export function HomePage(props: IHomePageProps) {
  return <Container>
    <h1>Top Anime Picks</h1>
  </Container>
}

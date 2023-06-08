// Import required libraries
import React, { Dispatch, useEffect } from 'react';
import styled from 'styled-components';
import animeService from '../../services/animeService';
import { GetAnimePageQuery } from '../../services/animeService/GetAnimePage';
import { setAnimePage } from './homePageSlice';
import { useAppDispatch } from '../../hooks';

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

const actionDispatch = (dispatch: Dispatch<any>) => ({
  setAnimePage: (page: GetAnimePageQuery["Page"]) => dispatch(setAnimePage(page))
});

// Export HomePage function
export function HomePage(props: IHomePageProps) {

  const { setAnimePage } = actionDispatch(useAppDispatch());

  const fetchAnimePage = async () => {
    const animePage = await animeService.getAnimePage(0).catch((err) => {
      console.log("Error: ", err);
    });

    console.log("Anime page: ", animePage);
    if(animePage)
      setAnimePage(animePage);
  };

  useEffect(() => {
    fetchAnimePage();
  }, []);

  return <Container>
    <h1>Top Anime Picks</h1>
  </Container>
}

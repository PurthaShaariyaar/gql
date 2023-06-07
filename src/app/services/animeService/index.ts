import { apolloClient } from "../../graphql";
import { GetAnimePageQuery } from "./GetAnimePage";
import { GET_ANIME_PAGE } from "./queries";

// Created an AnimeService class
class AnimeService {

  async getAnimePage(page: Number, perPage = 5): Promise<GetAnimePageQuery["Page"]> {
    try {

      const response = await apolloClient.query({ query: GET_ANIME_PAGE, variables: {page, perPage} });

      if (!response || !response.data)
        throw new Error("Cannot retrieve anime list!");

      return response.data;

    } catch (err) {
      throw err;
    }
  }

}

// Export AnimeService
export default new AnimeService();


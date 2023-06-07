// Import from animeService query module
import { GetAnimePageQuery } from "../../services/animeService/GetAnimePage";

// Define the interface for the home page state
export interface IHomePageState {
  animePage: GetAnimePageQuery["Page"];
}


import { api } from "./api";

export async function upcomingMovieRequest() {
    try {
        const response = await api.get('/discover/movie?api_key=5e7ddcd8633dca4662efc3d617b08e4a&language=uk&sort_by=popularity.desc');
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

export async function upcomingMovieGenreRequest() {
    try {
        const response = await api.get('/genre/movie/list?api_key=5e7ddcd8633dca4662efc3d617b08e4a&language=uk');
        return response.data.genres;
    } catch (err) {
        console.log(err);
    }
}
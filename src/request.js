//This is access key or api key 
const ACCESS_KEY = 'c9af592e2e3d5aa0d8a4568e9200927e'; 

//this is request object for different requests
const request = {
    //this api is fetching documentires
    fetchDocumentries: `/discover/movie?api_key=${ACCESS_KEY}&with_genres=99`,

    //this api is fetching discovering movies with different genres
    fetchComedyMovies: `/discover/movie?api_key=${ACCESS_KEY}&with_genres=35`,
    fetchRommanceMovies: `/discover/movie?api_key=${ACCESS_KEY}&with_genres=10749`,
    fetchNetflixOriginal: `/discover/tv?api_key=${ACCESS_KEY}&with_networks=213`,
    fetchTrending: `/trending/all/week?api_key=${ACCESS_KEY}&language=en-US`,

    //this api is fetching top rated 
    fetchTopRated: `/movie/top_rated?api_key=${ACCESS_KEY}&language=en-US`,

    //this api is fetching horror movies 
    fetchHorrorMovies:`/discover/movie?api_key=${ACCESS_KEY}&with_genres=27`,

    //finally last api is fetching action full movies
    fetchActionMovies: `/discover/movie?api_key=${ACCESS_KEY}&with_genres=28`,
};

export default request;
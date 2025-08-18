export const TMDB_URL={
    BASE_URL:'https://api.themoviedb.org/3',
    API_KEY:process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    Header:{
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }
} 
export const fetchMovies= async({query}:{query:string})=>{
    const endpoint= query ? `${TMDB_URL.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`:
    `${TMDB_URL.BASE_URL}/discover/movie?include_adult=true&include_video=false&language=en-US&page=1&sort_by=vote_count.desc`
    const response=await fetch(endpoint,{
        method:'GET',
        headers:TMDB_URL.Header
    })
    if(!response.ok){

        throw new Error("something Wrong");
        
    }
    const data=await response.json()
    return data.results
}


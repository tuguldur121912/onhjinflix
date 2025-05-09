export const TMDB_CONFIG = {
    apiKey: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    baseUrl: 'https://api.themoviedb.org/3',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }
};

export const fetchMovies = async ({ query }: { query: string }) => {
    const endpoint = query
        ? `/search/movie?query=${encodeURIComponent(query)}`
        : '/discover/movie?sort_by=popularity.desc';

    const response = await fetch(`${TMDB_CONFIG.baseUrl}${endpoint}`, {
        method: 'GET',
        headers: TMDB_CONFIG.headers,
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch movies: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data.results;
};

interface belongs_to_collection {
    id: number,
    name: string,
    poster_path: string,
    backdrop_path: string
}

interface genres {
    id: number,
    name: string
}

interface production_companies {
    id: number,
    logo_path: null | string,
    name: string,
    origin_country: string
}

interface production_countries {
    iso_3166_1: string,
    name: string
}

interface spoken_languages {
    english_name: string,
    iso_639_1: string,
    name: string
}

export interface IMovieDetails {
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection: belongs_to_collection,
    budget: number,
    genres: genres[],
    homepage: string,
    id: number,
    imdb_id: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies: production_companies[],
    production_countries: production_countries[],
    release_date: string,
    revenue: number,
    runtime: number,
    spoken_languages: spoken_languages[],
    status: string,
    tagline: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}
import { useState } from 'react'

export const SearcherApp = () => {

    const URL = "https://api.themoviedb.org/3/search/movie"
    const API_KEY = "020e5a7cff3be607f1503c4dab21fac2"

    const [search, setSearch] = useState('')

    const [movies, setMovies] = useState([])

    const onChangeInput = (e) => {
        setSearch(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        fetchMovies()
    }

    const fetchMovies = async () => {
        try {
            const res = await fetch(`${URL}?query=${search}&api_key=${API_KEY}`)
            const data = await res.json()
            setMovies(data.results)
            console.log(data)
        } catch (error) {
            console.log('Hubo un error:' + error)
        }
    }

    const check = () => {
        console.log(movies)
        console.log(movies.results)
    }

    return (
        <div className="container">
            <h1>
                <span>M</span>
                <span>o</span>
                <span>v</span>
                <span>i</span>
                <span>e</span>
                <span>S</span>
                <span>e</span>
                <span>a</span>
                <span>r</span>
                <span>c</span>
                <span>h</span>
                <span>e</span>
                <span>r</span>
            </h1>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    onChange={onChangeInput}
                    value={search}
                    placeholder='Search a movie...'></input>
                <button type="submit">Search</button>
            </form>

            {/* <button onClick={check}>check</button> */}


            <div className="movie-list">
                {movies.map( (movie) => {
                    return(
                    <div key={movie.id} className="movie-card">
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}></img>
                        <h2>{movie.title}</h2>
                        <p>{movie.overview}</p>
                    </div>
                )
                })}
            </div>
        </div>
    )
}

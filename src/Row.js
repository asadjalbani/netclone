import React, {useState, useEffect} from "react";
import axios from "./axios";
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer';
import './Row.css';

const img_base = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl, isLarge }){
    const [movies, setMovies] = useState([]);
    const [trailer, setTrailer] = useState("");

    useEffect(()=>{
        async function fetchMovie(){
            const req = await axios.get(fetchUrl);
            console.log(req);
            setMovies(req.data.results);
        }
        fetchMovie();
    },[fetchUrl]);

    const handleClick = (movie) => {
        if(trailer) {
            setTrailer('');
        } else {
            movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
            .then(url => {
                const mid = new URLSearchParams(new URL(url).search);
                setTrailer(mid.get('v'));
            }).catch(error => window.alert("Can't find video.."));
        }
    }

    const opts = {
        height: "390",
        width : "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    return(
        <div className='row'>
            <h1>{title}</h1>

            <div className="r_posters">
                {movies.map(movie => (
                    <img 
                    onClick= {() => handleClick(movie)}
                    key={movie.id}
                    className={`r_poster ${isLarge && "r_posterLarge"}`}
                    src={`${img_base}${isLarge ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
                ))}
            </div>
            {trailer && <YouTube videoId={trailer} opts={opts} />}
        </div>
    );
}

export default Row;
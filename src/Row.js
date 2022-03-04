import React, {useState, useEffect} from "react";
import axios from "./axios";
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer';
import './Row.css';

const img_base = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl, isLarge }){
    const [films, setFilms] = useState([]);
    const [preview, setPreview] = useState("");

    useEffect(()=>{
        async function fetchMovie(){
            const req = await axios.get(fetchUrl);
            console.log(req);
            setFilms(req.data.results);
        }
        fetchMovie();
    },[fetchUrl]);

    const handleClick = (movie) => {
        if(preview) {
            setPreview('');
        } else {
            movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
            .then(url => {
                const mid = new URLSearchParams(new URL(url).search);
                setPreview(mid.get('v'));
            }).catch(error => window.alert("Can't find video.."));
        }
    }

    const options = {
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
                {films.map(item => (
                    <img 
                    onClick= {() => handleClick(item)}
                    key={item.id}
                    className={`r_poster ${isLarge && "r_posterLarge"}`}
                    src={`${img_base}${isLarge ? item.poster_path : item.backdrop_path}`} alt={item.name}/>
                ))}
            </div>
            {preview && <YouTube videoId={preview} opts={options} />}
        </div>
    );
}

export default Row;
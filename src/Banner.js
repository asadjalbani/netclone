import React, {useState, useEffect} from 'react';
import axios from './axios';
import request from './request';
import './Banner.css';

function Banner() {

    const [film, setFilm] = useState([]);

    useEffect(()=>{
        async function fetchMovie(){
            const req = await axios.get(request.fetchNetflixOriginal);
            setFilm(req.data.results[Math.floor(Math.random() * req.data.results.length -1)]);
        }
        fetchMovie();
    },[]);

    function banner(bannerStr, bannerNumber){
        return bannerStr?.length > bannerNumber ? bannerStr.substr(0, bannerNumber-1) + "..." : bannerStr;
    }

    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${film?.backdrop_path})`,
                backgroundPosition: "center center"
            }}
        >
            <div className="banner_main">
                <h1 className='banner_title'>
                    {film?.title || film?.name || film?.original_name}
                </h1>

                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>

                <h1 className="banner_overview">
                    {banner(film?.overview,150)}
                </h1>
            </div>

            <div className="banner_down" />

        </header>
    )
}

export default Banner

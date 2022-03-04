import React from 'react';
import Row from './Row';
import request from './request';
import Banner from './Banner';
import Nav from './Nav';
import './App.css';


function App() {
  return (
    <div className="app">

      <Nav />
      <Banner />

      <Row title="Netflix Original" fetchUrl={request.fetchNetflixOriginal} isLarge={true} />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Rommance Movies" fetchUrl={request.fetchRommanceMovies} />
      <Row title="Documentries" fetchUrl={request.fetchDocumentries} />
    </div>
    );
}

export default App;

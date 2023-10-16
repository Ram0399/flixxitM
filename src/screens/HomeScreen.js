// HomeScreen.js

import React from "react";
import Banner from "../Banner"; // Import the Banner component
import Nav from "../Nav"; // Import the Nav component
import requests from "../Requests"; // Import the requests data
import Row from "../Row"; // Import the Row component

function HomeScreen() {
  return (
    <div className="homescreen">
      {/* Navigation bar */}
      <Nav />

      {/* Banner */}
      <Banner />
      {/* Rows of movie genres */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow />
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        isLargeRow
      />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow
      />
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow
      />
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow
      />
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow
      />
    </div>
  );
}

export default HomeScreen;

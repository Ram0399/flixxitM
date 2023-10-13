import React from "react";
import Banner from "../Banner"; // Corrected import path
import Nav from "../Nav"; // Corrected import path
import requests from "../Requests"; // Corrected import path
import Row from "../Row"; // Corrected import path

function HomeScreen() {
  return (
    <div className="homescreen">
      {/* Nav bar */}
      <Nav />

      {/* Banner */}
      <Banner />
      {/* row */}
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

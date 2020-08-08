import React from "react";
import Row from "./components/Row";
import requests from "./utils/requests";

import "./styles/App.scss";

function App() {
  return (
    <div>
      <h1>React Netflix Clone</h1>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;

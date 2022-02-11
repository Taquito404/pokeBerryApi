import React, { useEffect, useState } from "react";
import axios from "axios";
import "./mainStyle.scss";

import ItemsList from "./components/ItemsList";
import Pagination from "./components/Pagination";
import Header from "./components/Header";

function App() {
  const [pageUrl, setPageUrl] = useState(
    "https://pokeapi.co/api/v2/berry/?offset=0&limit=8"
  );
  const [pokeItem, setPokeItem] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    // setLoading(true);

    axios.get(pageUrl).then((res) => {
      // setLoading(false);
      setNextPageUrl(res.data.next);
      setPrevPageUrl(res.data.previous);
      setPokeItem(res.data.results.map((i) => i.name));
    });
  }, [pageUrl]);

  // if (loading) return "cargando";

  function toNextPage() {
    setPageUrl(nextPageUrl);
  }

  function toPrevPage() {
    setPageUrl(prevPageUrl);
  }

  return (
    <div className="App">
      <Header />
      <ItemsList pokeItem={pokeItem} />
      <Pagination
        toNextPage={nextPageUrl ? toNextPage : null}
        toPrevPage={prevPageUrl ? toPrevPage : null}
      />
    </div>
  );
}

export default App;

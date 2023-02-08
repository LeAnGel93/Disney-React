import React, { useContext } from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import Gallery from "../../shared/components/Gallery";
import Pagination, { globalDate } from '../../shared/components/Pagination/Pagination';
// import Search from "../../components/Search/Search";

function DisneyPage() {
  const [characters, setCharacters] = useState([]);
  // const [actualPage, setActualPage]= useContext(globalDate)

  const getCharacters = async (actualPage) => {
    const res = await axios.get("https://api.disneyapi.dev/characters?page=" + actualPage);
    console.log(res.data)
    setCharacters(res.data.data)
  };

  useEffect(() => {getCharacters(1)}, []);
 
 return (<>
       <div>
      <Pagination onChangePage={getCharacters}></Pagination>
      <Gallery list={characters}></Gallery>
    </div>
    </> )
}

export default DisneyPage
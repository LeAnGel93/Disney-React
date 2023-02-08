import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';


const DisneyDetail = () => {
    const {id} = useParams()
    const [charactersDetail, setCharactersDetail] = useState({name: "Por si no carga ná"});

    const getCharactersDetail = async () => {
      const res = await axios.get(`https://api.disneyapi.dev/characters/${id}`);
      console.log("damelo", res.data.name)
      setCharactersDetail(res.data)
    };
  
    useEffect(() => getCharactersDetail, []);

 return (<>
 <p>hola</p>
 <p>{charactersDetail.name}</p>
 <img src={charactersDetail.imageUrl} alt={charactersDetail.name} />
 {/* <div>

      {charactersDetail.map((item, index) => (
        <figure key={index}>
      <img src={item.imageUrl} alt={item.name} />
      <figcaption>{item.name}</figcaption>
    </figure>
        
      ))}
    </div> */}
    </> )
  
}

export default DisneyDetail
import React from 'react'
import { Link } from "react-router-dom";
import './Gallery.scss'

const Gallery = ({list}) => {


    return (
        <div className="galeria">
        {list.map((item, index) => (
          <figure key={index}>
            <div>
              <div className="">
               <figcaption>{item.name}</figcaption>
                <p>{item.quote}</p>
              </div>
            </div>
            <Link to={`/disney/${item._id}`}> <img className="c-gallery__img" src={item.imageUrl} alt="" /></Link>
          </figure>
        ))}
      </div>
  )
}

export default Gallery
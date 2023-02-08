import React, { useContext, useState } from 'react'
import './Pagination.scss'
// export const globalDate = React.createContext()


const Pagination = ({onChangePage}) => {
    const [actualPage, setActualPage] = useState(1)

    const changePage = (newActualPage) => {
      setActualPage(newActualPage)
      onChangePage(newActualPage)
  
    }

    

  return (<>
  <div className="pagination">
    {actualPage > 1 && <button onClick={(()=>changePage(actualPage - 1))}>-</button>}
    <div>{actualPage}</div>
    {actualPage < 149 && <button onClick={(()=>changePage(actualPage + 1))}>+</button>}
    </div>
    </>)
}

export default Pagination
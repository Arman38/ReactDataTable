import React, { useState } from 'react';
import './pagination.css'
const Pagination =({showLeftItems}) =>{

   const [activeLink ] = useState([ 'First', 1, 2, 3 ,'Last'])    
    
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                {activeLink.map((el,i)=>{
                    return (
                        <li className="page-item " key={i}>
                             <span  className="page-link" onClick={(e)=>showLeftItems(e.target.innerHTML)} >{el}</span>
                       </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Pagination
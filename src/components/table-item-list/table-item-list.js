import React from 'react'
import './table-item-list.css'

const TableItems = ({data}) =>{
    return(
        <tbody>
        {data.map((el,i)=>{
            return (
                    <tr key={i} className="table-item-list">
                        <td >{el[0]}</td>
                        <td>{el[1]}</td>
                        <td>{el[2]}</td>
                        <td>{el[3]}</td>
                        <td>{el[4]}</td>
                        <td>{el[5]}</td>
                    </tr>
            )
        })}
      </tbody>
    )
}
export default TableItems
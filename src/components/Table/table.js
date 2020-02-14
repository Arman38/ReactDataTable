import React from 'react';
import './table.css'
import TableItems from '../table-item-list/table-item-list';

const BasicTable = ({data,sortByLabel,filter}) => {

  const ths = [
                {name:'name',label:"Name"},
                {name:'position',label:"Position"},
                {name:'office',label:"Office"},
                {name:'exthn',label:"Exthn."},
                {name:'starDate',label:"Start date"},
                {name:'salary',label:"Salary"}
              ]
              
  const thCells = ths.map(({name,label},index)=>{
      const classes = filter === name ? 'dark' : '' 
      return        <th key={index}
                     style={{fontWeight:"bold"}} 
                        onClick = {()=>sortByLabel(name)}> 
                          {label}  
                          <i className={`fa fa-sort ${classes}`} ></i> 
                    </th>
            
  })
  
  return (
    <div className="row">
      <table className="table table-striped">
        <thead>
          <tr >
            {thCells}
          </tr>
        </thead>
        <TableItems data={data}/>
    </table>
    </div>

  );
}

export default BasicTable;
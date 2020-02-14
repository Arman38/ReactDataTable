import React from 'react';
import './panel-search.css'

const PanelSearch = ({onSearch,term}) =>{
    return (
        <div className="col-md-4 offset-md-4 ">
            <label>search: </label> &nbsp;
            <input 
                type="search" 
                onChange = {(e)=>onSearch(e.target.value)}
                term = {term}
             />
        </div>
    )
}

export default PanelSearch
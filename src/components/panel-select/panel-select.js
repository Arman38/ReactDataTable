import React from "react"

const PanelSelect = ({selectRows}) => {
    return(
        <div className = 'col-md-4'>
            <label>Show  &nbsp;
                <select onChange ={selectRows}>
                    <option value='10'>10</option>
                    <option value='20'>20</option>
                    <option value='30'>30</option>
                    <option value='40'>40</option>
                </select>
                &nbsp;   
            entries
            </label>
        </div>         
    )
}

export default PanelSelect
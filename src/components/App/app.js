import React,{useState} from 'react'
import BasicTable from '../Table/table'
import PanelSelect from '../panel-select/panel-select'
import PanelSearch from '../panel-search/panel-search'
import './app.css'
import DataBase from '../../services/database'
import Pagination from '../Pagination/pagination'

const  App = ()=>{
    const [rows,setRows] = useState(10)
    const [data,setData] = useState(new DataBase().data)
    const [term,setTerm] = useState('')
    const [label,setLabel] = useState('')
    const [flag,setFlag] = useState(false)

    const [page,setPage] = useState('1')
     
   const selectRows = (e) =>{
            setRows(e.target.value)
    }

  const  onSearch = (value) =>{
        setTerm(value)
    }
   const search = (data,term) =>{
        if(term.length === 0){
            return data
        }
        return data.filter( elemArr => {
            return      elemArr[0].toLowerCase().includes(term) ||
                        elemArr[1].toLowerCase().includes(term) ||
                        elemArr[2].toLowerCase().includes(term) ||   
                        elemArr[3].toLowerCase().includes(term) ||   
                        elemArr[4].toLowerCase().includes(term) ||
                        elemArr[5].toLowerCase().includes(term)
        } )
    }

    const sortByLabel = (label) =>{
        setLabel(label)
        setFlag(flag=>!flag)
    }


    

    const sortByName = (data,label) =>{
        switch (label) {
            case "":
                return data;
            case "name" :
                return flag ? data.sort((a,b)=>{return a[0] < b[0] ? -1 : 0 })
                            : data.sort((a,b)=>{return a[0] > b[0] ? -1 : 0 });
            case "position":
                return flag ? data.sort((a,b)=>{return a[1] < b[1] ? -1 : 0 })
                            : data.sort((a,b)=>{return a[1] > b[1] ? -1 : 0 });
            case "office":
                return flag ? data.sort((a,b)=>{return a[2] < b[2] ? -1 : 0 })
                            : data.sort((a,b)=>{return a[2] > b[2] ? -1 : 0 });
            case "exthn":
                return flag ? data.sort((a,b)=>{return a[3] < b[3] ? -1 : 0 })
                            : data.sort((a,b)=>{return a[3] > b[3] ? -1 : 0 });
            case "starDate":
                return flag ? data.sort((a,b)=>{return a[4] < b[4] ? -1 : 0 })
                            : data.sort((a,b)=>{return a[4] > b[4] ? -1 : 0 });
            case "salary":
                return flag ? data.sort((a,b)=>{return a[5].slice(1) < b[5].slice(1) ? -1 : 0 })
                            : data.sort((a,b)=>{return a[5].slice(1) > b[5].slice(1) ? -1 : 0}) 
                }
    }

   
    const showLeft = (alldata,page) =>{
            if(page === '1'){
                return alldata.slice(0,rows)
            }
            if(page === '2'){
                return alldata.slice(rows,rows* page)
            }
            if(page === '3'){
                return alldata.slice(rows*2,rows* page)
            }
            if(page === 'Last'){
                return alldata.slice(rows*3)
            }
            if(page === 'First'){
                return alldata.slice(0,rows)
            }
            
    } 

    const showLeftItems=(thisPage) =>{
        setPage(thisPage)
        return showLeft()
    }

    const searchedData = search(data,term)
    const sortIt = showLeft(sortByName(searchedData,label),page)
        return (
               <div className="container app ">
                   <div className="row">
                        <PanelSelect selectRows={selectRows}/>
                        <PanelSearch 
                             onSearch = {onSearch}
                             term = {term}
                        /> 
                   </div>
                    <BasicTable 
                         data={sortIt}
                         sortByLabel = {sortByLabel}
                         filter = {label}
                     />
                     <Pagination 
                            showLeftItems = {showLeftItems}
                     />
                </div>
        )
   
}

export default App
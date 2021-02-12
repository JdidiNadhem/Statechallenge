import React from 'react'
import Button from '@material-ui/core/Button';
import '../ListOfItem/ListItems.css'
const Listitem = ({items,Handleid}) => {
    return (
        <div>
            
            {items.map((el,i)=>

<div key={i} className="items">
    <p>{el}</p>
    <Button variant="contained" color="secondary" onClick={()=>Handleid(i)}>Delete</Button>
</div>)} 
        </div> );
}

export default Listitem

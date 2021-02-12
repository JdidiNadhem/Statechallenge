
import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import '../AddItem/AddItem.css'
class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            task:""
        }
    }
    handlechange=(e)=>{
        this.setState({task: e.target.value})
    }
    render() { 
        return ( <div className="Additem">
            
            <TextField id="standard-basic" variant="filled" label="Task" className="input" type="text" placeholder="Write a task" onChange={this.handlechange} value={this.state.task}></TextField>
            <Button variant="contained" color="primary" className="button" onClick={()=>{this.state.task==="" ? alert("Enter a task please!") : this.props.handleTask(this.state.task);this.setState({task:""}) }}>Add</Button>
        </div> );
    }
}
export default AddItem;

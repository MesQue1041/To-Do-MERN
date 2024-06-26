import './Addtask.css'
import axios from 'axios'
import React, {useState} from 'react'

function Addtask(props) {
    const [task,Settask] = useState("")
    const addtask = () => {
        if(task.trim() === ''){
            return
        }
        else {
            axios.post('http://localhost:8000/api/tasks' , {
                todo : task,
                isComplete : false
            }).then(res => {
                Settask("")
                props.addtask(res.data)
            }).catch(err => console.log(err))
        }
    }
    return (
        <div className='addtask'>
            <input type='text' placeholder='Add Task . . .' value = {task} 
            onChange={event => Settask(event.target.value)} />
            <button onClick={() => addtask()}>Add Task</button>
        </div>
    )

}


export default Addtask;
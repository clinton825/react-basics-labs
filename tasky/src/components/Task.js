import React from 'react';

const Task = (props) => {
    
    return (
        <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
            <p>{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className='description'>{props.description}</p>
            <p className = 'priority' style={{backgroundColor:props.priority=="Low" ? 'blue': props.priority=='Medium'? "pink":'orange'}}>{props.priority }</p>
            <button onClick={props.markDone}className='doneButton'>Done</button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
        </div>
        
    )
}

export default Task;
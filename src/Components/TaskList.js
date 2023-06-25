import React from 'react';
import './TaskList.css';

const TaskList = ({ tasks, removeTask, handleChange }) => {

    const handleDelete = () => {
        removeTask(tasks.id);
        alert("Are you sure to delete?")
    }

    const handleCheckboxChange = () => {
        if (tasks.done)
            return null;
        handleChange(tasks.id)
    }

    return (
        <div>
            <div className='tasks'>
                <div className='task-item'>
                    <input type='checkbox'
                           style={{ margin: "0px 10px" }}
                           checked={tasks.done}
                           onChange={() => { handleCheckboxChange() }}/>
                    <div className='task-date'>
                        {tasks.date.toLocaleString('en-US', {
                            day: 'numeric', month: 'numeric',
                            year: 'numeric'
                        })}
                    </div>
                    <div className='task-item-description '>
                        <h2 style={tasks.done ? {textDecoration:"line-through"}:
                         null}>{tasks.title}</h2>
                        <p style={tasks.done ? {textDecoration:"line-through"}:
                         null}>{tasks.description}</p>
                    </div>
                    <button className='task-item-delete' 
                            onClick={() => handleDelete()}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default TaskList;
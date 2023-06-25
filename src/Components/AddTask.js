import React, { useState } from 'react';
import './AddTask.css';

const AddTask = ({ addTask }) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDescription, setEnteredDescription] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
  //const[userInput, setUserInput] = useState({enteredTitle:'',
  //                                           enteredDescription:'',     <--  {* Alternative way*}
  //                                           enteredDate:''})

    const titleChangeHandler = (e) => {
        // setUserInput({
        //    ...userInput, enteredTitle:e.target.value,                  <--  {* Alternative way*}
        // })
        setEnteredTitle(e.target.value);
    };

    const descriptionChangeHandler = (e) => {
        // setUserInput({
        //    ...userInput, enteredDescription:e.target.value,            <--  {* Alternative way*}
        // })
        setEnteredDescription(e.target.value);
    };

    const dateChangeHandler = (e) => {
        // setUserInput({
        //    ...userInput, enteredDate:e.target.value,                    <--  {* Alternative way*}
        // })
        setEnteredDate(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const newTask = {
            id: Math.random(),
            title: enteredTitle,
            description: enteredDescription,
            date: enteredDate,
            done: false,
        }
        addTask(newTask)
        setEnteredDate("")
        setEnteredDescription("")
        setEnteredTitle("")
    }
    
    return (
        <div className='add-task'>
            <form onSubmit={submitHandler}>
                <div className='new-task-controls'>
                    <div className='new-task-control'>
                         <label>Title</label>
                         <input type='text'
                                onChange={titleChangeHandler}
                            //  value={userInput.enteredTitle}          <--  {* Alternative way*}
                                value={enteredTitle}
                                required />
                    </div>
                    <div className='new-task-control'>
                         <label>Description</label>
                         <input type='text'
                                onChange={descriptionChangeHandler}
                            //  value={userInput.enteredDescription}     <--  {* Alternative way*}
                                value={enteredDescription}
                                required />
                    </div>
                    <div className='new-task-control'>
                         <label>Date</label>
                         <input type='date'
                                min='2023-06-01'
                                max='2023-06-30'
                                onChange={dateChangeHandler}
                            //  value={userInput.enteredDate}             <--  {* Alternative way*}
                                value={enteredDate}
                                required />
                    </div>
                </div>
                <div className='new-task-actions'>
                    <button type='submit'>Add Task</button>
                </div>
            </form>
        </div>
    )
}

export default AddTask;
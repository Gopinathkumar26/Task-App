import React, { useState } from 'react';
import TaskList from './TaskList';
import AddTask from './AddTask';

const dummytasks = [
    {
        id: 1,
        title: 'Rent',
        description: 'House rent Rs.1760/-',
        date: new Date(2023, 5, 14),
        done: false,
    },
    {
        id: 2,
        title: 'Recharge',
        description: 'Mobile & DTH recharge ',
        date: new Date(2023, 5, 26),
        done: false,
    },
    {
        id: 3,
        title: 'Outlook',
        description: 'Hair cut, Beard trim',
        date: new Date(2023, 5, 28),
        done: false,
    },
];

const TaskContainer = () => {

    const [tasks, setTasks] = useState(dummytasks);

    const handleAddTask = (newTask) => {
        const newTaskList = [...tasks, newTask]
        setTasks(newTaskList);
    }

    const handleRemoveTask = (id) => {
        const newTaskList = tasks.filter(task => task.id !== id)
        setTasks(newTaskList);
    }

    const checkboxChangeHandler = (id) => {
        const newTaskList = tasks.map(task => {
            if (task.id === id)
                return { ...task, done: !task.done }
            return task
        })
        setTasks(newTaskList);
    }

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>TASKS - JUNE 2023</h1>
            <AddTask addTask={handleAddTask} />
            {tasks.length > 0 ? tasks.map((task) => 
                <TaskList tasks={task} 
                          removeTask={handleRemoveTask}
                          handleChange={checkboxChangeHandler} />) :
            <h2 style={{ textAlign: "center" }}>Found No Task</h2>}
        </div>
    )
}

export default TaskContainer;
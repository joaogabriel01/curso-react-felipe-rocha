import React from 'react';
import Task from './Task';

const Tasks = ({tasks}) => {
    // console.log(tasks,1);
    return (
        <>
            {tasks.map(task => <Task task={task}/>)}
        </>
    )
}
export default Tasks;
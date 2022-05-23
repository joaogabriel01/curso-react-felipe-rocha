import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Button from './Button';

import './TaskDetails.css';

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    };

    return (
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nulla erat. Nunc venenatis efficitur feugiat. Vestibulum in leo a mauris placerat blandit. Morbi viverra est et urna interdum sollicitudin. In hac habitasse platea 
                </p>
            </div>
        </>
    );
};

export default TaskDetails;
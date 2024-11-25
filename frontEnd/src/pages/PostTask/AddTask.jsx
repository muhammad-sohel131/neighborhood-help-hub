import React, { useState } from 'react';
import './AddTask.css';

const AddTask = () => {
    const [taskData, setTaskData] = useState({
        title: '',
        description: '',
        location: '',
        time: '',
        date: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTaskData({ ...taskData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Task Submitted:', taskData);
        // Add API call or data handling here
        setTaskData({
            title: '',
            description: '',
            location: '',
            time: '',
            date: '',
        });
    };

    return (
        <div className="add-task-container">
            <h2>Add a Task</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Task Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={taskData.title}
                        onChange={handleChange}
                        placeholder="Enter the task title"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={taskData.description}
                        onChange={handleChange}
                        placeholder="Provide a brief description of the task"
                        rows="4"
                        required
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={taskData.location}
                        onChange={handleChange}
                        placeholder="Enter the task location"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={taskData.date}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="time">Time</label>
                    <input
                        type="time"
                        id="time"
                        name="time"
                        value={taskData.time}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="submit-button">Add Task</button>
            </form>
        </div>
    );
};

export default AddTask;

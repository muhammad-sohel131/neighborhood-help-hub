import React, { useState } from 'react';
import './TasksList.css';

const TasksList = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Dummy task data
    const tasks = [
        {
            title: 'Fix Broken Window',
            description: 'A small crack in the living room window needs repair.',
            location: 'Downtown',
            postalCode: '12345',
            time: '2:00 PM',
            date: '2024-11-28',
            name: 'John Doe',
            phone: '123-456-7890',
        },
        {
            title: 'Grocery Shopping Help',
            description: 'Need assistance with grocery shopping for elderly parents.',
            location: 'Greenwood',
            postalCode: '67890',
            time: '10:00 AM',
            date: '2024-11-30',
            name: 'Jane Smith',
            phone: '987-654-3210',
        },
    ];

    // Filter tasks by search term
    const filteredTasks = tasks.filter(task =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="tasks-page">
            <h1 className="tasks-header">Available Tasks</h1>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search by service name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
            </div>

            <div className="tasks-container">
                {filteredTasks.map((task, index) => (
                    <div key={index} className="task-card">
                        <h2>{task.title}</h2>
                        <p>{task.description}</p>
                        <p><strong>Location:</strong> {task.location}</p>
                        <p><strong>Postal Code:</strong> {task.postalCode}</p>
                        <p><strong>Time:</strong> {task.time}</p>
                        <p><strong>Date:</strong> {task.date}</p>
                        <p><strong>Posted by:</strong> {task.name}</p>
                        <p><strong>Phone:</strong> {task.phone}</p>
                        <button className="details-button">See Details</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TasksList;

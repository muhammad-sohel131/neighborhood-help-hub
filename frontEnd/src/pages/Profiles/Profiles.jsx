import React from 'react';
import './Profiles.css';

const Profiles = () => {
    // Dummy worker profile data
    const workers = [
        {
            name: 'John Doe',
            phone: '123-456-7890',
            location: 'Downtown',
            postalCode: '12345',
            expertise: 'Plumbing',
            rating: 4.5,
        },
        {
            name: 'Jane Smith',
            phone: '987-654-3210',
            location: 'Greenwood',
            postalCode: '67890',
            expertise: 'Electrical Work',
            rating: 4.8,
        },
        {
            name: 'Mike Johnson',
            phone: '456-789-1234',
            location: 'Uptown',
            postalCode: '54321',
            expertise: 'Carpentry',
            rating: 4.7,
        },
        {
          name: 'John Doe',
          phone: '123-456-7890',
          location: 'Downtown',
          postalCode: '12345',
          expertise: 'Plumbing',
          rating: 4.5,
      },
      {
          name: 'Jane Smith',
          phone: '987-654-3210',
          location: 'Greenwood',
          postalCode: '67890',
          expertise: 'Electrical Work',
          rating: 4.8,
      },
      {
          name: 'Mike Johnson',
          phone: '456-789-1234',
          location: 'Uptown',
          postalCode: '54321',
          expertise: 'Carpentry',
          rating: 4.7,
      },
    ];

    return (
        <div className="profiles-page">
            <h1 className="profiles-header">Worker Profiles</h1>
            <div className="profiles-container">
                {workers.map((worker, index) => (
                    <div key={index} className="profile-card">
                        <h2>{worker.name}</h2>
                        <p><strong>Phone:</strong> {worker.phone}</p>
                        <p><strong>Location:</strong> {worker.location}</p>
                        <p><strong>Postal Code:</strong> {worker.postalCode}</p>
                        <p><strong>Expertise:</strong> {worker.expertise}</p>
                        <p><strong>Rating:</strong> ⭐ {worker.rating}</p>
                        <button className="details-button">View Details</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Profiles;

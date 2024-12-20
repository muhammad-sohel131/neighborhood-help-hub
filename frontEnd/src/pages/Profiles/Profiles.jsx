import React, { useEffect, useState } from 'react';
import './Profiles.css';

const Profiles = () => {
    // Dummy worker profile data
    // const workers = [
    //     {
    //         name: 'John Doe',
    //         phone: '123-456-7890',
    //         location: 'Downtown',
    //         postalCode: '12345',
    //         expertise: 'Plumbing',
    //         rating: 4.5,
    //     },
    //     {
    //         name: 'Jane Smith',
    //         phone: '987-654-3210',
    //         location: 'Greenwood',
    //         postalCode: '67890',
    //         expertise: 'Electrical Work',
    //         rating: 4.8,
    //     },
    //     {
    //         name: 'Mike Johnson',
    //         phone: '456-789-1234',
    //         location: 'Uptown',
    //         postalCode: '54321',
    //         expertise: 'Carpentry',
    //         rating: 4.7,
    //     },
    //     {
    //       name: 'John Doe',
    //       phone: '123-456-7890',
    //       location: 'Downtown',
    //       postalCode: '12345',
    //       expertise: 'Plumbing',
    //       rating: 4.5,
    //   },
    //   {
    //       name: 'Jane Smith',
    //       phone: '987-654-3210',
    //       location: 'Greenwood',
    //       postalCode: '67890',
    //       expertise: 'Electrical Work',
    //       rating: 4.8,
    //   },
    //   {
    //       name: 'Mike Johnson',
    //       phone: '456-789-1234',
    //       location: 'Uptown',
    //       postalCode: '54321',
    //       expertise: 'Carpentry',
    //       rating: 4.7,
    //   },
    // ];

    const [workers, setWorkers] = useState([]);
    useEffect(() => {
        const fetchProfile = async () => {
            const res = await fetch("http://localhost:5000/workers");
            const result = await res.json();
            setWorkers(result)
            console.log(result)
        }
        fetchProfile();
    }, [])
    return (
        <div className="profiles-page">
            <h1 className="profiles-header">Worker Profiles</h1>
            <div className="profiles-container">
                {workers.map((worker, index) => (
                    <div key={index} className="profile-card">
                        <img src={worker.image} alt={worker.name} />
                        <h2>{worker.name}</h2>
                        <div className='description'>
                            <div>
                                <p><strong>Phone:</strong> {worker.phone}</p>
                                <p><strong>Location:</strong> {worker.address}</p>
                            </div>
                            <div>
                                <p><strong>Postal Code:</strong> {worker.postalCode}</p>
                                <p><strong>Expertise:</strong> {worker.services}</p>
                            </div>
                        </div>


                        {/* <button className="details-button">View Details</button> */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Profiles;

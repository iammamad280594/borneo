import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TeamPages.css';
import Title from '../../components/Title/Title';

const TeamsPage = () => {
  const [users, setUsers] = useState([]);
  const [expertise, setExpertise] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?results=10');
        setUsers(response.data.results);

        // Mock expertise data
        const expertiseData = [
          "Beverage Specialist",
          "Food Safety Expert",
          "Culinary Innovator",
          "Restaurant Manager",
          "Food Technologist",
          "Pastry Chef",
          "Nutritionist",
          "F&B Marketing",
          "Catering Manager",
          "Chef de Cuisine"
        ];
        setExpertise(expertiseData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Title subTitle='All Team' title='Our Professionals' />
      <div className="team-container">
        {users.map((user, index) => (
          <div className="user-card" key={index}>
            <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
            <p>{`${user.name.first} ${user.name.last}`}</p>
            <p className="email">Email: {user.email}</p>
            <p className="phone">Phone: {user.phone}</p>
            <p className="expertise">Expertise: {expertise[index % expertise.length]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamsPage;

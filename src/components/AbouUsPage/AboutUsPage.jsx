import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AboutUsPage.css';
import Title from '../../components/Title/Title';

const AboutUsPage = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?results=5');
        setTeamMembers(response.data.results);
      } catch (error) {
        console.error('Error fetching team data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="about-us">
      <Title subTitle="About Us" title="Who We Are" />
      
      <section className="company-history">
        <h2>Our History</h2>
        <p>
          Founded in 2010, Borneo Restaurant has become a beloved dining destination in Kigali, Rwanda.
          Starting as a small family-run business, we have grown into a renowned restaurant known for our
          authentic cuisine and warm hospitality. Over the years, we have achieved numerous milestones,
          including being featured in local culinary guides and winning awards for our outstanding service.
        </p>
      </section>
      
      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <img src={member.picture.large} alt={`${member.name.first} ${member.name.last}`} />
              <p className="name">{`${member.name.first} ${member.name.last}`}</p>
              <p className="title">Role: Chef</p>
              <p className="experience">
                Expertise: With over 10 years in the culinary industry, {member.name.first} specializes in Rwandan
                and international cuisine, bringing a unique flavor to every dish.
              </p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="company-culture">
        <h2>Our Culture</h2>
        <p>
          At Borneo Restaurant, we believe in creating a welcoming and inclusive atmosphere for all our guests.
          Our culture is rooted in family values, community engagement, and a passion for culinary excellence.
          We are committed to sustainability, sourcing fresh, local ingredients, and supporting local farmers and suppliers.
          Join us to experience the warmth and hospitality that defines Borneo Restaurant.
        </p>
      </section>
    </div>
  );
};

export default AboutUsPage;

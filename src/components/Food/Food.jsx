import React, { useState, useEffect } from 'react';
import './Food.css';
import white_arrow from '../../assets/white-arrow.png';

const Food = () => {
  const [foodItems, setFoodItems] = useState([]);

  const mockDescriptions = [
    'Delicious pasta with tomato sauce and cheese',
    'Fresh and healthy green salad',
    'Juicy and tender grilled steak',
    'Classic margherita pizza with fresh basil',
    'Tasty sushi rolls with soy sauce',
    'Refreshing fruit smoothie',
    'Savory bacon and eggs breakfast',
    'Crunchy nachos with cheese dip',
    'Hot and spicy chicken wings',
    'Sweet and fluffy pancakes with syrup'
  ];

  const mockPrices = [
    '$12.99',
    '$8.99',
    '$15.99',
    '$10.99',
    '$13.99',
    '$5.99',
    '$7.99',
    '$6.99',
    '$9.99',
    '$4.99'
  ];

  useEffect(() => {
    const fetchFoodImages = async () => {
      try {
        const response = await fetch('https://api.pexels.com/v1/search?query=food&per_page=10', {
          headers: {
            Authorization: 'YOUR_API_KEY'
          }
        });
        const data = await response.json();
        const foodData = data.photos.map((photo, index) => ({
          image: photo.src.medium,
          description: mockDescriptions[index % mockDescriptions.length],
          price: mockPrices[index % mockPrices.length]
        }));
        setFoodItems(foodData);
      } catch (error) {
        console.error('Error fetching food images:', error);
      }
    };

    fetchFoodImages();
  }, []);

  const handleSeeMore = async () => {
    try {
      const response = await fetch('https://api.pexels.com/v1/search?query=food&per_page=10', {
        headers: {
          Authorization: 'SnQkzWzAaUWW7EwpC2VCbtVDfINB3O7CaikO6qOpD1ZZBnzuCSfliAXU'
        }
      });
      const data = await response.json();
      const foodData = data.photos.map((photo, index) => ({
        image: photo.src.medium,
        description: mockDescriptions[index % mockDescriptions.length],
        price: mockPrices[index % mockPrices.length]
      }));
      setFoodItems(foodData);
    } catch (error) {
      console.error('Error fetching food images:', error);
    }
  };

  return (
    <div className="food">
      <div className="gallery">
        {foodItems.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt={`Food ${index}`} className="card-img" />
            <div className="card-info">
              <p className="description">{item.description}</p>
              <p className="price">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="btns">
        <button className="btn dark-btn" onClick={handleSeeMore}>
          See more here <img src={white_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Food;

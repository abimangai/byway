import React, { useEffect, useState } from 'react';
import axios from 'axios';  
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Star from '../assets/star.svg';

const BottomSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  padding: 20px 0;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const CourseCard = styled.div`
  width: 270px;
  height: 300px;
  padding: 15px;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items:stretch;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
  cursor: pointer;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 1024px) {
    width: 230px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
  @media (max-width: 768px) {
    height:250px;
  }
`;
const CourseBottom = styled.div`
     display: flex;
     align-items: left;
     bottom: 10px;
     position: absolute;
     flex-direction: column;

`;
const CourseImage = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 10px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 130px;
  }

  @media (max-width: 480px) {
    height: 100px;
  }
`;

const CourseTitle = styled.h4`
  font-size: 1.2rem;
  color: #333;
  margin: 10px 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const StarRating = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 20px;
    height: 20px;

    @media (max-width: 768px) {
      width: 18px;
      height: 18px;
    }

    @media (max-width: 480px) {
      width: 15px;
      height: 15px;
    }
  }

  span {
    font-size: 0.9rem;
    color: #777;
    margin-left: 5px;

    @media (max-width: 768px) {
      font-size: 0.8rem;
    }

    @media (max-width: 480px) {
      font-size: 0.7rem;
    }
  }
`;

const CourseType = styled.p`
  font-size: 0.9rem;
  color: #777;
  margin: 5px 0;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

const CourseCost = styled.p`
  font-size: 1.2rem;
  color: #333;
  margin: 10px 0;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const Courses = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data.slice(0, 4));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data. Please try again later.");
        setLoading(false);
      });
  }, []);

  return (
    <BottomSection>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && 
      products.map((product) => (
        <Link to={`/course/${product.id}`} key={product.id} style={{ textDecoration: 'none' }}>
          <CourseCard>
            <CourseImage src={product.image} alt={product.title} />
            <CourseBottom>
            <CourseTitle>{product.title}</CourseTitle>
            <StarRating>
              {[...Array(5)].map((_, index) => (
                <img 
                  key={index} 
                  src={Star} 
                  alt="star" 
                  style={{ opacity: index < product.rating?.rate ? 1 : 0.3 }} 
                />
              ))}
              <span>({product.rating?.rate || 0} ratings)</span>
            </StarRating>
            <CourseType>{product.category || 'General'}</CourseType>
          <CourseCost>${product.price}</CourseCost>
          </CourseBottom>
          </CourseCard>
        </Link>
      ))}
    </BottomSection>
  );
};

export default Courses;

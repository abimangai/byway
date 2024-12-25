import React from 'react';
import styled from 'styled-components';
import Model4 from '../assets/model-4.jpg';
import Model6 from '../assets/model-6.jpg';
import Arrow from '../assets/arrow-right.svg';

const CareerContainer = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 20px 150px;

  @media (max-width: 1280px) {
    padding: 20px 130px;
  }
  @media (max-width: 1080px) {
    padding: 20px 100px;
  }
  @media (max-width: 900px) {
    padding: 20px 50px;
  }
  @media (max-width: 768px) {
    gap: 30px;
    padding: 20px 30px;
  }
  @media (max-width: 540px) {
    padding: 15px 20px;
  }
  @media (max-width: 360px) {
    padding: 10px;
  }
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;

  @media (max-width: 1187px) {
    flex-direction: column;
    align-items: flex-start;

    &:nth-child(even) {
      flex-direction: column-reverse; 
    }
  }
`;

const Left = styled.div`
  flex: 1;

  img {
    width: 100%;
    height: auto;
    max-width: 400px;
    border-radius: 8px;
    margin-left: 50px;

    @media (max-width: 768px) {
      max-width: 80%;
      margin: 0 auto;
      
    }
    @media (max-width: 480px) {
      max-width: 60%;
    }
  }
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const Topic = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  color: #000;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const Text = styled.p`
  font-size: 1rem;
  color: #1D2939;
  line-height: 1.6;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
  @media (max-width: 480px) {
    font-size: 0.85rem;
    line-height: 1.4;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: fit-content;
  gap: 10px;
  padding: 12px 20px;
  font-size: 1rem;
  font-weight: bold;
  background-color: #020617;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  img {
    width: 16px;
    height: auto;
  }

  &:hover {
    background-color: #02061777;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 10px 18px;
  }
  @media (max-width: 480px) {
    font-size: 0.85rem;
    padding: 8px 16px;

    img {
      width: 14px;
    }
  }
`;

const Career = () => {
  return (
    <CareerContainer>
      <Section>
        <Left>
          <img src={Model4} alt="model" />
        </Left>
        <Right>
          <Topic>Become an Instructor</Topic>
          <Text>
            Instructors from around the world teach millions of students on Byway. We provide the tools and
            skills to teach what you love.
          </Text>
          <Button>
            Start Your Instructor Journey
            <img src={Arrow} alt="arrow" />
          </Button>
        </Right>
      </Section>

      <Section>
        <Right>
          <Topic>Transform your life through education</Topic>
          <Text>
            Learners around the world are launching new careers, advancing in their fields, and enriching
            their lives.
          </Text>
          <Button>
            Checkout Courses
            <img src={Arrow} alt="arrow" />
          </Button>
        </Right>
        <Left>
          <img src={Model6} alt="model" />
        </Left>
      </Section>
    </CareerContainer>
  );
};

export default Career;

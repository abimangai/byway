import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

// Styled Components
const TabsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 10px 100px;
  max-width: 800;

  @media (max-width: 1280px) {
    padding: 20px 90px;
  }
  @media (max-width: 1080px) {
    padding: 20px 80px;
  }
  @media (max-width: 900px) {
    padding: 20px 50px;
  }
  @media (max-width: 768px) {
    padding: 20px 40px;
    max-width: 100%;
    gap: 20px;
  }
  @media (max-width: 640px) {
    padding: 15px 30px;
    gap: 10px;
  }
  @media (max-width: 540px) {
    padding: 15px 20px;
    
  }
  @media (max-width: 480px) {
    padding: 10px 10px;
    gap: 20px;
    flex-wrap: wrap;
  }
  @media (max-width: 360px) {
    padding: 10px 10px;
    gap: 15px;
  }
`;


const Tab = styled.div`
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  color:#0F172A;
  padding: 15px 25px;
  border-radius: 8px;
  transition: background-color 0.3s, color 0.3s;
  border: 1px solid #E2E8F0;

  &:hover {
    background-color:#EFF6FF;
    border: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 20px;
  }

  @media (max-width: 640px) {
    padding: 8px 15px;
  }

  @media (max-width: 540px) {
    padding: 8px 10px;
  }
`;

const HR = styled.hr`
  border: 1px solid #E2E8F0;
`;

const Tabs = () => {
  return (
    <TabsContainer>
      <Tab>
        <Link to="description" smooth duration={500}>
          Description
        </Link>
      </Tab>
      <Tab>
        <Link to="teacher" smooth duration={500}>
          Instructor
        </Link>
      </Tab>
      <Tab>
        <Link to="syllabus" smooth duration={500}>
          Syllabus
        </Link>
      </Tab>
      <Tab>
        <Link to="reviews" smooth duration={500}>
          Reviews
        </Link>
      </Tab>
      <HR />
    </TabsContainer>
  );
};

export default Tabs;

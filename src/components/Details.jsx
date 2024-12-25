import React from 'react';
import styled from "styled-components";
import Category from './Category';
import Courses from './Courses';
import Instructor from './Instructor';

const Detail = styled.div`
  padding: 20px 150px;
  max-width: 100%;
  @media (max-width: 1280px){
    padding: 20px 130px;
  }
  @media (max-width: 1080px){
    padding: 20px 100px;
  }
  @media (max-width: 900px){
    padding: 20px 50px;
  }
  @media (max-width: 768px) {
    padding: 20px 40px;
  }
  @media (max-width: 640px){
    padding: 15px 30px;
  }
  @media (max-width: 540px){
    padding: 15px 20px;
  }
  @media (max-width: 480px){
    padding: 10px 10px;
  }
  @media (max-width: 360px){
    padding: 10px 10px;
  }
`;

const Container = styled.div`
  padding: 20px 0;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h3 {
    font-size: 1.5rem;
    color: #333;

    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }

  p {
    font-size: 1rem;
    color: #007bff;
    cursor: pointer;

    @media (max-width: 768px) {
      font-size: 0.875rem;
    }
    @media (max-width: 480px) {
      font-size: 0.75rem;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Details = () => {
  return (
    <Detail>
      <Category />
      <Container>
        <TopSection>
          <h3>Top Courses</h3>
          <p>See All</p>
        </TopSection>
        <Courses />
      </Container>
      <Instructor />
    </Detail>
  );
};

export default Details;

import React from 'react';
import styled from 'styled-components';
import Profile from '../assets/span-8.jpg';
import review from '../assets/achive.svg';
import cap from '../assets/cap.svg';
import play from '../assets/play.svg';

const Container = styled.div`
  max-width: 900px;
  margin: 0;
  padding: 10px 100px;
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
  }
  @media (max-width: 640px) {
    padding: 15px 30px;
  }
  @media (max-width: 540px) {
    padding: 15px 20px;
  }
  @media (max-width: 480px) {
    padding: 10px 10px;
  }
  @media (max-width: 360px) {
    padding: 10px 10px;
  }
`;

const Heading = styled.h2`
  font-size: 20px;
  color: #0F172A;
  font-weight: 600;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 540px) {
    font-size: 16px;
  }
`;

const Subheading = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #2563EB;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 540px) {
    font-size: 16px;
  }
`;

const Role = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #334155;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 540px) {
    font-size: 12px;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  @media (max-width: 768px) {
      width: 100px;
      height: 100px;
    }
    @media (max-width: 540px) {
      width: 80px;
      height: 80px;
    }
`;

const DetailsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  p {
    font-size: 14px;
    font-weight: 400;
    color: #0F172A;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 12px;
    }
    @media (max-width: 540px) {
      font-size: 10px;
    }
  }

  img {
    width: 24px;
    height: 24px;
    @media (max-width: 768px) {
      width: 20px;
      height: 20px;
    }
    @media (max-width: 540px) {
      width: 15px;
      height: 15px;
    }
  }
`;

const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  color: #334155;

  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 540px) {
    font-size: 12px;
  }
`;

const HR = styled.hr`
  border: 1px solid #E2E8F0;
`;

const Teacher = () => {
  return (
    <Container id="teacher">
      <Heading>Instructor</Heading>
      <Subheading>Ronald Richards</Subheading>
      <Role>UI/UX Designer</Role>
      <ProfileContainer>
        <ProfileImage src={Profile} alt="profile" />
        <DetailsContainer>
          <DetailItem>
            <img src={review} alt="review" />
            <p>40,445 Reviews</p>
          </DetailItem>
          <DetailItem>
            <img src={cap} alt="cap" />
            <p>500 Students</p>
          </DetailItem>
          <DetailItem>
            <img src={play} alt="play" />
            <p>15 Courses</p>
          </DetailItem>
        </DetailsContainer>
      </ProfileContainer>
      <Description>
        With over a decade of industry experience, Ronald brings a wealth of practical knowledge to the classroom.
        He has played a pivotal role in designing user-centric interfaces for renowned tech companies, ensuring
        seamless and engaging user experiences.
      </Description>
      <HR />
    </Container>
  );
};

export default Teacher;

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0;
  padding: 20px 100px;
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

const HR = styled.hr`
  border: 1px solid #E2E8F0;
`;

const Heading = styled.h2`
  font-size: 20px;
  color: #0F172A;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 540px) {
    font-size: 16px;
  }
`;

const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  color: #334155;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 540px) {
    font-size: 12px;
  }
`;

const Description = () => {
  return (
    <Container id="description">
      <Heading>Course Description</Heading>
      <Paragraph>
        This interactive e-learning course will introduce you to User Experience (UX) design, the art
        of creating products and services that are intuitive, enjoyable, and user-friendly. Gain a
        solid foundation in UX principles and learn to apply them in real-world scenarios through
        engaging modules and interactive exercises.
      </Paragraph>
      <Heading>Certification</Heading>
      <Paragraph>
        At Byway, we understand the significance of formal recognition for your hard work and
        dedication to continuous learning. Upon successful completion of our courses, you will earn a
        prestigious certification that not only validates your expertise but also opens doors to new
        opportunities in your chosen field.
      </Paragraph>
      <HR />
    </Container>
  );
};

export default Description;

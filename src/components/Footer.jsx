import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import Fb from '../assets/fb.jpg'
import Git from '../assets/github.jpg'
import Google from '../assets/google.jpg'
import Twitter from '../assets/twitter.jpg'
import Micro from '../assets/micro.jpg'

const FooterContainer = styled.div`
  background-color:#1E293B;
  padding: 40px 150px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: space-between;
  max-width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 20px 150px;
  }
  @media (max-width: 1280px){
    padding: 20px 130px;
  }
  @media (max-width: 1080px){
    padding: 20px 100px;
  }
  @media (max-width: 900px){
    padding: 20px 50px;
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
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: fit-content;
  max-width: 300px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 40px;
  }

  h1 {
    font-size: 1.5rem;
    color:#F1F5F9;
    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
  }
`;

const FooterText = styled.p`
  font-size: 0.9rem;
  color:#F1F5F9;
  line-height: 1.6;
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  a {
    font-size: 0.9rem;
    color: #CBD5E1;
    text-decoration: none;
    transition: color 0.3s;
    cursor: pointer;
    font-weight: 500;

    &:hover {
      color: #f9f9f9;
    }
    @media (max-width: 480px) {
      font-size: 0.8rem;
    }
  }
`;

const StyledParagraph = styled.p`
  font-size: 0.9rem;
  color: #F1F5F9;
  font-weight: 600;
  line-height: 1.6;
  margin-bottom: 10px;
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const SocialMedia = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
gap: 10px;
  img {
    width: 35px;
    height: 35px;
    margin-top: 10px;
    border-radius: 50%;
    @media (max-width: 768px) {
      max-width: 200px;
    }
    @media (max-width: 480px) {
      max-width: 150px;
    }
    
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <LogoContainer>
          <img src={Logo} alt="logo" />
          <h1>Byway</h1>
        </LogoContainer>
        <FooterText>
          Empowering learners through accessible and engaging online education.
          <br />
          Byway is a leading online learning platform dedicated to providing<br/> high-quality, flexible, and affordable
          educational experiences.
        </FooterText>
      </FooterSection>

      <FooterSection>
        <StyledParagraph>Get Help</StyledParagraph>
        <FooterLinks>
          <Link to="/contact">Contact Us</Link>
          <Link to="/articles">Latest Articles</Link>
          <Link to="/faq">FAQ</Link>
        </FooterLinks>
      </FooterSection>

      <FooterSection>
        <StyledParagraph>Programs</StyledParagraph>
        <FooterLinks>
          <Link to="/art-design">Art & Design</Link>
          <Link to="/business">Business</Link>
          <Link to="/it-software">IT & Software</Link>
          <Link to="/languages">Languages</Link>
          <Link to="/programming">Programming</Link>
        </FooterLinks>
      </FooterSection>

      <FooterSection>
        <StyledParagraph>Contact Us</StyledParagraph>
        <FooterText>
          Address: 123 Main Street, Anytown, CA 12345
          <br />
          Tel: +(123) 456-7890
          <br />
          Mail: bywayedu@webkul.in
        </FooterText>
        <SocialMedia>
          <Link to='https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F'>
          <img src={Fb} alt="social_media" />
          </Link>
          <Link to='https://github.com/'>
          <img src={Git} alt="social_media" />
          </Link>
          <Link to='https://www.google.com/search?gs_ssp=eJzj4tTP1TcwMU02T1JgNGB0YPBiS8_PT89JBQBASQXT&q=google&oq=google&gs_lcrp=EgZjaHJvbWUqGAgBEC4YQxiDARjHARixAxjRAxiABBiKBTIHCAAQABiPAjIYCAEQLhhDGIMBGMcBGLEDGNEDGIAEGIoFMgwIAhAjGCcYgAQYigUyBggDEEUYOzISCAQQABhDGIMBGLEDGIAEGIoFMhIIBRAAGEMYgwEYsQMYgAQYigUyEggGEAAYQxiDARixAxiABBiKBTISCAcQABhDGIMBGLEDGIAEGIoFMgcICBAAGI8CMgcICRAAGI8C0gEKMTIzNDNqMGoxNagCCLACAQ&sourceid=chrome&ie=UTF-8'>
          <img src={Google} alt="social_media" />
          </Link>
          <Link to='https://x.com/?lang=en'>
          <img src={Twitter} alt="social_media" />
          </Link>
          <Link to='https://www.microsoft.com/en-in'>
          <img src={Micro} alt="social_media" />
          </Link>
        </SocialMedia>
      </FooterSection>
    </FooterContainer>
  );
};

export default Footer;

import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import LeftArrow from '../assets/short-arrow-left.svg';
import RightArrow from '../assets/short-arrow-right.svg';
import Comma from '../assets/quotes.svg';
import Custom from '../assets/span-7.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Container = styled.div`
  padding: 30px 150px;
  max-width: 100%;
  background-color: #F8FAFC;
  overflow-x: hidden;

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
    padding: 15px 30px;
  }
  @media (max-width: 640px) {
    padding: 15px 20px;
  }
  @media (max-width: 480px) {
    padding: 10px 15px;
  }
  @media (max-width: 360px) {
    padding: 10px 10px;
  }
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h2 {
    font-size: 1.5rem;
    color: #000;

    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }

  .arrow {
    display: flex;

    .arrow-btn {
      background-color: #94A3B8;
      border: none;
      border-radius: 8px;
      padding: 10px 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      margin: 0 10px;

      img {
        width: 12px;
        height: 12px;

        @media (max-width: 480px) {
          width: 10px;
          height: 10px;
        }
      }
    }
  }
`;

const Card = styled.div`
  padding: 20px;
  border-radius: 10px;
  background: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  margin: 0px;
  flex: 1 0 auto;
  max-width: 300px;

  
  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const CardQuote = styled.img`
  width: 30px;
  height: 30px;
  margin-bottom: 10px;

  @media (max-width: 480px) {
    width: 25px;
    height: 25px;
  }
`;

const CardText = styled.p`
  font-size: 1rem;
  color: #000;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

const CustomerInfo = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  justify-content: flex-start;

  img {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    margin-right: 10px;

    @media (max-width: 768px) {
      width: 60px;
      height: 50px;
    }
    @media (max-width: 480px) {
      width: 50px;
      height: 45px;
    }
  }

  .details {
    .name {
      font-size: 1.1rem;
      font-weight: bold;
      color: #000;
      margin-bottom: 0;

      @media (max-width: 768px) {
        font-size: 1rem;
      }
      @media (max-width: 480px) {
        font-size: 0.875rem;
      }
    }

    .role {
      font-size: 0.9rem;
      color: #334155;
      margin-top: 10px;

      @media (max-width: 768px) {
        font-size: 0.75rem;
      }
      @media (max-width: 480px) {
        font-size: 0.625rem;
      }
    }
  }
`;

const SliderWrapper = styled.div`
  width: 100%;  /* Ensure the slider container does not overflow */
  
  .slick-list {
    overflow: hidden;
    width: 100%;
  }

  .slick-track {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    width: auto;
    flex-wrap: nowrap;  /* Prevent wrapping of items */
  }

  .slick-slide > div {
    padding: 10px;
    display: flex;
    justify-content: center;
    flex: 0 0 auto;  /* Prevent resizing */
    max-width: 100%;
  }
`;





const Customers = () => {
  const sliderRef = React.useRef(null);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '30px',
        },
      },
      {
        breakpoint: 640,  // Adding a breakpoint for smaller screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '20px', // Adjust padding as needed
        },
      },
    ],
  };
  
  
  const handlePrev = () => sliderRef.current.slickPrev();
  const handleNext = () => sliderRef.current.slickNext();

  return (
    <Container>
      <TopSection>
        <h2>
          What Our Customers Say <br /> About Us
        </h2>
        <div className="arrow">
          <button className="arrow-btn" onClick={handlePrev}>
            <img src={LeftArrow} alt="Previous" />
          </button>
          <button className="arrow-btn" onClick={handleNext}>
            <img src={RightArrow} alt="Next" />
          </button>
        </div>
      </TopSection>
      <SliderWrapper>
        <Slider {...settings} ref={sliderRef}>
          {Array.from({ length: 6 }).map((_, index) => (
            <Card key={index}>
              <CardQuote src={Comma} alt="comma" />
              <CardText>
                "Byway's tech courses are top-notch! As someone who's always
                looking to stay ahead in the rapidly evolving tech world, I
                appreciate the up-to-date content and engaging multimedia."
              </CardText>
              <CustomerInfo>
                <img src={Custom} alt="Customer" />
                <div className="details">
                  <p className="name">Jane Doe</p>
                  <p className="role">Designer</p>
                </div>
              </CustomerInfo>
            </Card>
          ))}
        </Slider>
      </SliderWrapper>
    </Container>
  );
};

export default Customers;

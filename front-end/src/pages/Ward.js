import { styled } from '@mui/system';
import CssBaseline from '@mui/material/CssBaseline';
import WardHeader from '../components/WardHeader.js';
import RatingCard from "../components/RatingCard.js";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import ReviewCard from '../components/ReviewCard.js';
import { useNavigate } from 'react-router-dom';

const Root = styled('div')({
  backgroundColor: '#286081',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontFamily: 'Nunito',
});

const StyledDiv = styled('div')({
  width: '70%',
  margin: '5% auto 0',
  paddingBottom: '10%',
});


const WardName = styled('h1')({
  fontFamily: 'Nunito',
  color: 'white',
});

const WardDetail = styled('h3')({
  fontFamily: 'Nunito',
  margin: '0 auto',
});

const RatingHeader = styled('h2')({
  fontFamily: 'Nunito',
  margin: '0 auto',
  color: 'white',
  paddingTop: '3%',
  paddingBottom: '1%',
});

const ReviewHeader = styled('h2')({
  fontFamily: 'Nunito',
  margin: '0 auto',
  color: 'white',
  paddingTop: '3%',
  paddingBottom: '1%',
});

const TextColorSecondary = styled('span')({
  color: '#96999a',
});

const TextColorWhite = styled('span')({
  color: 'white',
});

const SliderWrapper = styled('div')({
  width: '70%',
  margin: '0 auto',
});

const RateButton = styled(Button)({
  backgroundColor: 'white',
  color: '#286081',
  fontFamily: 'Nunito',
});

const WardNameContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingTop: '3%'
});

function Ward() {
  const { id } = useParams();
  const [ward, setWard] = useState(null);
  const navigate = useNavigate();

  const getWard = async () => {
    try {
      const response = await axios.get(`http://localhost:3500/api/ward/${id}`);
      setWard(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRateWard = () => {
    navigate(`/review/${id}`);
  };

  useEffect(() => {
    getWard();
  }, [id]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
      {ward && (
        <Root>
          <CssBaseline />
          <WardHeader />
          <StyledDiv>
            <WardNameContainer>
              <WardName>{ward.wardName}</WardName>
              <RateButton variant="contained" onClick={handleRateWard}>Rate ward</RateButton>
            </WardNameContainer>
            <hr></hr>
            <WardDetail><TextColorWhite>Ward Address: </TextColorWhite><TextColorSecondary>{ward.wardAddress}</TextColorSecondary></WardDetail>
            <WardDetail><TextColorWhite>Meeting Time: </TextColorWhite><TextColorSecondary>{ward.meetTime}</TextColorSecondary></WardDetail>
            <RatingHeader>Ratings</RatingHeader>
            <SliderWrapper>
              <Slider {...settings}>
                <RatingCard title="Overall" rating={ward.overall} />
                <RatingCard title="Activities" rating={ward.activities} />
                <RatingCard title="Food" rating={ward.food} />
                <RatingCard title="Bishop" rating={ward.bishop} />
                <RatingCard title="Gender Ratio" rating={ward.genderRatio} />
                <RatingCard title="Location" rating={ward.location} />
                <RatingCard title="Spirituality" rating={ward.spirituality} />
              </Slider>
            </SliderWrapper>
            <ReviewHeader>Reviews</ReviewHeader>
            {ward.reviews.map((review) => (
              <ReviewCard
                key={review.reviewId}
                reviewEntry={review.reviewEntry}
                overall={review.overall}
                likes={review.likes}
              />
            ))}
          </StyledDiv>
        </Root>
      )}
    </>
  );
}

export default Ward;

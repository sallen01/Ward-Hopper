import { styled } from '@mui/system';
import CssBaseline from '@mui/material/CssBaseline';
import WardHeader from '../components/WardHeader.js';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Review as WardReview } from '../models/Review.js'

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

const RateButton = styled(Button)({
  backgroundColor: 'white',
  color: '#286081',
  fontFamily: 'Nunito',
  marginTop: '2%',
});

const WardNameContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingTop: '3%',
});

const ReviewForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  marginTop: '2%',
});

function Review() {
  const { id } = useParams();
  const [ward, setWard] = useState(null);
  const [overall, setOverall] = useState(0);
  const [activities, setActivities] = useState(0);
	const [food, setFood] = useState(0);
  const [bishop, setBishop] = useState(0);
	const [genderRatio, setGenderRatio] = useState(0);
	const [location, setLocatin] = useState(0);
  const [spirituality, setSpirituality] = useState(0);
  const [reviewEntry, setReviewEntry] = useState('');
  const navigate = useNavigate();

  const getWard = async () => {
    try {
      const response = await axios.get(`http://localhost:3500/api/ward/${id}`);
      setWard(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getWard();
  });

  const handleRateButtonClick = async () => {
		try {
			const review = new WardReview(
				id, 
				reviewEntry, 
				overall, 
				activities, 
				food, 
				bishop, 
				genderRatio, 
				location, 
				spirituality
			);
			await axios.post('http://localhost:3500/api/review/create', review);
			navigate(`/ward/${id}`);
		} catch (error) {
			console.log(error);
		}
  };

  return (
    <>
      {ward && (
        <Root>
          <CssBaseline />
          <WardHeader />
          <StyledDiv>
            <WardNameContainer>
              <WardName>{ward.wardName} Review</WardName>
            </WardNameContainer>
            <hr></hr>
            <ReviewForm>
							<TextField
								label="Overall Rating"
								type="number"
								value={overall}
								onChange={(e) => setOverall(e.target.value)}
								variant="filled"
								style={{ backgroundColor: 'white', borderRadius: '8px' }}
								InputProps={{ inputProps: { min: 0, max: 10, step: 0.1 } }}
							/>
							<TextField
								label="Activities"
								type="number"
								value={activities}
								onChange={(e) => setActivities(e.target.value)}
								variant="filled"
								style={{ backgroundColor: 'white', borderRadius: '8px' }}
								InputProps={{ inputProps: { min: 0, max: 10, step: 0.1 } }}
							/>
							<TextField
								label="Food"
								type="number"
								value={food}
								onChange={(e) => setFood(e.target.value)}
								variant="filled"
								style={{ backgroundColor: 'white', borderRadius: '8px' }}
								InputProps={{ inputProps: { min: 0, max: 10, step: 0.1 } }}
							/>
							<TextField
								label="Bishop"
								type="number"
								value={bishop}
								onChange={(e) => setBishop(e.target.value)}
								variant="filled"
								style={{ backgroundColor: 'white', borderRadius: '8px' }}
								InputProps={{ inputProps: { min: 0, max: 10, step: 0.1 } }}
							/>
							<TextField
								label="Gender Ratio"
								type="number"
								value={genderRatio}
								onChange={(e) => setGenderRatio(e.target.value)}
								variant="filled"
								style={{ backgroundColor: 'white', borderRadius: '8px' }}
								InputProps={{ inputProps: { min: 0, max: 10, step: 0.1 } }}
							/>
							<TextField
								label="Location"
								type="number"
								value={location}
								onChange={(e) => setLocatin(e.target.value)}
								variant="filled"
								style={{ backgroundColor: 'white', borderRadius: '8px' }}
								InputProps={{ inputProps: { min: 0, max: 10, step: 0.1 } }}
							/>
							<TextField
								label="Spirituality"
								type="number"
								value={spirituality}
								onChange={(e) => setSpirituality(e.target.value)}
								variant="filled"
								style={{ backgroundColor: 'white', borderRadius: '8px' }}
								InputProps={{ inputProps: { min: 0, max: 10, step: 0.1 } }}
							/>
              <TextareaAutosize
                aria-label="Review Entry"
                placeholder="Write your review here..."
                minRows={3}
                value={reviewEntry}
                onChange={(e) => setReviewEntry(e.target.value)}
              />
              <RateButton variant="contained" onClick={handleRateButtonClick}>
                Submit Review
              </RateButton>
            </ReviewForm>
          </StyledDiv>
        </Root>
      )}
    </>
  );
}

export default Review;

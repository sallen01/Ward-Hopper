import { styled } from '@mui/system';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Collapse } from '@mui/material';

const Root = styled(Card)({
  maxWidth: 445,
  height: 240,
  margin: "20px"
});

const Title = styled(Typography)({
  fontFamily: 'Nunito',
  fontWeight: 'bold',
  fontSize: '2rem',
  color: '#96999a',
});

const Description = styled(Typography)({
  fontFamily: 'Nunito',
  fontSize: '1.1rem',
  color: '#286081',
});

export default function ValueCard({ value, checked }) {
  return (
    <Collapse in={checked} {... (checked ? { timeout: 1000 } : {})}>
      <Root>
        <CardContent>
          <Title gutterBottom variant="h5" component="div">
            {value.title}
          </Title>
          <Description variant="body2">
            {value.description}
          </Description>
        </CardContent>
      </Root>
    </Collapse>
  );
}
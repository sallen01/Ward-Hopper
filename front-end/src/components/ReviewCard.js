import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function ReviewCard({ reviewEntry, overall, likes }) {
    return (
      <Card sx={{ maxWidth: '100%', backgroundColor: 'white', margin: '3%' }}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography sx={{ fontSize: 20, color: '#286081' }} color="text.secondary" fontFamily="Nunito" gutterBottom>
            Rating {overall}
          </Typography>
          <Typography sx={{ fontSize: 20, color: '#286081', textAlign: 'center' }} color="text.secondary" fontFamily="Nunito" gutterBottom>
            {reviewEntry}
          </Typography>
          <Typography sx={{ color: '#96999a', fontSize: 20, textAlign: 'right'}} fontFamily="Nunito" gutterBottom>
            {likes} Likes
          </Typography>
        </CardContent>
      </Card>
    );
  }
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function RatingCard({ title, rating }) {
  return (
    <Card sx={{ maxWidth: 250, backgroundColor: 'white', margin: '3%' }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Typography sx={{ color: '#96999a' }} variant="h5" component="div" fontFamily="Nunito">
          {title}
        </Typography>
        <Typography sx={{ fontSize: 50, color: '#286081'}} color="text.secondary" fontFamily="Nunito" gutterBottom>
          {rating}
        </Typography>
      </CardContent>
    </Card>
  );
}
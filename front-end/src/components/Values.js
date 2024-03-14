import { styled } from '@mui/system';
import ValueCard from './ValueCard';
import values from '../static/values';
import useWindowPosition from '../hook/useWindowPosition';

const StyledValuesContainer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  });

function Values() {
    const checked = useWindowPosition('header');
  return (
    <StyledValuesContainer id="values">
        <ValueCard value={values[0]} checked={checked}/>
        <ValueCard value={values[1]} checked={checked}/>
        <ValueCard value={values[2]} checked={checked}/>
    </StyledValuesContainer>
  );
}

export default Values;
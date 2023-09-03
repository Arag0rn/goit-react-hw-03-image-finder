import { RotatingLines } from 'react-loader-spinner';
import { Wraper } from './Loader.styled';

export const Loader = () => {
  return (
    <Wraper>
     <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
/>
    </Wraper>
  );
};
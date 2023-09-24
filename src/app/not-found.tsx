import { CloudLayout } from '@/components/CloudLayout';
import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import rocketSVG from '../../public/rocket.svg';

const NotFound = () => {
  return (
    <CloudLayout>
      <Stack height={'100%'} alignItems={'center'} spacing={2} justifyContent={'space-between'}>
        <Typography variant={'h1'}>404</Typography>
        <Typography variant={'h2'}>PAGE NOT FOUND</Typography>
        <Image
          src={rocketSVG}
          alt="rocket"
          quality={100}
          style={{ width: '100%', height: 'auto', maxWidth: '400px', pointerEvents: 'none' }}
        />
      </Stack>
    </CloudLayout>
  );
};

export default NotFound;

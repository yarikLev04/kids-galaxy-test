import { CloudLayout } from '@/components/CloudLayout';
import { Stack, Typography } from '@mui/material';

export default function Home() {
  return (
    <>
      <CloudLayout>
        <Stack sx={{ px: { xs: 4, md: 10, lg: 20 } }}>
          <Typography variant={'h1'} fontWeight={700}>
            A place of bright <br /> childhood
          </Typography>
        </Stack>
      </CloudLayout>
      <CloudLayout>
        <Stack sx={{ px: { xs: 4, md: 10, lg: 20 } }}>
          <Typography variant={'h1'} fontWeight={700}>
            A place of bright <br /> childhood
          </Typography>
        </Stack>
      </CloudLayout>
      <CloudLayout>
        <Stack sx={{ px: { xs: 4, md: 10, lg: 20 } }}>
          <Typography variant={'h1'} fontWeight={700}>
            A place of bright <br /> childhood
          </Typography>
        </Stack>
      </CloudLayout>
      <CloudLayout>
        <Stack sx={{ px: { xs: 4, md: 10, lg: 20 } }}>
          <Typography variant={'h1'} fontWeight={700}>
            A place of bright <br /> childhood
          </Typography>
        </Stack>
      </CloudLayout>
      <CloudLayout>
        <Stack sx={{ px: { xs: 4, md: 10, lg: 20 } }}>
          <Typography variant={'h1'} fontWeight={700}>
            A place of bright <br /> childhood
          </Typography>
        </Stack>
      </CloudLayout>
      <CloudLayout>
        <Stack id={'about'} sx={{ px: { xs: 4, md: 10, lg: 20 } }}>
          <Typography variant={'h1'} fontWeight={700}>
            A place of bright <br /> childhood
          </Typography>
        </Stack>
      </CloudLayout>
    </>
  );
}

import { CloudLayout } from '@/components/CloudLayout';
import GallerySlider from '@/components/GallerySlider';
import Logo from '@/components/Logo';
import { Gallery } from '@/types/gallery/models';
import { Stack, Typography } from '@mui/material';
import React from 'react';

type MainSectionProps = {
  photos: Gallery[];
};

export function MainSection({ photos }: MainSectionProps) {
  return (
    <CloudLayout withLogo={false} sxProps={{ flexDirection: 'column' }}>
      <Stack py={{ xs: 2, md: 4, lg: 6 }} px={{ xs: 4, md: 10, lg: 20 }} spacing={4}>
        <Logo />
        <Typography variant={'h1'}>
          A place of bright <br /> childhood
        </Typography>
        <GallerySlider photos={photos} />
      </Stack>
    </CloudLayout>
  );
}

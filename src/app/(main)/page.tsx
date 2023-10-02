import { AboutUs } from '@/sections/main/MainSection/AboutUs';
import { MainSection } from '@/sections/main/MainSection/MainSection';
import { WhatWeDo } from '@/sections/main/MainSection/WhatWeDo';
import { Stack } from '@mui/material';
import gallery from '@/services/gallery';
import React from 'react';

export default async function Home() {
  const galleryPhotos = await gallery.getGalleryPhotos();

  return (
    <>
      <Stack>
        <MainSection photos={galleryPhotos} />
        <AboutUs />
        <WhatWeDo />
      </Stack>
    </>
  );
}

'use client';

import { Gallery } from '@/types/gallery/models';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Box, Grid, IconButton, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

type GallerySliderProps = {
  photos: Gallery[];
};

const GallerySlider = ({ photos }: GallerySliderProps) => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      mode: 'snap',
      loop: true,
      slides: {
        origin: 'center',
        perView: 1,
        spacing: 15
      },
      defaultAnimation: {
        duration: 3000
      },
      slideChanged(s) {}
    },
    [
      slider => {
        let timeout: ReturnType<typeof setTimeout>;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearNextTimeout();

          timeout = setTimeout(() => {
            slider.next();
          }, 5000);
        }
        slider.on('created', () => {
          nextTimeout();
        });
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      }
    ]
  );

  return (
    <>
      <Box
        ref={sliderRef}
        className="keen-slider"
        sx={{ width: '100%', maxWidth: '100%', overflow: 'hidden', position: 'relative', borderRadius: 5 }}
      >
        {photos.map(galleryPhoto => (
          <Stack key={galleryPhoto.gallery_id} className="keen-slider__slide">
            <Image
              src={`data:image/svg;base64, ${galleryPhoto.photo}`}
              alt={'gallery photo'}
              width={100}
              height={100}
              style={{ width: '100%', height: '100%', maxHeight: '80vh', objectFit: 'cover' }}
            />
          </Stack>
        ))}
      </Box>
      <Grid container justifyContent={'space-between'} alignItems={'center'}>
        <Grid item xs={'auto'}>
          <Grid container>
            <Grid item xs={'auto'}>
              <IconButton onClick={() => instanceRef.current?.prev()} disableFocusRipple disableRipple>
                <ArrowBack />
              </IconButton>
            </Grid>
            <Grid item xs={'auto'}>
              <IconButton onClick={() => instanceRef.current?.next()} disableFocusRipple disableRipple>
                <ArrowForward />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={6}>
          <Typography component={'p'} variant={'subtitle2'}>
            Kids galaxy is a place where children become happier. Here you can play fun games, celebrate a party, visit interesting circles
            and become a club member.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default GallerySlider;

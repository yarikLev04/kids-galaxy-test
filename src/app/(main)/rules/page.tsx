import TruncateText from '@/components/TruncateText';
import rulesService from '@/services/rulesService';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';
import photoForRules from '../../../../public/photo_for_rules.png';
import rocket from '../../../../public/rocket.svg';

export async function generateMetadata(): Promise<Metadata> {
  const rules = await rulesService.getRules();

  return {
    title: 'Rules',
    description: rules
  };
}

export default async function Rules() {
  const rules = await rulesService.getRules();

  return (
    <Grid
      container
      columnSpacing={{ md: 4, lg: 16 }}
      rowSpacing={4}
      alignItems={{ xs: 'center', sm: 'flex-start' }}
      py={{ xs: 2, md: 7, lg: 8 }}
      px={{ xs: 4, md: 10, lg: 20 }}
    >
      <Grid item xs={0} sm={12} sx={{ display: { xs: 'none', sm: 'block' } }}>
        <Box>
          <Image src={rocket} alt={'rocket'} style={{ pointerEvents: 'none' }} />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Stack spacing={4}>
          <Typography variant={'h2'}>
            Rules for using the <br /> room
          </Typography>
          <TruncateText text={rules} maxLength={600} />
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Image src={photoForRules} alt={'children'} style={{ width: '100%', height: 'auto', pointerEvents: 'none' }} />
      </Grid>
    </Grid>
  );
}

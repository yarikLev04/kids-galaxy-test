import TruncateText from '@/components/TruncateText';
import rulesService from '@/services/rulesService';
import { Box, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import photoForRules from '../../../../public/photo_for_rules.png';
import rocket from '../../../../public/rocket.svg';

export default async function Rules() {
  const rules = await rulesService.getRules();

  return (
    <Grid
      container
      columnSpacing={12}
      rowSpacing={4}
      alignItems={{ xs: 'center', sm: 'flex-start' }}
      sx={{ px: { xs: 4, md: 10, lg: 16 } }}
    >
      <Grid item xs={0} sm={12} sx={{ display: { xs: 'none', sm: 'block' } }}>
        <Box>
          <Image src={rocket} alt={'rocket'} style={{ pointerEvents: 'none' }} />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={8} lg={8}>
        <Stack spacing={4}>
          <Typography variant={'h2'}>
            Rules for using the <br /> room
          </Typography>
          <TruncateText text={rules} maxLength={600} />
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <Image src={photoForRules} alt={'children'} style={{ width: '100%', height: 'auto', pointerEvents: 'none' }} />
      </Grid>
    </Grid>
  );
}

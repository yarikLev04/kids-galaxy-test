'use client';

import { ServiceTypes, ServiceTypesItem } from '@/types/services/models';
import { Chip, Grid, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

export const serviceTypesArray: ServiceTypesItem[] = Object.keys(ServiceTypes).map(type => ({
  isSelected: false,
  type: ServiceTypes[type as keyof typeof ServiceTypes],
  label: type
}));

export function WhatWeDo() {
  const [serviceTypes, setServiceTypes] = useState<ServiceTypesItem[]>(serviceTypesArray);

  const handleChangeServiceTypes = (type: ServiceTypes) => {
    setServiceTypes(serviceTypes.map(st => ({ ...st, isSelected: st.type === type })));
  };

  useEffect(() => {
    console.log(serviceTypes);
  }, [serviceTypes]);

  return (
    <Stack id={'whatWeDo'} py={{ xs: 4, md: 14, lg: 17 }} px={{ xs: 4, md: 10, lg: 20 }}>
      <Stack alignItems={'center'}>
        <Typography variant={'h2'}>What We Do</Typography>
        <Typography variant={'body1'} textAlign={'center'} mb={{ xs: 6, sm: 10 }}>
          Stacks is a production-ready library of stackable <br /> content blocks built in React Native.
        </Typography>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant={'body2'} textTransform={'uppercase'}>
              kids galaxy
            </Typography>
          </Grid>
          <Grid item xs={6}>
            {serviceTypes.map(st => (
              <Chip
                key={st.type}
                color={'secondary'}
                variant={st.isSelected ? 'filled' : 'outlined'}
                label={st.label}
                onClick={() => handleChangeServiceTypes(st.type)}
              />
            ))}
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
}

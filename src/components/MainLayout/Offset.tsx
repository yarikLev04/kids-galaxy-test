'use client';
import { styled } from '@mui/material';

const Offset = styled('div')(({ theme }) => ({ ...theme.mixins.toolbar, minHeight: '0 !important' }));

export default Offset;

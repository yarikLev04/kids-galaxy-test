import TruncateText from '@/components/TruncateText';
import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import photoForAboutUse from '../../../../public/photo_for_about_us.png';
import rocket from '../../../../public/rocket.svg';

export function AboutUs() {
  return (
    <Grid id={'about'} container spacing={{ md: 4, lg: 16 }} py={{ xs: 4, md: 14, lg: 17 }} px={{ xs: 4, md: 10, lg: 20 }}>
      <Grid item xs={12} sm={6}>
        <Image src={rocket} alt={'rocket'} style={{ pointerEvents: 'none' }} />
        <Typography variant={'h2'}>
          A place of bright <br /> childhood
        </Typography>
        <TruncateText
          text={
            'We are passionate about creating a magical space for children to discover the world while parents can unwind and relax.\n' +
            "- our children's playroom is designed to expand their imagination and provide endless opportunities for learning through play.\n" +
            '- it is a place where children can celebrate their birthdays, surrounded by friends, and enjoy a day filled with fun and games.\n' +
            '- our dedicated team ensures a safe, clean, and stimulating environment where children can explore, create, and make long lasting memories.\n' +
            '- come join us and let your little ones embark on exciting adventures, while parents can enjoy a much-needed break, knowing their children are in good hands.'
          }
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Image src={photoForAboutUse} alt={'children'} style={{ width: '100%', height: 'auto', pointerEvents: 'none' }} />
      </Grid>
    </Grid>
  );
}

export function remToPx(value: string) {
  return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value: number) {
  return `${value / 16}rem`;
}

export function responsiveFontSizes({ xs, md, lg }: { xs: number; md: number; lg: number }) {
  return {
    '@media (max-width:600px)': {
      fontSize: pxToRem(xs)
    },
    '@media (min-width:600px)': {
      fontSize: pxToRem(md)
    },
    '@media (min-width:1200px)': {
      fontSize: pxToRem(lg)
    }
  };
}

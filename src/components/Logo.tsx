import Image from 'next/image';
import React from 'react';

const Logo = () => {
  return <Image src="/logo.svg" style={{ pointerEvents: 'none' }} alt="logo" width="147" height="120" quality={100} priority={true} />;
};

export default Logo;

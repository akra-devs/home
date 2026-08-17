import React from 'react';

type BrandMarkProps = Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'width' | 'height'>;

const BrandMark: React.FC<BrandMarkProps> = ({ className = '', alt = '', ...props }) => (
  <img
    src="/brand/akra-mark.svg"
    width={768}
    height={672}
    alt={alt}
    decoding="async"
    className={`block shrink-0 ${className}`}
    {...props}
  />
);

export default BrandMark;

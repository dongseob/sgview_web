import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='pt-[40px] pb-[120px] max-md:pt-[32px] max-md:pb-[32px]'>
      <div className='max-w-[1200px] mx-auto px-[20px]'>{children}</div>
    </div>
  );
};

export default layout;

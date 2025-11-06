import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='pt-[40px] pb-[120px] max-[745px]:pt-[0px] max-[745px]:pb-[32px]'>
      <div className='max-w-[1200px] mx-auto px-[20px] max-[745px]:px-0'>
        {children}
      </div>
    </div>
  );
};

export default layout;

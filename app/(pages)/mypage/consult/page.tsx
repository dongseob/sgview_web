'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ConsultList from './ConsultList';
import ConsultDetail from './ConsultDetail';

function PageContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  if (id) {
    return <ConsultDetail id={id} />;
  }
  return <ConsultList />;
}

export default function Page() {
  return (
    <Suspense fallback={null}>
      <div className='mx-auto w-[1440px]'><PageContent /></div>
    </Suspense>
  );
}

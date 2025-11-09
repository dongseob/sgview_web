'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import ConsultDetail from './ConsultDetail';
import ConsultList from './ConsultList';

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
      <div className={`mx-auto max-w-[1440px] max-[745px]:px-[0] }`}>
        <PageContent />
      </div>
    </Suspense>
  );
}

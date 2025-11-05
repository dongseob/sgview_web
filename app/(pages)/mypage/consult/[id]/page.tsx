import ConsultDetail from './ConsultDetail';

export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}

const ConsultDetailPage = () => {
  return (
    <div>
      <ConsultDetail />
    </div>
  );
};

export default ConsultDetailPage;

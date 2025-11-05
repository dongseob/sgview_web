import ConsultListItem from './ConsultListItem';

const ConsultList = () => {
  const consultList = [
    {
      id: 1,
      date: '2025.10.31',
      name: '이*희(고3)',
      consultant: '미배정',
      consulting: 'registered',
    },

    {
      id: 1,
      date: '2025.10.31',
      name: '김*지(고3)',
      consultant: '미배정',
      consulting: 'in-progress',
    },

    {
      id: 1,
      date: '2025.10.31',
      name: '이*희(고2)',
      consultant: '김하늘',
      consulting: 'complete',
    },

    {
      id: 1,
      date: '2025.10.31',
      name: '이*희(고1)',
      consultant: '김하늘',
      consulting: 'cancelled',
    },
  ];
  return (
    <div className='pt-[40px] pb-[120px] max-w-[1440px]'>
      <div className='w-full  mx-auto  flex items-start justify-start gap-[24px] px-[144px] max-md:px-[20px] max-md:flex-col'>
        <div className='flex flex-col items-start justify-start gap-[12px] min-w-[270px] max-md:items-center max-md:justify-center max-md:w-full'>
          <h3 className='text-[28px] font-[700] leading-[1.3] text-[var(--n-800)]'>
            나의 컨설팅
          </h3>
          <button className='border border-[var(--n-200)] rounded-[100px] px-[20px] h-[42px] text-[14px] font-[500] text-[var(--n-800)]'>
            + 새 컨설팅
          </button>
        </div>
        <div className='flex flex-wrap items-start justify-start gap-[24px]'>
          {consultList.map((item) => {
            return (
              <ConsultListItem
                key={item.id + item.name}
                date={item.date}
                name={item.name}
                consultant={item.consultant}
                consulting={item.consulting}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ConsultList;

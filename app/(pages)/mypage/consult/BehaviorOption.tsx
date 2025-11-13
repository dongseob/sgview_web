interface BehavioralCharacteristic {
  id: string;
  grade: string;
  notes: string;
}
const BehaviorOption = ({
  behavioralCharacteristics,
}: {
  behavioralCharacteristics: BehavioralCharacteristic[];
}) => {
  return (
    <div>
      <h2 className='text-[24px] font-[700] leading-[1.3] text-[var(--n-800)] mb-[32px] max-[745px]:px-[20px]'>
        행동특성 및 종합의견
      </h2>

      <div className='overflow-x-auto border-t-[var(--n-800)] border-t max-[745px]:border-t-0 max-[745px]:px-[20px]'>
        <div className='w-full border-t-[var(--n-800)] border-t min-w-[858px] hidden max-[745px]:block'></div>
        <table className='w-full border-collapse max-[745px]:min-w-[858px]'>
          <colgroup>
            <col width='140px' />
            <col width='716px' />
          </colgroup>
          <thead>
            <tr className='bg-[var(--n-50)]'>
              <th className='border border-[var(--n-200)] border-l-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-left w-[100px]'>
                학년
              </th>
              <th className='border border-[var(--n-200)] border-r-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-cenetr'>
                행동특성 및 종합의견
              </th>
            </tr>
          </thead>
          <tbody>
            {behavioralCharacteristics?.map((row, index) => (
              <tr key={index}>
                <td className='border border-[var(--n-200)] border-l-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-left align-top'>
                  {row.grade}
                </td>
                <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] leading-[1.6] text-[var(--n-800)] text-left'>
                  {row.notes}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BehaviorOption;

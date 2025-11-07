const BehaviorOption = () => {
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
            {[
              {
                grade: '1',
                content:
                  '인간이 바로 자세로 앉아 수업을 경청하는 모습이 인상적인 학생으로 자신의 진로와 관련하여 스스로 책을 선정하여 읽으며 독서일지를 작성함. 실제 책을 고치기 또 글을 통해 그들이 다양한 체숙 수업을 준비하는 것을 보고 그들의 노력에 깊이를 표하며 글을 작성함. 또한 다양한 유형의 담화·글·작품을 듣고 읽거나 쓰고 말하면서 폭넓은 지식을 습득하고 적극적으로 사고하며 상호 이해와 소통하는 태도를 지닌다. 또한 다양한 유형의 담화·글·작품을 듣고 읽거나 쓰고 말하면서 폭넓은 지식을 습득하고 적극적으로 사고하며 상호 이해와 소통하는 태도를 지닌다.',
              },
              {
                grade: '2',
                content:
                  '인간이 바로 자세로 앉아 수업을 경청하는 모습이 인상적인 학생으로 자신의 진로와 관련하여 스스로 책을 선정하여 읽으며 독서일지를 작성함. 실제 책을 고치기 또 글을 통해 그들이 다양한 체숙 수업을 준비하는 것을 보고 그들의 노력에 깊이를 표하며 글을 작성함. 또한 다양한 유형의 담화·글·작품을 듣고 읽거나 쓰고 말하면서 폭넓은 지식을 습득하고 적극적으로 사고하며 상호 이해와 소통하는 태도를 지닌다. 또한 다양한 유형의 담화·글·작품을 듣고 읽거나 쓰고 말하면서 폭넓은 지식을 습득하고 적극적으로 사고하며 상호 이해와 소통하는 태도를 지닌다.',
              },
              {
                grade: '3',
                content:
                  '인간이 바로 자세로 앉아 수업을 경청하는 모습이 인상적인 학생으로 자신의 진로와 관련하여 스스로 책을 선정하여 읽으며 독서일지를 작성함. 실제 책을 고치기 또 글을 통해 그들이 다양한 체숙 수업을 준비하는 것을 보고 그들의 노력에 깊이를 표하며 글을 작성함. 또한 다양한 유형의 담화·글·작품을 듣고 읽거나 쓰고 말하면서 폭넓은 지식을 습득하고 적극적으로 사고하며 상호 이해와 소통하는 태도를 지닌다. 또한 다양한 유형의 담화·글·작품을 듣고 읽거나 쓰고 말하면서 폭넓은 지식을 습득하고 적극적으로 사고하며 상호 이해와 소통하는 태도를 지닌다.',
              },
            ].map((row, index) => (
              <tr key={index}>
                <td className='border border-[var(--n-200)] border-l-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-left align-top'>
                  {row.grade}
                </td>
                <td className='border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] leading-[1.6] text-[var(--n-800)] text-left'>
                  {row.content}
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

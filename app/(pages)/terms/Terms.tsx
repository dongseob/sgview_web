import { serviceTerms } from '@/app/data/serviceTerms';

const Terms = () => {
  return (
    <div className='pt-[40px] pb-[120px] max-[745px]:pt-[32px] max-[745px]:pb-[0px] max-[745px]:px-[0px]'>
      <div className='w-full max-w-[898px] mx-auto px-[20px] max-[745px]:px-[0]'>
        <h1 className='text-[26px] font-[700] leading-[1.3] text-[var(--n-800)] mb-[40px] text-center max-[745px]:text-[24px] '>
          이용약관
        </h1>
        <div className='w-full bg-white rounded-[8px] p-[40px] max-[745px]:p-[20px]'>
          {serviceTerms.sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className='mb-[40px] last:mb-0'>
              <h2 className='text-[24px] font-[700] text-[var(--n-800)] leading-[1.3] max-[745px]:text-[18px] '>
                {section.chapter}
              </h2>
              {section.articles ? (
                section.articles.map((article, articleIndex) => (
                  <div key={articleIndex} className='mb-[32px] last:mb-0'>
                    <h3 className='text-[20px] font-[600] text-[var(--n-800)] max-[745px]:text-[15px]'>
                      {article.number} ({article.title})
                    </h3>
                    <div className='text-[16px] font-[400] leading-[1.6] text-[var(--n-600)] whitespace-pre-line '>
                      {article.content}
                    </div>
                  </div>
                ))
              ) : (
                <div className='text-[15px] leading-[1.4] text-[var(--n-600)] whitespace-pre-line '>
                  {section.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Terms;

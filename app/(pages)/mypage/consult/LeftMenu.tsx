const menuItems = [
  { id: 'grade-trend', label: '교과별 등급추이' },
  { id: 'subject-grade', label: '교과성적' },
  { id: 'learning-development', label: '교과학습발달' },
  { id: 'creative-activity', label: '창의적 체험활동' },
  { id: 'behavior-opinion', label: '행동특성 및 종합의견' },
  { id: 'attendance', label: '출결/자격증/봉사' },
];

interface LeftMenuProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const LeftMenu = ({ activeSection, onSectionChange }: LeftMenuProps) => {
  return (
    <>
      {/* 데스크톱: 세로 메뉴 */}
      <div className='hidden md:flex flex-col gap-[8px] w-full'>
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            className={`text-left text-[16px] font-[600] transition-colors ${
              activeSection === item.id
                ? 'text-[var(--r-400)]'
                : 'text-[var(--n-800)] hover:text-[var(--r-400)]'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* 모바일: 가로 탭 메뉴 */}
      <div
        className='md:hidden overflow-x-auto [&::-webkit-scrollbar]:hidden fixed top-[56px] left-0 right-0 w-full bg-white z-10'
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <div className='flex min-w-max'>
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={` text-[16px] font-[600] transition-colors whitespace-nowrap relative py-[12px] px-[20px] ${
                activeSection === item.id
                  ? 'text-[var(--r-400)] border-b-[2px] border-[var(--r-400)]'
                  : 'text-[var(--n-800)] border-b-[2px] border-[var(--n-100)]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default LeftMenu;

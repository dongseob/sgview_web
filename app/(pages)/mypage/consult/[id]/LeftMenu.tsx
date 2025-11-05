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
    <div className='flex flex-col gap-[8px] w-full'>
      {menuItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onSectionChange(item.id)}
          className={`text-left px-[16px] text-[16px] font-[600] transition-colors ${
            activeSection === item.id
              ? 'text-[var(--r-400)]'
              : 'text-[var(--n-800)] hover:text-[var(--r-400)]'
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default LeftMenu;

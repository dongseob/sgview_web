const Button = ({ title, onClick }: { title: string; onClick: () => void }) => {
  return (
    <button
      className={
        'bg-[var(--n-100)] rounded-[8px] h-[48px] w-full cursor-pointer text-[var(--n-400)]'
      }
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;

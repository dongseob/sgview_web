'use client';
export const TitleInput = ({
  title,
  placeholder,
  error,
  handleKeyDown,
  onchange,
  onblur,
}: {
  title: string;
  error: boolean;
  placeholder: string;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onblur: (e: React.FocusEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className='flex flex-col gap-[8px] w-full'>
      <p className='text-[#36373A] text-[13px] font-medium'>{title}</p>
      <input
        type='text'
        name='id'
        id='id'
        className={`w-full h-[50px] px-[16px] py-[10px] border rounded-[8px] placeholder:text-[#AFB0B6] text-[15px] font-medium focus:outline-none ${
          error ? 'border-[var(--n-200)]' : 'border-[var(--r-400)]'
        }`}
        placeholder={placeholder}
        onKeyDown={handleKeyDown}
        onBlur={(e) => {
          onblur(e);
        }}
        onChange={(e) => {
          onchange(e);
        }}
      />
    </div>
  );
};

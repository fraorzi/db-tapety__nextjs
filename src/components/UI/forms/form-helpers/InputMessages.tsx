interface InputMessagesProps {
  helperText?: string;
  error?: string;
}

const InputMessages = ({ helperText, error }: InputMessagesProps) => {
  if (!helperText && !error) return null;

  return (
    <div className='mt-1 flex flex-col'>
      {helperText && <p className='text-xs text-gray-500'>{helperText}</p>}
      {error && <span className='text-xs text-red-500'>{error}</span>}
    </div>
  );
};

export default InputMessages;

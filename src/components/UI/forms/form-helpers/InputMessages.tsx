interface InputMessagesProps {
  helperText?: string;
  error?: string;
  helperId?: string;
  errorId?: string;
}

const InputMessages = ({ helperText, error, helperId, errorId }: InputMessagesProps) => {
  if (!helperText && !error) return null;

  return (
    <div className='mt-1 flex flex-col'>
      {helperText && (
        <p id={helperId} className='text-xs text-gray-500'>
          {helperText}
        </p>
      )}
      {error && (
        <span id={errorId} className='text-xs text-red-500'>
          {error}
        </span>
      )}
    </div>
  );
};

export default InputMessages;

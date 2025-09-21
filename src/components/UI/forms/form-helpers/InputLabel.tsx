import clsxm from '@/lib/clsxm';

interface InputLabelProps {
  id: string;
  label: string;
  hidden?: boolean;
}

const InputLabel = ({ id, label, hidden }: InputLabelProps) => {
  return (
    <label htmlFor={id} className={clsxm('mb-1 block text-xs font-normal', hidden && 'sr-only')}>
      {label}
    </label>
  );
};

export default InputLabel;

import { useId } from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';

type Props = {
  label: string;
  value: string;
  readOnly: boolean;
};

export default function LabelInput({ label, value, readOnly }: Props) {
  const id = useId();
  return (
    <div className='flex justify-between'>
      <Label className='flex' htmlFor={id}>
        {label}
      </Label>
      <Input
        id={label}
        type='text'
        readOnly={readOnly}
        disabled={true}
        className='flex border-0 focus:border-0 focus-visible:ring-0'
        value={value}
      ></Input>
    </div>
  );
}

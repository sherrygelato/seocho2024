import { ForwardedRef } from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';

type Props = {
  id: string;
  label: string;
  value: string;
  type: string;
  readOnly?: boolean;
  ref?: ForwardedRef<HTMLInputElement>;
};

export default function LabelTypeInput({
  id,
  label,
  value,
  type,
  readOnly = false,
}: Props) {
  return (
    <div className='grid grid-cols-4 items-center gap-4 m-3'>
      <Label className='text-right' htmlFor={id}>
        {label}
      </Label>
      <Input
        id={id}
        type={type}
        name={value}
        readOnly={readOnly}
        className='col-span-3'
      />
    </div>
  );
}

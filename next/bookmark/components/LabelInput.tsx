import { ForwardedRef, useId } from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';

type Props = {
  label: string;
  value: string;
  readOnly?: boolean;
  ref?: ForwardedRef<HTMLInputElement>;
};

export default function LabelInput({
  label,
  value,
  readOnly = true,
  ref,
}: Props) {
  const id = useId();
  return (
    <div className='grid grid-cols-4 items-center gap-4 m-3'>
      <Label className='text-right' htmlFor={id}>
        {label}
      </Label>
      <Input
        id={id}
        type='text'
        readOnly={readOnly}
        disabled={true}
        className='col-span-3'
        name={label}
        placeholder={value}
        ref={ref}
      />
    </div>
  );
}

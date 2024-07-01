type Params = {
  params: {
    time: 'morning' | 'afternoon' | 'evening';
    cmt: string;
  };
};
export default function TimeCmt({ params }: Params) {
  const { time, cmt } = params;

  return (
    <>
      TimeCmt: <strong className='text-blue-500'>{time}</strong>
      <strong className='text-yellow-500'>-</strong>
      <strong className='text-red-500'>{cmt}</strong>
    </>
  );
}

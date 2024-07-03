export const revalidate = 3;

export default function Isr() {
  return (
    <>
      <h1 className='text-2xl'>ISR</h1>
      {Math.random()}:: {new Date().toLocaleDateString()}
    </>
  );
}

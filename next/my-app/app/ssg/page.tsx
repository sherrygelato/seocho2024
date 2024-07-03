export default function Ssg() {
  return (
    <>
      <h1 className='text-2xl'>SSG</h1>
      {Math.random()}:: {new Date().toLocaleDateString()}
    </>
  );
}

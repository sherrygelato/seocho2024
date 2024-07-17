export default function Mark() {
  return (
    <div
      className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
      rel='noopener noreferrer'
    >
      <div className='flex border-2 border-white p-1'>
        <div className='w-20 text-center'>Image Area</div>
        <div>
          <h3 className='mb-3 text-2xl font-semibold'>
            Mark{' '}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              +
            </span>
          </h3>
          <p className='m-0 max-w-[30ch] text-sm opacity-50'>Description...</p>
        </div>
      </div>
    </div>
  );
}

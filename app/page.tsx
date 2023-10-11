import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='w-screen h-screen bg-black text-white flex justify-center items-center'>
      <div className='w-full max-w-[600px] mx-auto'>
        <h1 className='text-6xl mb-4'>The best Journal app, period.</h1>
        <p className='text-2xl text-gray-300 mb-4'>
          This is the best app for tracking your mood through out your life. All
          you have to do is be honest.
        </p>
        <div>
          <Link href='/journal'>
            <button className='bg-sky-400 px-4 py-2 rounded text-xl'>
              get started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

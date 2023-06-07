export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 bg-slate-200">
      <div className='w-screen h-screen max-w-4xl text-3xl flex justify-center p-2'>
          <div className='bg-red-100  rounded-xl w-[60%] h-[80%] m-2 shadow-lg'>

          </div>
          <div className='flex flex-col justify-between h-[80%] w-[40%] m-2'>
            <div className='bg-red-200 rounded-xl h-[40%] p-4 shadow-2xl mb-4'>
              <h1>Title</h1>
            </div>
            <div className='bg-red-400 text-lg rounded-xl h-[60%] p-4 shadow-md'>
              <h2>Desc</h2>
            </div>
          </div>
      </div>
    </main>
  )
}

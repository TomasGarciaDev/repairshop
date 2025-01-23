import Link from "next/link";
export default function Home() {
  return (
    <div className='bg-black bg-home-img bg-cover bg-center'>
      <main className='flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh'>
        <div className='flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl'>
          <h1 className='text-4xl font-bold'>Computer Clinic UK</h1>
          <address>990 Eastern Ave, Ilford IG2 7JD</address>
          <p>Open Daily: 10am to 7pm</p>
          <Link href='tel:+442085979764' className='hover:underline'>
            +44 2085979764
          </Link>
        </div>
      </main>
    </div>
  );
}

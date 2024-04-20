import ClickCounter from './components/ClickCounter'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className="w-full min-h-screen flex flex-col">
        <h1 className="flex items-center justify-center py-4 uppercase">Election Simulator</h1>
        <div className="bg-[#1e293b] flex flex-grow text-white">
          <div className="w-1/2 flex flex-col items-center justify-center">
            <Image
              src="/profile.png"
              width={100}
              height={100}
              alt="Picture of the author"
              className="pb-4"
            />
            <ClickCounter />
          </div>

          <div className="w-1/2 flex flex-col items-center justify-center">
            <Image
              src="/profile.png"
              width={100}
              height={100}
              alt="Picture of the author"
              className="pb-4"
            />
            <ClickCounter />
          </div>
        </div>
        <footer className="flex items-center justify-center py-4">Copyright &copy; Jonathan W. Mendez. All Rights Reserved.</footer>
      </div>
    </main>
  );
}


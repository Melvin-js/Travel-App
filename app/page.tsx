
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-full min-h-screen items-center bg-white">

        {/*navigation bar*/}
        <nav className="flex items-center w-screen justify-between bg-white my-7 px-[112px] py-2">
          <div className=" text-black font-medium text-[30px]">Travel App</div>
          <div className="flex gap-5 items-center justify-center">
            <div className="flex text-black text-lg font-mono ">Log in</div>
            <div className="flex-auto rounded-xl bg-black px-5 py-2 hover:scale-125 transition hover:duration-200">
              <div className="text-white text-sm ">Sign Up</div>
            </div>
          </div>
        </nav>

      
        <div className="flex relative bg-black rounded-[30px] mt-2 w-[85%] h-[500px] overflow-hidden">

          <img className="object-fill h-[100%] w-[100%]" src="./nature2.jpg" alt='nature'></img>
          <div className="flex-col absolute ml-[100px] mt-[80px] ">
            <div>
              <p className="text-white text-[18px] font-mono">Ai Integrated Travel Recommendations</p>
              <p className="text-white text-[100px] font-seriff">Adventure</p>
              <p className="text-white text-[18px] font-mono">Let AI be your compass as you conquer</p>
              <p className="text-white text-[18px] font-mono">challenges, explore new horizons abd earn</p>
              <p className="text-white text-[18px] font-mono">exciting rewards!</p>
              <img className="h-[40px] w-[40px] mt-[20px] hover:scale-125 transition hover:duration-200 " src="./right_white.png" alt="arrow"></img>
            </div>
          </div>

        </div>
        
    </main>
  );
}

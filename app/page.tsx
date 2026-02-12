import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 w-screen justify-center  flex items-center h-screen">
      <div className=" border-2 w-60 h-90 rounded-4xl flex-col p-5 flex ">
        <div className="bg-black items-center flex justify-center w-30 h-30 rounded-full  ml-9 ">
        <Image className="rounded-full"
        width={118}
        height={80}
        src={"/login.jpg"}
        
        />x


        </div>
          <div className=" w-50  mt-8 h-10">
            <input placeholder="Email ID"
            className="border-b-2 border-white"/>
          </div>
          <div className=" w-50 font-bol text-white mt-1 h-10">
             <input placeholder="Password"
              className="border-b-2 border-white"/>
          </div>
        <button className="bg-blue-500 font-semibold  rounded-2xl w-50 h-10">Login</button>
             

      </div>






   
    </div>
  );
}

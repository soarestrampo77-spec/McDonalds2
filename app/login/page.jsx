import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-violet-500 items-center flex justify-center w-screen h-screen">
      <div className="bg-white w-60 rounded-xl items-center  flex-col flex h-100">
        <div className="text-black h-10 p-2 font-bold mt-7 text-3xl ">
          <h1>Login</h1>
        </div>
        <div className=" mt-9 text-black  ">
          <h1>Username</h1>
          <input placeholder="type your username "
          className="p-2 rounded-xl border-gray-500 border-2"/>
           </div>
    
          <div className=" mt-3 text-black ">
          <h1>Password</h1>
          <input placeholder="type your username "
          className="p-2 border-2 rounded-xl border-gray-500"/>
          </div>
          <div className="bg-green-400 text-black mt-1">
            <h1>Forgot Password?</h1>
          </div>
          <button className="bg-blue-500 rounded-2xl w-50 h-9 mt-4">LOGIN</button>
      

      </div>
    </div>
  );
}

import { CircleArrowLeft } from "lucide-react";
import { CircleArrowRight } from "lucide-react";
import { CircleChevronLeft } from "lucide-react";
import Image from "next/image";



export default function Home() {
    return (
        <div className="bg-white w-screen relative flex flex-col  h-screen">
            <div className="bg-red-500 w-10 h-10 absolute ml-3 items-center flex justify-center rounded-full mt-4">
                <CircleArrowLeft className="text-black"></CircleArrowLeft>


            </div>
            <div className=" ">
                <Image
                    width={297}
                    height={100}
                    src={"/cm.jpg"}
                />
            </div>



            <div className="  w-74 -mt-6 rounded-t-2xl ">
                <div className=" items-center ml-2   flex ">
                    <Image
                        width={20}
                        height={10}
                        src={"/3.jpg"}
                        className="h-5  mt-3 rounded-full"
                    />
                    <span className="text-gray-400 ml-1.5 mt-3 text-xs">FSW Donald</span>
                </div>
                <div className="text-black ml-2 font-bold">
                    <h1>McOferta Media Big Mac Duplo</h1>
                </div>
                <div className="text-black   justify-between me-5 flex ml-2 mt-4 font-bold">
                    <h1>R$ 39,90</h1>
                    <div className="  flex">
                        <CircleArrowLeft className="rounded-full hover:bg-yellow-400"></CircleArrowLeft>
                        <h1 className="ml-1 text-xx items-center flex">1</h1>
                        <CircleArrowRight className="ml-1 rounded-full hover:bg-yellow-400 "></CircleArrowRight>
                    </div>
                </div>
            </div>
            <div className=" text-black font-bold text-xs mt-1 ml-2">
                <h1>Sobre</h1>
            </div>
            <div className="  text-xs text-gray-400 mt-2  font-bold ml-2">
                <p>Quatro hamburgues (100% carne bovina),</p>
                <p>alface americana queijo fatiado sabor  cheddar.</p>
                <p>molho especial, cebola, picles e pão com</p>
                <p>gergim acompanhamento e bebida</p>
            </div>

            <div className=" text-black text-xs font-bold mt-2 ml-3">
                <h1>Ingredientes</h1>
            </div>
            <div className="  text-xs text-gray-400 mt-1 font-bold ml-3">
                <p className="mt-0.5">• Quatro hamburgues de carne bovina 100%</p>
                <p className="mt-0.5">• Alface americana</p>
                <p className="mt-0.5">• Queijo processado sabor cheddar</p>
                <p className="mt-0.5">• Molho especial</p>
                <p className="mt-0.5">• Cebola</p>
                <p className="mt-0.5">• Picles</p>
            </div>
            <button className="bg-amber-400 font-bold text-xx w-70 h-10 rounded-2xl hover:bg-red-600 ml-2 mt-2">
                Adicionar á Sacola
            </button>









        </div>
    );
}



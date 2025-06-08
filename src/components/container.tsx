import Checkview from "./checkview";
import Quiz from "./quiz";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft,ChevronRight } from 'lucide-react';

function Container() {
  const location = useLocation();
  const { moduleData } = location.state || {}; // Obtener las preguntas desde el estado de la ubicación
  console.log(moduleData);
  return (
    <div className="max-w-3xl  mx-auto p-4 bg-white shadow-md rounded-lg space-y-2">
      <div className=" p-2 ">
        <h2 className="text-lg font-bold mb-4">{moduleData.subtitle}</h2>
        <div className="flex items-center text-muted-foreground text-xs space-x-2">
          <span>material</span>
          <span className="mx-1">•</span>
          <span>POWER POINT</span>
          <span className="mx-1 ">•</span>
          <div className="">
            <Checkview />
          </div>
        </div>
        <div className="h-[1px] bg-gray-200 w-full my-6" />
      </div>
      <Quiz questions={moduleData.questions} />
      <div className="h-[1px] bg-gray-200 mt-16 "></div>
      <div className="flex justify-between items-center mt-8 mb-8">
        <Button variant="secondary" className="bg-white text-blue-600 hover:bg-blue-100 p-6 " ><ChevronLeft /> Anterior</Button>
        <Button variant="secondary" className="bg-white  text-blue-600  hover:bg-blue-100 p-6"> Siguiente <ChevronRight/></Button>
      </div>
    </div>
  );
}

export default Container;

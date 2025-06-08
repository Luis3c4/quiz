import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { File } from "lucide-react";
import { weeklyData } from "../data/questions";
import { useNavigate } from "react-router-dom";
import Checkview from "./checkview";
function Modulos() {
  const navigate = useNavigate();

  return (
    <div className="space-y-4 w-full">
      <Accordion type="single" collapsible className="space-y-4 ">
        {weeklyData.map((data) => (
          <AccordionItem
            key={data.id}
            value={data.id}
            className="border rounded-lg border-gray-200  bg-white shadow-sm"
          >
            <AccordionTrigger className="px-6 py-4 hover:bg-blue-100 border rounded-r-xs border-l-6  border-l-blue-500 flex justify-between items-center">
              <div className="flex flex-col items-start text-left ">
                <h3 className="text-lg font-semibold text-gray-900">
                  {data.title}
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 bg-white">
              {/* tarjeta comun de cada modulo*/}
              <div className="mb-4 flex bg-gray-100 px-4 py-4 justify-between items-center rounded-lg">
                <div className="flex items-center space-x-4">
                  <File className="h-10 w-10 text-gray-500 inline-block mr-3.5" />
                  <div className="space-y-2">
                    <p className="text-muted-foreground">
                      material - POWER POINT
                    </p>
                    <p>{data.subtitle}</p>
                  </div>
                </div>
                <Checkview />
                <div className="flex items-center pr-20 text-muted-foreground text-sm font-medium">
                  <span>Sin fecha limite</span>
                </div>
              </div>
              {/* tarjeta especial para el quiz*/}
              <div className="rounded-lg  overflow-hidden">
                <div className="bg-yellow-50 p-4  border-l-4 border-yellow-500 space-y-4">
                  <div className="flex intems-center justify-between">
                    <h4 className="text-lg font-semibold text-yellow-900 ">
                      ¡Demuestra tu nivel y acumula UTPoints!
                    </h4>
                    <Button
                      className="bg-yellow-600 text-lg"
                      onClick={() =>
                        navigate("/container", {
                          state: { moduleData: data},
                        })
                      }
                    >
                      ¡Empezar!
                    </Button>
                  </div>
                  <p className="text-sm  text-yellow-900">
                    Desafia tus conocimientos con esta divertida actividad
                    basada en los materiales de la semana
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default Modulos;

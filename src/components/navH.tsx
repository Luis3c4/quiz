import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"

function NavH() {
  const navigate = useNavigate();
    const handleModulos = () => {
        navigate("/");
    };
    const handleDesafios = () => {
        navigate("/desafios");
    };
  return (
    <div>
      <div className="flex px-6 content-center pb-4">
        <div className="flex items-center cursor-pointer pr-4">
          <ArrowLeft className="h-4 w-4 text-blue-600" />
          <span className=" text-xs font-bold text-blue-600">
            volver a cursos
          </span>
        </div>
        <div className=" text-gray-600 font-bold border-l-1 border-black">
          <span className="px-2 text-[13px]">
            Desarrollo Web Integrado- Sección 22851
          </span>
        </div>
        <div>
          <span className="text-xs text-white font-semibold px-3 py-1 rounded-full bg-amber-700">
            Presensial
          </span>
        </div>
      </div>
      <div className="text-gray-700 pb-1 border-b-1 border-gray-500 mb-8">
        <Button variant="ghost" className="font-bold ">
          Silabo
        </Button>
        <Button
          variant="ghost"
          className="font-bold border-b-3 border-blue-600 rounded-b-none"
          onClick={handleModulos}
        >
          Contenido
        </Button>
        <Button variant="ghost" className="font-bold">
          Evaluaciones
        </Button>
        <Button variant="ghost" className="font-bold">
          Tarea
        </Button>
        <Button variant="ghost" className="font-bold">
          Foros
        </Button>
        <Button variant="ghost" className="font-bold">
          Notas
        </Button>
        <Button variant="ghost" className="font-bold">
          Anuncios
        </Button>
        <Button variant="ghost" className="font-bold">
          Zoon
        </Button>
        <Button variant="ghost" className="font-bold" onClick={handleDesafios}>
          Desafios
        </Button>
      </div>
    </div>
  );
}

export default NavH;

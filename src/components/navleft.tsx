import { Menu, Book, MessageCircle, Calendar, CircleHelp} from "lucide-react";
function Navleaf() {
  return (
    <div className="bg-[#000f37] flex h-screen w-22 flex-col items-center sticky top-0">
      <div className="w-full h-22 flex justify-center items-center">
        <Menu className="w-8 h-7 text-white " />
      </div>
      <div className=" flex justify-between flex-col items-center h-screen w-full">
        <div className="w-full flex flex-col items-center">
          <div className="w-full flex justify-center items-center flex-col h-20 bg-blue-50 border-l-4 border-red-400">
            <Book className="w-6 h-6 text-black mb-2 " />
            <span className="text-black text-xs">Cursos</span>
          </div>
          <div className="w-full flex justify-center items-center flex-col h-20 ">
            <MessageCircle className="w-6 h-6 text-white mb-2 " />
            <span className="text-white text-xs">Chat</span>
          </div>
          <div className="w-full flex justify-center items-center flex-col h-20 ">
            <Calendar className="w-6 h-6 text-white mb-2 " />
            <span className="text-white text-xs">Calendario</span>
          </div>
          <div className="w-full flex justify-center items-center flex-col h-20 ">
            <CircleHelp className="w-6 h-6 text-white mb-2 " />
            <span className="text-white text-xs">Ayuda</span>
          </div>
        </div>

        <div className="pb-6 space-y-4 w-full border-t border-white pt-6" >
          <div className="w-full flex justify-center items-center flex-col h-20 ">
            <CircleHelp className="w-6 h-6 text-white mb-2 " />
            <span className="text-white text-xs">Correo </span>
            <span className="text-white text-xs">UTP </span>
          </div>
          <div className="w-full flex justify-center items-center flex-col h-20 ">
            <CircleHelp className="w-6 h-6 text-white mb-2 " />
            <span className="text-white text-xs">UTP+biblio</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navleaf;

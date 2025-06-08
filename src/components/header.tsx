import { Bell, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import client from "../db/tursoClient";
interface Usuario {
  usuario: string;
  puntos: number;
}
interface DatosUsuario {
  nombre: string;
  puntos: number;
  progress: number;
  logros: string[];
}
function Header() {
  const [datosUsuario, setDatosUsuario] = useState<DatosUsuario>({
    nombre: "",
    puntos: 0,
    progress: 0,
    logros: [],
  });
  const [rankingUsuarios, setRankingUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    const obtenerRanking = async () => {
      try {
        const res = await client.execute(
          "SELECT usuario, puntos FROM ranking ORDER BY puntos DESC LIMIT 10"
        );

        const ranking = res.rows.map((row: any) => ({
          usuario: row.usuario,
          puntos: row.puntos,
        }));
        console.log("RANKING", ranking);
        setRankingUsuarios(ranking);
      } catch (error) {
        console.error("Error al obtener datos del RANKING:", error);
      }
    };

    obtenerRanking();
  }, []);

  useEffect(() => {
    const fetchDatos = async () => {
      try {
        const res = await client.execute(
          "SELECT usuario, puntos FROM ranking WHERE id = ?",
          ["u005"]
        );
        const usuario = res.rows[0] as unknown as Usuario;
        if (usuario) {
          setDatosUsuario({
            nombre: usuario.usuario,
            puntos: usuario.puntos,
            progress: Math.min((usuario.puntos / 100) * 100, 100),
            logros: ["Completaste 3 semanas", "Respondiste 5 preguntas"],
          });
        }
      } catch (error) {
        console.error("Error al obtener datos del usuario:", error);
      }
    };

    fetchDatos();
  }, []);
  return (
    <div className="flex items-center justify-center h-[80px] bg-white px-4 w-full">
      <div className="flex justify-between items-center w-full mx-8">
        <img src="/img/logo.svg" alt="" />
        <div className="flex intems-center">
          <div className="pr-3.5">
            <NavigationMenu className="w-full">
              <NavigationMenuList className="flex items-center">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-amber-400">
                    ⭐ UTPoints
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="">
                    <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <div className="mt-4 mb-2 text-lg font-medium">
                          ⭐ Mis UTPoints
                        </div>
                        <p className=" text-sm leading-tight">🏅 Logros:.</p>
                        {datosUsuario.logros.map((logro, index) => (
                          <p
                            className="text-muted-foreground text-sm leading-tight"
                            key={index}
                          >
                            {logro}
                          </p>
                        ))}
                      </li>
                      <div>
                        <span> 👤 Alumno: </span>
                        <span className="text-muted-foreground">
                          {datosUsuario.nombre}
                        </span>
                      </div>
                      <div>
                        <span> 💰 Puntos totales: </span>
                        <span className="text-muted-foreground">
                          {datosUsuario.puntos}
                        </span>
                      </div>
                      <div>
                        <span> 📈 Progreso semanal </span>
                        <span className="text-muted-foreground">
                          {Math.round(datosUsuario.progress)}%
                        </span>
                      </div>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="pr-3.5">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Ver Rankig</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <div className="mb-4">🏆 Ranking Semanal</div>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {rankingUsuarios.map((usuario, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-2">
                          <span>
                            {index === 0
                              ? "🥇"
                              : index === 1
                              ? "🥈"
                              : index === 2
                              ? "🥉"
                              : "🎖️"}{" "}
                            {usuario.usuario}
                          </span>
                          <span>{usuario.puntos} puntos</span>
                        </div>
                        <Progress value={80} className="h-2 mb-2 " />
                      </div>
                    ))}

                    
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>

          <div className="flex items-center justify-center border-r-1 border-black pr-3.5 ">
            <Bell className="h-6" />
          </div>
          <div className="pr-2">
            <div className="flex flex-row pl-4 ">
              <span className="text-sm">Hola,</span>
              <span className=" text-sm font-bold">Luis Enrique</span>
            </div>
            <div className="flex flex-row-reverse">
              <span className="text-muted-foreground text-xs ">Estudiante</span>
            </div>
          </div>
          <div className="px-2">
            <div className="w-10 h-10">
              <img src="/img/student.svg" />
            </div>
          </div>
          <div className="flex items-center justify-center w-10 h-10 cursor-pointer">
            <ChevronDown />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

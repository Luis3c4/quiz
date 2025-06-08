import { Bell, ChevronDown } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
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
function Header() {
  return (
    <div className="flex items-center justify-center h-[80px] bg-white px-4 w-full">
      <div className="flex justify-between items-center w-full mx-8">
        <img src="/img/logo.svg" alt="" />
        <div className="flex intems-center">
          <div className="pr-3.5">
            <NavigationMenu className="w-full">
              <NavigationMenuList className="flex items-center">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-amber-400">⭐ UTPoints</NavigationMenuTrigger>
                  <NavigationMenuContent className="">
                    <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <div className="mt-4 mb-2 text-lg font-medium">
                          ⭐ Mis UTPoints
                        </div>
                        <p className=" text-sm leading-tight">🏅 Logros:.</p>
                        <p className="text-muted-foreground text-sm leading-tight">
                          Completaste 3 semanas
                        </p>
                        <p className="text-muted-foreground text-sm leading-tight">
                          Respondio 5 preguntas
                        </p>
                      </li>
                      <div>
                        <span> 👤 Alumno: </span>
                        <span className="text-muted-foreground">
                          Juan Perez
                        </span>
                      </div>
                      <div>
                        <span> 💰 Puntos totales: </span>
                        <span className="text-muted-foreground">6 pts</span>
                      </div>
                      <div>
                        <span> 📈 Progreso semanal </span>
                        <span className="text-muted-foreground">5/10</span>
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
                    <div className="flex justify-between items-center mb-2">
                      <span>🥇 Lucia</span>
                      <span>180 puntos</span>
                    </div>
                    <Progress value={80} className="h-2 mb-2 " />
                    <div className="flex justify-between items-center mb-2">
                      <span>🥈 Ana</span>
                      <span>150 puntos</span>
                    </div>
                    <Progress value={60} className="h-2 mb-2 " />
                    <div className="flex justify-between items-center mb-2">
                      <span>🥉 Marjhorick</span>
                      <span>120 puntos</span>
                    </div>
                    <Progress value={40} className="h-2 mb-2 " />
                    <div className="flex justify-between items-center mb-2">
                      <span>🎖️ Carlos</span>
                      <span>90 puntos</span>
                    </div>
                    <Progress value={20} className="h-2  mb-2" />
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

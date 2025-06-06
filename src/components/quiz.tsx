import { useState, useEffect } from "react";
import "../app.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@radix-ui/react-label";
import { CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const questions = [
  {
    id: 1,
    question: "¿Cuál es la capital de Francia?",
    options: [
      { id: "a", text: "Paris" },
      { id: "b", text: "Londres" },
      { id: "c", text: "Berlín" },
      { id: "d", text: "Madrid" },
    ],
    correctAnswer: "a",
  },
  {
    id: 2,
    question: "¿En qué año comenzó la Segunda Guerra Mundial?",
    options: [
      { id: "a", text: "1939" },
      { id: "b", text: "1941" },
      { id: "c", text: "1945" },
      { id: "d", text: "1938" },
    ],
    correctAnswer: "a",
  },
  {
    id: 3,
    question: "¿Cuál es el planeta más grande del sistema solar?",
    options: [
      { id: "a", text: "Tierra" },
      { id: "b", text: "Marte" },
      { id: "c", text: "Júpiter" },
      { id: "d", text: "Saturno" },
    ],
    correctAnswer: "c",
  },
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [answered, setAnswered] = useState(false);
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeaft] = useState(15);
  const [timeExpired, setTimeExpired] = useState(false);
  const timeQ = 15; // tiempo para cada pregunta
  const currentQ = questions[currentQuestion];

  useEffect(() => {
    if (answered || finished)
      return console.log("ya respondio o finalizo el quiz");
    const timer = setInterval(() => {
      setTimeLeaft((prev) => {
        if (prev <= 1) {
          setTimeExpired(true);
          clearInterval(timer);
          setAnswered(true);
          setSelectedOption(currentQ.correctAnswer);
          return 0;
        }
        console.log(prev);
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [answered, currentQuestion, finished]);

  const handleSubmit = () => {
    if (!selectedOption) return;
    setAnswered(true);
    if (selectedOption === currentQ.correctAnswer) {
      setScore(score + 1);
    }
  };
  const handleNext = () => {
    const next = currentQuestion + 1;
    if (next < questions.length) {
      setCurrentQuestion(next);
      setAnswered(false);
      setSelectedOption("");
      setTimeExpired(false); // Reiniciar el estado de tiempo agotado
      setTimeLeaft(timeQ); // Reiniciar el tiempo para la siguiente pregunta
    } else {
      setFinished(true);
    }
  };
  const handleRestart = () => {
    setTimeLeaft(timeQ);
    setCurrentQuestion(0);
    setSelectedOption("");
    setAnswered(false);
    setFinished(false);
    setScore(0);
  };

  if (finished) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl"> Quiz finalizado</CardTitle>
          <CardDescription>Has completado el quiz</CardDescription>
        </CardHeader>
        <CardContent className="text-center py-6">
          <div className="text-4xl font-bold mb-4">
            {score} / {questions.length}
          </div>
          <p className="text-muted-foreground">
            Respondiste <strong>{score}</strong> de{" "}
            <strong>{questions.length}</strong> preguntas correctamente
          </p>
          <p className="text-muted-foreground">
            puntaje:{" "}
            <strong>{Math.round((score / questions.length) * 100)}%</strong>
          </p>
          <Button className="w-full mt-4" onClick={handleRestart}>
            Reiniciar Quiz
          </Button>
        </CardContent>
      </Card>
    );
  }
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between ">
          <CardTitle className="text-2xl">
            Pregunta {currentQuestion + 1}
          </CardTitle>
          <span className="text-sm text-muted-foreground">
            {currentQuestion + 1} de {questions.length}
          </span>
        </div>
        <CardDescription>seleciona la respuesta correcta</CardDescription>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">tiempo restante</span>
            <span className={`text-sm font-bold ${
                timeLeft <= 5 ? "text-red-500" : "text-gray-600"
              }`}
            >
              {timeLeft}s
            </span>
          </div>
          <Progress
            value={(timeLeft / timeQ) * 100}
            className={`h-2 ${timeLeft <= 5 ? "bg-red-100" : ""}`}
          />
          {timeExpired && (
            <div className="text-red-500 text-sm bg-red-50 p-2 rounded">
              ⏰Tiempo agotado. Se ha seleccionado la respuesta correcta
              automáticamente.
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="text-xl font-medium ">{currentQ.question}</div>
          <RadioGroup
            value={selectedOption}
            onValueChange={setSelectedOption}
            className="space-y-2"
            disabled={answered}
          >
            {currentQ.options.map((option) => (
              <div
                key={option.id}
                className={`flex items-center space-x-2 rounded-lg border p-4 transition-colors
                {/* color para cada casilla que selecione */}
                ${
                  !answered && selectedOption === option.id ? "bg-gray-100" : ""
                }
                {/* color para la respuesta correcta */}
                ${
                  answered && option.id === currentQ.correctAnswer
                    ? "bg-green-50 border-green-200"
                    : ""
                }
                {/* color para la respuesta incorrecta */}
                ${
                  answered &&
                  option.id === selectedOption &&
                  option.id !== currentQ.correctAnswer
                    ? "bg-red-50 border-red-200"
                    : ""
                }
              `}
              >
                <RadioGroupItem value={option.id} id={`option-${option.id}`} />
                <Label
                  htmlFor={`option-${option.id}`}
                  className="cursor-pointer flex-grow"
                >
                  {option.text}
                </Label>
                {answered && option.id === currentQ.correctAnswer && (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                )}
                {answered &&
                  option.id === selectedOption &&
                  option.id !== currentQ.correctAnswer && (
                    <XCircle className="h-5 w-5 text-red-500" />
                  )}
              </div>
            ))}
          </RadioGroup>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        {!answered ? (
          <Button
            className="w-full"
            onClick={handleSubmit}
            disabled={!selectedOption}
          >
            verificar
          </Button>
        ) : (
          <>
            <p className="w-full text-center text-sm text-muted-foreground">
              {selectedOption === currentQ.correctAnswer
                ? "¡Correcto!"
                : "Respuesta incorrecta."}
            </p>
            <Button className="w-full" onClick={handleNext}>
              Siguiente
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
}
export default Quiz;

import { useState } from "react";
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
    correctAnswer: "b",
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
  const currentQ = questions[currentQuestion];

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
    } else {
      setFinished(true);
    }
  };
  const handleRestart = () => {
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
        <CardTitle className="text-2xl">
          Pregunta {currentQuestion + 1}
        </CardTitle>
        <CardDescription>seleciona la respuesta correcta</CardDescription>
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

import { useState } from "react";
import "./app.css";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@radix-ui/react-label";

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
    correctAnswer: "b"
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [answered, setAnswered] = useState(false);
  const currentQ = questions[currentQuestion];

  return (
    <Card className="w-full max-w-xl mx-auto mt-10">
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
              <div key={option.id} className= {`flex items-center space-x-2 rounded-lg border p-4 transition-colors
                ${!answered && selectedOption === option.id ? "bg-gray-100": ""}
              `}>
                <RadioGroupItem value={option.id} id={`option-${option.id}`} />
                <Label htmlFor={`option-${option.id}`} className="cursor-pointer">
                  {option.text}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground">selecionaste: <strong>{selectedOption || "ninguna"}</strong></p>
      </CardFooter>
    </Card>
  );
}
[];
export default App;

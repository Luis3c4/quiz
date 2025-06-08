export interface Option {
  id: string;
  text: string;
}
export interface Questions {
  id: number;
  question: string;
  options: Option[];
  correctAnswer: string;
}

export interface WeeklyQuestion {
  id: string;
  title: string;
  subtitle: string;
  questions: Questions[];
}

export const weeklyData: WeeklyQuestion[] = [
  {
    id: "week-1",
    title: "Semana 01",
    subtitle: "S01.s1 -Lean Canvas",
    questions: [
      {
        id: 1,
        question: "¿Cuál es la capital de Francia?",
        options: [
          { id: "a", text: "Londres" },
          { id: "b", text: "Paris" },
          { id: "c", text: "Madrid" },
          { id: "d", text: "Roma" },
        ],
        correctAnswer: "b",
      },
      {
        id: 2,
        question: "¿Cuántos continentes hay en el mundo?",
        options: [
          { id: "a", text: "5" },
          { id: "b", text: "6" },
          { id: "c", text: "7" },
          { id: "d", text: "8" },
        ],
        correctAnswer: "c",
      },
    ],
  },
  {
    id: "week-2",
    title: "Semana 02",
    subtitle: "S02.s1 -Material",
    questions: [
      {
        id: 1,
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
        id: 2,
        question: "¿Quién escribió 'Don Quijote de la Mancha'?",
        options: [
          { id: "a", text: "Miguel de Cervantes" },
          { id: "b", text: "Federico García Lorca" },
          { id: "c", text: "Pablo Neruda" },
          { id: "d", text: "Gabriel García Márquez" },
        ],
        correctAnswer: "a",
      },
    ],
  },
  {
    id: "week-3",
    title: "Semana 03",
    subtitle: "S03.s1 -Material",
    questions: [
      {
        id: 1,
        question: "¿Cuál es el planeta más grande del sistema solar?",
        options: [
          { id: "a", text: "Tierra" },
          { id: "b", text: "Marte" },
          { id: "c", text: "Júpiter" },
          { id: "d", text: "Saturno" },
        ],
        correctAnswer: "c",
      },
      {
        id: 2,
        question: "¿Cuál es la fórmula química del agua?",
        options: [
          { id: "a", text: "H2O" },
          { id: "b", text: "CO2" },
          { id: "c", text: "NaCl" },
          { id: "d", text: "O2" },
        ],
        correctAnswer: "a",
      },
    ],
  },
  {
    id: "week-4",
    title: "Semana 04",
    subtitle: "S04.s1 -Material",
    questions: [
      {
        id: 1,
        question: "¿Cuál es el océano más grande del mundo?",
        options: [
          { id: "a", text: "Atlántico" },
          { id: "b", text: "Índico" },
          { id: "c", text: "Pacífico" },
          { id: "d", text: "Ártico" },
        ],
        correctAnswer: "c",
      },
      {
        id: 2,
        question: "¿En qué país se encuentra Machu Picchu?",
        options: [
          { id: "a", text: "Chile" },
          { id: "b", text: "Perú" },
          { id: "c", text: "Bolivia" },
          { id: "d", text: "Ecuador" },
        ],
        correctAnswer: "b",
      },
    ],
  },
];

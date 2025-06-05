import Quiz from "@/components/quiz"

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4  bg-gray-50">
      <div className="w-full max-w-2xl">
        <Quiz />
      </div>
    </main>
  )
}
import { CheckCircle } from "lucide-react";

function Checkview() {
  return (
    <div className="flex items-center space-x-1 rounded-full bg-green-200 px-3 py-2 text-green-800 font-medium">
      <CheckCircle className="h-4 w-4" />
      <span className=""> Revisado </span>
    </div>
  );
}

export default Checkview;

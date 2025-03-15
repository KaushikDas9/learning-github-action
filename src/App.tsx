import { useCalculateDaysLeftInThatYear } from "./Hooks/useCalculateDaysLeft/useCalculateDaysLeftInThatYear";

export function App() {

  const daysLeft = useCalculateDaysLeftInThatYear();

  return <div className="flex items-center justify-center">{daysLeft}</div>;
}


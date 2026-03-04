import { useState } from "react";
import "./index.css";
import Companies from "./components/ui/companies";
import Login from "./components/auth/login";
export default function App() {
  const [session, setSession] = useState<string | null>("skdjksd");
  return (
    <main className="flex  flex-col items-center w-screen min-h-screen gap-4">
      {session ? <Companies setSession={setSession} /> : <Login />}
    </main>
  );
}

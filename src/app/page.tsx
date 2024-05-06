import { FcLock } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

export default function Home() {
  return (
    <main className="font-roboto text-white flex items-center space-y-6 justify-center h-full flex-col bg-gradient-to-b from-slate-800 via-blue-500  to-blue-900">
      <div className="flex items-center text-6xl">
        <FcLock />
        <h1> AUTH</h1>
      </div>
      <p className="text-lg">a single authentication service</p>

      <LoginButton>
        <Button variant={"secondary"}>Sign in</Button>
      </LoginButton>
    </main>
  );
}

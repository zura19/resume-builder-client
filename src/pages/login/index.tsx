import { useEffect, useState } from "react";
import LoginForm from "./modules/LoginForm";
import AuthTemplate from "@/components/shared/AuthTemplate";
const api = import.meta.env.VITE_API_URL;

export default function Login() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function getHello() {
      const res = await fetch(`${api}`);
      const data = await res.json();
      setMessage(data.message);
    }

    getHello();
  }, []);

  return (
    <div className="space-y-12 flex w-full items-center justify-center h-full">
      <AuthTemplate templateFor="login">
        <LoginForm />
        <p>{message}</p>
      </AuthTemplate>
    </div>
  );
}

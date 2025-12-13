import AuthTemplate from "@/components/shared/AuthTemplate";
import SignupForm from "./modules/SignupForm";

export default function Signup() {
  return (
    <div className="space-y-12 flex w-full items-center justify-center h-full">
      <AuthTemplate templateFor="register">
        <SignupForm />
      </AuthTemplate>
    </div>
  );
}

import FormButton from "@/components/shared/FormButton";
import FormInput from "@/components/shared/FormInput";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
// import { motion } from "framer-motion";
import AnimationProvider from "@/components/shared/AnimationProvider";
import { loginSchema, type LoginSchema } from "@/lib/schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function LoginForm() {
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(vals: LoginSchema) {
    console.log(vals);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-5 max-w-[60%] mx-auto"
      >
        <AnimationProvider duration={0.7} initX={0}>
          <FormInput
            placeholder="example@ex.com"
            name="email"
            control={form.control}
            className="h-12"
          />
        </AnimationProvider>

        <AnimationProvider duration={0.7} initX={0} delay={0.15}>
          <FormInput
            placeholder="Password"
            name="password"
            control={form.control}
            type="password"
            className="h-12"
          />
        </AnimationProvider>

        <AnimationProvider duration={0.7} initX={0} delay={0.25}>
          <FormButton
            className="w-full h-12 font-medium text-lg"
            loading={false}
            type="submit"
          >
            Log in
          </FormButton>
        </AnimationProvider>
      </form>
    </Form>
  );
}

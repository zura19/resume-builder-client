import { Form } from "@/components/ui/form";
import StepHeading from "../components/StepHeading";
import { useForm } from "react-hook-form";
import FormInput from "@/components/shared/FormInput";
import StepFooter from "./StepFooter";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  personalInfoSchema,
  type PersonalInfo,
} from "@/lib/schemas/personalInfoSchema";
import useBuildResume from "@/lib/store/buildResumeState";

export default function PersonalInfoStep() {
  const { nextStep } = useBuildResume();
  const form = useForm<PersonalInfo>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
    },
  });

  async function onSubmit(vals: PersonalInfo) {
    console.log(vals);
    nextStep();
  }

  return (
    <StepHeading
      heading="Personal Info"
      description="Please provide your personal name, email, and phone number."
    >
      <Form {...form}>
        <form
          className="space-y-6 flex flex-col "
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormInput
            label="Full Name"
            placeholder="John Doe"
            name="fullName"
            control={form.control}
          />
          <FormInput
            label="Email Address"
            placeholder="example@ex.com"
            name="email"
            control={form.control}
          />

          <FormInput
            label="Phone Number"
            placeholder="123-456-7890"
            name="phone"
            control={form.control}
          />

          <FormInput
            label="Address"
            placeholder="123 Main St"
            name="address"
            control={form.control}
          />

          <div className="">
            <StepFooter />
          </div>
        </form>
      </Form>
    </StepHeading>
  );
}

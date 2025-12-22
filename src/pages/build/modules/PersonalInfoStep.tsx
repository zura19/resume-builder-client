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
  const { nextStep, handlePersonalInfo, data } = useBuildResume();
  const form = useForm<PersonalInfo>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      fullName: data.personalInfo.fullName || "",
      email: data.personalInfo.email || "",
      phone: data.personalInfo.phone || "",
      address: data.personalInfo.address || "",
    },
  });

  async function onSubmit(vals: PersonalInfo) {
    console.log(vals);
    handlePersonalInfo(vals);
    nextStep();
  }

  return (
    <StepHeading
      heading="Personal Info"
      description="Please provide your personal name, email, and phone number."
    >
      <Form {...form}>
        <form
          className="space-y-6 flex flex-col"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className=" space-y-6 h-[415px] overflow-y-scroll px-1">
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
          </div>

          <div className="mt-auto py-2">
            <StepFooter />
          </div>
        </form>
      </Form>
    </StepHeading>
  );
}

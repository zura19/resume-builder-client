import type { SignupSchema } from "@/lib/schemas/signupSchema";
import { API, postHeaders } from "../helpers";
import type { PromiseResponseSuccess } from "@/lib/types/requestResponseTypes";
import type { User } from "@/lib/types/User";
import { toast } from "sonner";

export async function registerService(
  body: SignupSchema
): PromiseResponseSuccess<{ user: User }> {
  try {
    const res = await fetch(`${API}/auth/register`, {
      ...postHeaders,
      body: JSON.stringify({
        ...body,
        fullName: undefined,
        firstName: body.fullName.split(" ")[0],
        lastName: body.fullName.split(" ")[1],
      }),
    });

    if (!res.ok) {
      const error = await res.json();
      toast.error(error.message || "Failed to register");
      throw new Error(error.message || "Failed to create resume");
    }

    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

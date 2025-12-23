import { API, postHeadersCredentials } from "../helpers";
import type { PromiseResponseSuccess } from "@/lib/types/requestResponseTypes";
import { toast } from "sonner";

export async function logOutService(): PromiseResponseSuccess<null> {
  try {
    const res = await fetch(`${API}/auth/logout`, {
      ...postHeadersCredentials,
    });

    if (!res.ok) {
      const error = await res.json();
      toast.error(error.message || "Failed to log out");
      throw new Error(error.message || "Failed to log out");
    }

    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

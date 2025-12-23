import type { PromiseResponseSuccess } from "@/lib/types/requestResponseTypes";
import { API, postHeadersCredentials } from "../helpers";

export async function generateResponsibilitieService(data: {
  company: string;
  position: string;
  responsibilities: string[];
}): PromiseResponseSuccess<{ responsibilitie: string }> {
  try {
    const res = await fetch(`${API}/resume/generate/responsibilitie`, {
      ...postHeadersCredentials,
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || "Failed to update resume");
    }

    const generatedResponsibilitie = await res.json();
    console.log(
      "generated Responsibilitie from service:",
      generatedResponsibilitie
    );
    return generatedResponsibilitie;
  } catch (error) {
    console.error("Error updating resume:", error);
    throw error;
  }
}

import { API, getCredentials } from "@/lib/services/helpers";
import type { PromiseResponseSuccess } from "@/lib/types/requestResponseTypes";

export async function getResumeByIdService(id: string): PromiseResponseSuccess<{
  id: string;
  generatedResume: string;
  createdAt: string;
  updatedAt: string;
}> {
  try {
    const res = await fetch(`${API}/resume/${id}`, {
      ...getCredentials,
    });

    if (!res.ok) {
      const error = await res.json();
      console.log(error);
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

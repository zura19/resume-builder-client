import type { Resume } from "@/lib/types/buildResumeTypes";
import { API, postHeaders } from "@/lib/services/helpers";

export async function createResumeService(body: Resume) {
  try {
    const res = await fetch(`${API}/resume`, {
      ...postHeaders,
      body: JSON.stringify(body),
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

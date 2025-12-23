import type { Resume } from "@/lib/types/buildResumeTypes";
import { API, postHeadersCredentials } from "@/lib/services/helpers";
import type { PromiseResponseSuccess } from "@/lib/types/requestResponseTypes";
// import type { PromiseResponseSuccess } from "@/lib/types/requestResponseTypes";

export async function createResumeService(
  body: Resume
): PromiseResponseSuccess<{ resumeId: string }> {
  try {
    const res = await fetch(`${API}/resume`, {
      ...postHeadersCredentials,
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

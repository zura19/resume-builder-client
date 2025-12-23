import type { PromiseResponseSuccess } from "@/lib/types/requestResponseTypes";
import { API, postHeadersCredentials } from "../helpers";

export async function generateFeatureService(data: {
  title: string;
  technologies: string[];
  features: string[];
}): PromiseResponseSuccess<{ feature: string }> {
  try {
    const res = await fetch(`${API}/resume/generate/feature`, {
      ...postHeadersCredentials,
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || "Failed to update resume");
    }

    const generatedFeature = await res.json();
    console.log("generatedFeature from service:", generatedFeature);
    return generatedFeature;
  } catch (error) {
    console.error("Error updating resume:", error);
    throw error;
  }
}

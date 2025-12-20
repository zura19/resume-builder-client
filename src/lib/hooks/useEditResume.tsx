import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AiGeneratedResume } from "../types/AiGeneratedResume";

export default function useEditResume(id: string) {
  const queryClient = useQueryClient();
  const { mutateAsync: editResume, isPending } = useMutation({
    mutationFn: async (data: AiGeneratedResume) => {
      console.log(data);
      // API call to edit resume details
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["resume", id],
      });
    },
    onError: (error) => {
      alert(error.message);
    },
  });

  return { editResume, isPending };
}

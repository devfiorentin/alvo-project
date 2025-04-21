import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export function useAlvoDataDelete() {
  const mutation = useMutation({
    mutationFn: (id: string) => {
      return axios.delete(`http://localhost:8080/alvos/${id}`);
    },
  });

  return mutation;
}

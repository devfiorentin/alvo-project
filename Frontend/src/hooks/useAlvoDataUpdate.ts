import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { AlvoData } from "../interface/AlvoData";

export function useAlvoDataUpdate() {
  const mutation = useMutation({
    mutationFn: (data: AlvoData) => {
      return axios.put(`http://localhost:8080/alvos/${data.id}`, data);

    },
  });

  return mutation;
}

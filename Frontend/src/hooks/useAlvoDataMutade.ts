import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { AlvoData } from "../interface/AlvoData";

const API_URL = "http://localhost:8080";

const postData = async (data: AlvoData): AxiosPromise<any> => {
  const response = axios.post(API_URL + "/alvos", data);
  return response;
};

export function useAlvoDataMutate() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: postData,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["alvo-data"] });
    },
  });

  return {
    mutate: mutation.mutate,
    isSuccess: mutation.isSuccess,
    isLoading: mutation.isPending,
  };
}

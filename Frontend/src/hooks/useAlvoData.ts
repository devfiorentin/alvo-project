import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { AlvoData } from "../interface/AlvoData";

const API_URL = "http://localhost:8080";

const fetchData = async (): AxiosPromise<AlvoData[]> => {
  const response = axios.get(API_URL + "/alvos");
  return response;
};

export function useAlvoData() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ["alvo-data"],
    retry: 2,
  });

  return {
    ...query,
    data: query.data?.data,
  };
}

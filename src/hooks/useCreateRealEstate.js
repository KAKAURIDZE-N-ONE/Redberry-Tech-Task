import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createRealEstate } from "../services/apiRealEstates";
import { useNavigate } from "react-router-dom";

export const useCreateRealEstate = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: createRealEstate,
    onSuccess: () => {
      queryClient.invalidateQueries(["real-estates"]);
      navigate("/");
    },
  });
};

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAgent } from "../services/apiAgents";
import { useDispatch } from "react-redux";
import { updateAgentModalIsOpen } from "../slices/agentSlice";

export const useCreateAgent = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createAgent,
    onSuccess: () => {
      queryClient.invalidateQueries(["agents"]);
      dispatch(updateAgentModalIsOpen(false));
    },
  });
};

import { useLocation } from "react-router-dom";

export const useGetActiveFilterValues = (field) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const options = queryParams.get(field);
  const optionsArray = options ? options.split(",") : [];
  return optionsArray;
};

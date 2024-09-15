import { useLocation, useNavigate } from "react-router-dom";

export function useUpdateFiltersInURL(newFilterField, newFilterValue) {
  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search);

  const existingFilterValue = query.getAll(newFilterField);

  if (!existingFilterValue.length) {
    query.append(newFilterField, newFilterValue);
  }

  navigate(`?${query.toString()}`);
}

import { useLocation, useNavigate } from "react-router-dom";

export function useUpdateFiltersInUrl() {
  const location = useLocation();
  const navigate = useNavigate();

  return function (newFilterField, newFilterValues) {
    const query = new URLSearchParams(location.search);

    // const existingFilterValues = query.get(newFilterField)?.split(",") || [];

    if (newFilterValues.length > 0)
      query.set(newFilterField, newFilterValues.join(","));
    else query.delete(newFilterField);

    navigate(`?${query.toString()}`);
  };
}

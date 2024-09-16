import { useLocation, useNavigate } from "react-router-dom";

export const useRemoveFilterValue = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return function (field, value) {
    const query = new URLSearchParams(location.search);

    const options = query.get(field);
    const optionsArray = options ? options.split(",") : [];
    const filteredArray = optionsArray.filter((el) => el !== value);
    if (filteredArray.length > 0) query.set(field, filteredArray.join(","));
    else query.delete(field);
    navigate(`?${query.toString()}`);
  };
};

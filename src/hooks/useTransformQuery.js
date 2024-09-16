import { useMemo } from "react";
import { useLocation } from "react-router-dom";

function useTransformQuery() {
  const { search } = useLocation();

  const choosedFilters = useMemo(() => {
    const query = new URLSearchParams(search);

    const filters = [];

    // Example: Handling "region" filter
    const regions = query.getAll("regions");
    if (regions.length > 0) {
      filters.push({
        field: "რეგიონი",
        values: regions?.at(0).split(","),
      });
    }

    // Example: Handling "area" filter (with range)
    const areas = query.get("area");
    const [areaFrom, areaTo] = areas ? areas.split("-") : [];
    if (areas) {
      filters.push({
        field: "ფართობი",
        values: [{ from: areaFrom, to: areaTo }],
      });
    }

    // Example: Handling "price" filter (with range)
    const prices = query.get("price");
    const [priceFrom, priceTo] = prices ? prices.split("-") : [];
    if (prices) {
      filters.push({
        field: "საფასო კატეგორია",
        values: [{ from: priceFrom, to: priceTo }],
      });
    }

    // Example: Handling "bedrooms" filter
    const bedrooms = query.getAll("bedrooms");
    if (bedrooms.length > 0) {
      filters.push({
        field: "საძინებლების რაოდენობა",
        values: bedrooms?.at(0)?.split(","),
      });
    }

    return filters;
  }, [search]); // `search` is a dependency here

  return choosedFilters;
}

export default useTransformQuery;

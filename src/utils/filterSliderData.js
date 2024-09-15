export default function (data, regionId, currentRealEstateId) {
  const filteredData = data?.filter(
    (realEstate) =>
      realEstate.city.region_id === regionId &&
      currentRealEstateId !== realEstate.id
  );
  return filteredData;
}

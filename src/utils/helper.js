export function filterRestData(restaurantList, searchText) {
  const filteredData = restaurantList.filter((rest) =>
    rest.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filteredData;
}

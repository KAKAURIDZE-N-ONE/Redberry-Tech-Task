export async function getRegions() {
  try {
    const res = await fetch(
      "https://api.real-estate-manager.redberryinternship.ge/api/regions"
    );
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getCities() {
  try {
    const res = await fetch(
      "https://api.real-estate-manager.redberryinternship.ge/api/cities"
    );
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
}

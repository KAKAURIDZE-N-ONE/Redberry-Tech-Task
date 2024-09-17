const token = "9d072ffa-2860-46a3-bb57-32655cd6a086";

export async function createRealEstate({
  region_id,
  price,
  zipAddress: zip_code,
  area,
  city_id,
  address,
  agent_id,
  roomsQuantity: bedrooms,
  dealType: is_rental,
  avatarFile: image,
  description,
}) {
  const formData = new FormData();
  formData.append("region_id", region_id);
  formData.append("price", price);
  formData.append("zip_code", zip_code);
  formData.append("area", area);
  formData.append("city_id", city_id);
  formData.append("address", address);
  formData.append("agent_id", agent_id);
  formData.append("bedrooms", bedrooms);
  formData.append("is_rental", is_rental);
  formData.append("image", image);
  formData.append("description", description);

  try {
    const res = await fetch(
      "https://api.real-estate-manager.redberryinternship.ge/api/real-estates",
      {
        method: "POST",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      }
    );

    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getRealEstates() {
  try {
    const res = await fetch(
      "https://api.real-estate-manager.redberryinternship.ge/api/real-estates",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getRealEstate(id) {
  try {
    const res = await fetch(
      `https://api.real-estate-manager.redberryinternship.ge/api/real-estates/${id}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function deleteRealEstate(id) {
  console.log(id);
  try {
    const res = await fetch(
      `https://api.real-estate-manager.redberryinternship.ge/api/real-estates/${id}`,
      {
        method: "DELETE",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
}

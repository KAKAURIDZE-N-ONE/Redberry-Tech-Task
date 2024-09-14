const token = "9d009a62-3ec5-4bd6-b69a-d080adf646d8";

export async function getAgents() {
  try {
    const res = await fetch(
      "https://api.real-estate-manager.redberryinternship.ge/api/agents",
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

export async function createAgent({ name, surname, email, phone, avatarFile }) {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("surname", surname);
  formData.append("email", email);
  formData.append("phone", phone);
  formData.append("avatar", avatarFile);

  try {
    const res = await fetch(
      "https://api.real-estate-manager.redberryinternship.ge/api/agents",
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

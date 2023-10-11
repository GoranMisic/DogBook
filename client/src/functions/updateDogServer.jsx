const editDog = async (id, newdog) => {
  try {
    await fetch(`http://localhost:3001/dogs/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newdog),
    });
  } catch (error) {
    console.error(error);
  }
};

export default editDog;

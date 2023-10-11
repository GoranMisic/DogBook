const fetchDogs = async () => {
  try {
    const resp = await fetch("http://localhost:3001/dogs");

    // Check if the response is successful
    if (!resp.ok) {
      throw new Error(`HTTP error! status: ${resp.status}`);
    }

    const dogs = await resp.json();
    return dogs;
  } catch (error) {
    console.error("Fetch operation failed:", error);
    throw error;
  }
};

export default fetchDogs;

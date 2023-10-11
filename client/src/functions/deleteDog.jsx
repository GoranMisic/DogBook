import editDog from "./updateDogServer";

const deleteDog = async (id, dogs) => {
  const copyDogs = [...dogs];
  const dog = copyDogs.find((dog) => dog.id === id);
  dog.friends.forEach(async (friendId) => {
    const friend = copyDogs.find((dog) => dog.id === friendId);
    const index = friend.friends.indexOf(id);
    friend.friends.splice(index, 1);
    await editDog(friend.id, friend);
  });

  try {
    await fetch(`http://localhost:3001/dogs/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error(error);
  }
};

export default deleteDog;

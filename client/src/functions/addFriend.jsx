import editDog from "./updateDogServer";

const addFriend = async (dogs, dogId, friendId) => {
  const copyDogs = [...dogs];
  console.log(copyDogs);

  const newDog = copyDogs.find((dog) => dog.id === dogId);
  const newFriend = copyDogs.find((dog) => dog.id === friendId);

  console.log(newDog.friends);
  console.log(newFriend.friends);

  newDog.friends.push(friendId);
  newFriend.friends.push(dogId);

  console.log(newDog.friends);
  console.log(newFriend.friends);

  await editDog(newDog.id, newDog);
  await editDog(newFriend.id, newFriend);
};

export default addFriend;

import addFriend from "../functions/addFriend";
import fetchDogs from "./dogsOnServer";

const addFriendsToNewDog = async (friends) => {
  const dogs = await fetchDogs();
  const newDog = dogs[dogs.length - 1];
  const newDogId = newDog.id;
  friends.forEach(async (friend) => {
    await addFriend(dogs, newDogId, friend.id);
  });
};

export default addFriendsToNewDog;

import editDog from "./updateDogServer";
import fetchDogs from "./dogsOnServer";

const removeFriend = async (dogId, friendId) => {
  console.log("removeFriend");
  console.log(dogId, friendId);

  const dogs = await fetchDogs();
  const newDog = [...dogs];
  const newFriend = [...dogs];
  const dogIndex = newDog.findIndex((dog) => dog.id === dogId);
  const friendIndex = newDog.findIndex((dog) => dog.id === friendId);

  console.log(newDog[dogIndex].friends);

  const dogFrienlistIndex = newDog[dogIndex].friends.findIndex(
    (friend) => friend === friendId
  );
  const friendFriendlistIndex = newFriend[friendIndex].friends.findIndex(
    (friend) => friend === dogId
  );

  newDog[dogIndex].friends.splice(dogFrienlistIndex, 1);
  newFriend[friendIndex].friends.splice(friendFriendlistIndex, 1);

  console.log(newDog);
  console.log(newFriend);
  editDog(dogId, newDog[dogIndex]);
  editDog(friendId, newFriend[friendIndex]);
};

export default removeFriend;

import {useState, useEffect} from "react";

function FriendsToBeAdded({
  dogs,
  selectedFriend,
  setSelectedFriend,
  friendList,
  setFriendList,
}) {
  // State for possible friends
  const [possibleFriends, setPossibleFriends] = useState([]);

  useEffect(() => {
    const newFriends = dogs.map((dog) => ({id: dog.id, name: dog.name}));
    setPossibleFriends(newFriends);
  }, [dogs]);

  // Remove a dog from the friends list
  const handleRemoveDog = (dogIdToRemove) => {
    const updatedPossibleFriends = possibleFriends.filter(
      (friend) => friend.id !== dogIdToRemove
    );

    setPossibleFriends(updatedPossibleFriends);

    // Handle edge cases when friends list is empty
    if (!updatedPossibleFriends.length) {
      setSelectedFriend(null);
    } else {
      setSelectedFriend(updatedPossibleFriends[0]);
    }
  };

  const handleSelectionChange = (event) => {
    const dogId = Number(event.target.value);
    const dog = dogs.find((dog) => dog.id === dogId);

    if (dog) {
      setSelectedFriend({id: dog.id, name: dog.name});
    }
  };

  // Add a friend to the friend list
  const handleAddFriend = () => {
    if (!selectedFriend) return;

    const updatedFriendList = [...friendList, selectedFriend];
    setFriendList(updatedFriendList);

    handleRemoveDog(selectedFriend.id);
  };

  return (
    <>
      <select
        defaultValue={""}
        id="AddFriendDropDown"
        onChange={handleSelectionChange}
      >
        <option key={0} value="" disabled hidden>
          Choose friend
        </option>
        {possibleFriends.map((friend) => (
          <option key={friend.id} value={friend.id}>
            {friend.name}
          </option>
        ))}
      </select>
      <button onClick={handleAddFriend}>AddFriend</button>
      <ul>
        {friendList.map((friend) => (
          <li key={friend.id}>{friend.name}</li>
        ))}
      </ul>
    </>
  );
}

export default FriendsToBeAdded;

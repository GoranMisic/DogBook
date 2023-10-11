const createFriendObject = (dogs, friends) => {
  const output = [];
  friends.forEach((friendId) => {
    const friend = dogs.find((dog) => dog.id === friendId);
    const obj = { id: friend.id, name: friend.name };
    output.push(obj);
  });

  return output;
};

export default createFriendObject;

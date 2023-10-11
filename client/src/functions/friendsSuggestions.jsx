const friendsToMaybeAdd = (activeDog, dogs, friends) => {
  const dogsToNotAdd = [...friends];
  console.log("friendsToMaybeAdd");

  console.log("dogs", dogs);
  console.log("activedog", activeDog);
  console.log("friends", friends);

  console.log("dogsToNotAdd", dogsToNotAdd);

  dogsToNotAdd.push(activeDog.id);
  console.log("dogstonotadd", dogsToNotAdd);

  const returnArray = [];

  dogs.forEach((dog) => {
    if (!dogsToNotAdd.includes(dog.id)) {
      returnArray.push(dog);
    }
  });
  console.log("returnArray", returnArray);
  return returnArray;
};
export default friendsToMaybeAdd;

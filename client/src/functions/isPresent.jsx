import editDog from "./updateDogServer";

export const changePresence = (dog) => {
  console.log("ChangePresence");
  const id = dog.id;
  const newdog = dog;
  newdog.presence = !newdog.presence;
  console.log("DoG", newdog);

  editDog(id, newdog);
};

export default changePresence;

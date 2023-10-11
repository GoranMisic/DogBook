import {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";

import FriendsList from "../components/ListOfFriends";
import AddFriendComponent from "../components/AddFriend.jsx";

import fetchDogs from "../functions/dogsOnServer";
import editDog from "../functions/updateDogServer";

function Edit() {
  console.log("EDIT");

  // Setting initial states
  const renderState = useState(true);
  const render = renderState[0];
  const setRender = renderState[1];

  const dogsState = useState([]);
  const dogs = dogsState[0];
  const setDogs = dogsState[1];

  const selectedState = useState(0);
  const selectedFriend = selectedState[0];
  const setSelectedFriend = selectedState[1];

  // UseEffect to fetch dogs
  useEffect(
    function () {
      async function getDogsData() {
        const response = await fetchDogs();
        setDogs(response);
      }

      getDogsData();
    },
    [render]
  );

  const navigate = useNavigate();
  const params = useParams();
  const idParam = Number(params.id);

  if (dogs.length === 0) {
    return <h1>Loading...</h1>; // Show loading till dogs are fetched
  }

  const dog = dogs.find(function (d) {
    return d.id === idParam;
  });

  // check if dog was found
  if (!dog) {
    return <h1>Dog not found!</h1>;
  }

  // Extracting properties from dog
  const id = dog.id;
  const name = dog.name;
  const picture = dog.picture;
  const nickname = dog.nickname;
  const age = dog.age;
  const bio = dog.bio;
  const friends = dog.friends;
  const presence = dog.presence;

  async function submithandler(e) {
    console.log("submithandler");
    e.preventDefault();

    // Getting values from form
    const newName = e.target.name.value;
    const newNickname = e.target.nickname.value;
    const newAge = e.target.age.value;
    const newBio = e.target.bio.value;

    // New dog object to be sent
    const newDog = {
      name: newName,
      picture: picture,
      nickname: newNickname,
      age: newAge,
      bio: newBio,
      friends: friends,
      presence: presence,
    };

    editDog(id, newDog);
    navigate("/profile/" + id);
  }

  return (
    <>
      <form onSubmit={submithandler}>
        <div>
          <h1>Edit {name}</h1> {/* Display dog's name */}
          <button type="submit">Save changes</button>
        </div>
        <h2>
          Name: <input id="name" type="text" defaultValue={name} />
        </h2>
        <img src={picture} alt="Dog" />
        <h4>
          Nickname: <input id="nickname" type="text" defaultValue={nickname} />
        </h4>
        <h4>
          Age: <input id="age" type="number" defaultValue={age} />
        </h4>
        <h4>
          Bio: <input id="bio" type="text" defaultValue={bio} />
        </h4>
      </form>
      <h3>Add a friend:</h3>
      <AddFriendComponent
        activeDog={dog}
        dogs={dogs}
        friends={friends}
        render={render}
        setRender={setRender}
        selectedFriend={selectedFriend}
        setSelectedFriend={setSelectedFriend}
      />
      <h3>Friends:</h3>
      <FriendsList
        dogs={dogs}
        friends={friends}
        dogId={id}
        render={render}
        setRender={setRender}
      />
    </>
  );
}

export default Edit;

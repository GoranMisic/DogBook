import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import fetchDogs from "../functions/dogsOnServer";
import FriendsToBeAdded from "../components/CreatePageFriends";
import addFriendsToNewDog from "../functions/newDogFriends";

function Create() {
  // Log to see if it's working
  console.log("I am in CREATE");

  const allDogs = useState([]);
  const dogs = allDogs[0];
  const setDogs = allDogs[1];

  const selected = useState(0);
  const selectedFriend = selected[0];
  const setSelectedFriend = selected[1];

  const list = useState([]);
  const friendList = list[0];
  const setFriendList = list[1];

  useEffect(function () {
    console.log("I am inside useEffect");
    async function getDogsData() {
      const response = await fetchDogs();
      setDogs(response);
    }

    getDogsData();
  }, []);
  const navigate = useNavigate();

  async function submithandler(event) {
    event.preventDefault();

    const name = event.target.name.value;
    const nickname = event.target.nickname.value;
    let picture; // Will get this from server
    const age = event.target.age.value;
    const bio = event.target.bio.value;
    const friends = [];
    const presence = false;

    // Trying to fetch picture
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      picture = data.message;
      console.log("Got picture:", picture);
    } catch (error) {
      console.log("Error fetching picture:", error);
    }

    // Trying to save the new dog
    try {
      await fetch("http://localhost:3001/dogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          nickname,
          picture,
          age,
          bio,
          friends,
          presence,
        }),
      });
      console.log("Saved new dog!");
    } catch (error) {
      console.log("Error saving new dog:", error);
    }

    addFriendsToNewDog(friendList); // Function to add friends
    navigate("/");
  }

  return (
    <>
      <h1>Create new dog</h1>
      <form onSubmit={submithandler}>
        <button type="submit">Save new dog</button>
        <div className="input-createDog">
          Name: <input id="name" type="text" />
          Nickname: <input id="nickname" type="text" />
          Age: <input id="age" type="number" />
          Bio: <input id="bio" type="text" />
        </div>
      </form>
      <br />
      <FriendsToBeAdded
        dogs={dogs}
        selectedFriend={selectedFriend}
        setSelectedFriend={setSelectedFriend}
        friendList={friendList}
        setFriendList={setFriendList}
      />
      <br />
    </>
  );
}

export default Create;

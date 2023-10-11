import {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";

import fetchDogs from "../functions/dogsOnServer";

import PrecenceButton from "../components/IsPresent";
import FriendsList from "../components/ListOfFriends";

const Profile = () => {
  console.log("PROFILE");

  const [render, setRender] = useState(true);
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    const getDogsData = async () => {
      const resp = await fetchDogs();
      setDogs(resp);
    };

    getDogsData();
  }, [render]);

  const navigate = useNavigate();
  const idParam = Number(useParams().id);

  if (dogs.length === 0) {
    return <h1>Profile</h1>;
  }

  const dog = dogs.find((dog) => dog.id === idParam);
  const {id, name, picture, nickname, age, bio, friends, presence} = dog;

  return (
    <>
      <div>
        <h1>Profile</h1>
        <button onClick={() => navigate("/edit/" + id)}>Edit</button>
      </div>
      <h2>Name: {name}</h2>
      <img src={picture} alt="Picture missing" />
      <h4>Nickname: {nickname}</h4>
      <h4>Age: {age}</h4>
      <h4>Bio: {bio}</h4>
      <div>
        <h3>Friends:</h3>
        <FriendsList dogs={dogs} friends={friends} />
      </div>
      <PrecenceButton dog={dog} render={render} setRender={setRender} />
    </>
  );
};

export default Profile;

import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import fetchDogs from "../functions/dogsOnServer";
import deleteDog from "../functions/deleteDog";

const Home = () => {
  console.log("HOME");
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const getDogsData = async () => {
      const resp = await fetchDogs();
      setDogs(resp);
    };

    getDogsData();
  }, []);

  const navigate = useNavigate();

  const onClickHandler = async (id) => {
    console.log("onClickHandler");
    await deleteDog(id, dogs);
    setDogs((prevDogs) => prevDogs.filter((dog) => dog.id !== id)); // Directly update dogs upon deletion.
  };

  if (!dogs.length) {
    return <h1>Dogbook</h1>;
  }

  return (
    <div>
      <h2>Dogs:</h2>
      {dogs.map(({id, name, picture, presence}) => (
        <div className="doglist" key={id}>
          <img
            className="doglist_img_homepage"
            onClick={() => navigate("/profile/" + id)}
            src={picture}
            alt="Dog"
          />
          <h4
            onClick={() => navigate("/profile/" + id)}
            className={`dogname_link_${presence}`}
          >
            {name}
          </h4>
          <button className="deletebutton" onClick={() => onClickHandler(id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;

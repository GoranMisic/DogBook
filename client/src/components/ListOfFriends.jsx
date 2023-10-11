import {useLocation} from "react-router-dom";
import createFriendObject from "../functions/friendsName";
import removeFriend from "../functions/deleteFriend";

function FriendsList(props) {
  // getting all the properties from props
  var dogs = props.dogs;
  var friends = props.friends;
  var dogId = props.dogId;
  var render = props.render;
  var setRender = props.setRender;

  var location = useLocation().pathname.substring(1, 5);

  // getting friends names
  var friendsName = createFriendObject(dogs, friends);

  if (location === "edit") {
    return friendsName.map(function (friend) {
      function handleRemoveClick() {
        removeFriend(dogId, friend.id).then(function () {
          setRender(!render);
        });
      }

      return (
        <li key={friend.id}>
          {friend.name}
          <button onClick={handleRemoveClick}>X</button>
        </li>
      );
    });
  }

  return friendsName.map(function (friend) {
    return <li key={friend.id}>{friend.name}</li>;
  });
}

export default FriendsList;

import addFriend from "../functions/addFriend";
import friendsToMaybeAdd from "../functions/friendsSuggestions";

function AddFriendComponent(props) {
  var activeDog = props.activeDog;
  var dogs = props.dogs;
  var friends = props.friends;
  var render = props.render;
  var setRender = props.setRender;
  var selectedFriend = props.selectedFriend;
  var setSelectedFriend = props.setSelectedFriend;

  var maybeAdd = friendsToMaybeAdd(activeDog, dogs, friends);

  console.log("maybeAdd", maybeAdd);

  function changeHandler(event) {
    var newValue = event.target.value;
    setSelectedFriend(Number(newValue));
  }

  function addToDB() {
    if (selectedFriend !== 0) {
      addFriend(dogs, activeDog.id, selectedFriend).then(function () {
        setRender(!render); // update the rendering
      });
    }
  }

  function onClickHandler(event) {
    addToDB();

    setSelectedFriend(maybeAdd[0].id).then(function () {
      setRender(!render);
      document.getElementById("AddFriendDropDown").selectedIndex = 0;
    });
  }

  return (
    <>
      <select defaultValue={""} id="AddFriendDropDown" onChange={changeHandler}>
        <option key={0} value="" disabled hidden>
          Choose friend
        </option>
        {maybeAdd.map(function (friend) {
          return (
            <option key={friend.id} value={friend.id}>
              {friend.name}
            </option>
          );
        })}
      </select>
      <button onClick={onClickHandler}>Press to Add Friend</button>
    </>
  );
}

export default AddFriendComponent;

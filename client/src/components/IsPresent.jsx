import changePresence from "../functions/isPresent";

function PrecenceButton(props) {
  var dog = props.dog;
  var render = props.render;
  var setRender = props.setRender;

  var isPresence = false; // assume not present

  // if the dog's presence is true then we set isPresence to true
  if (dog.presence === true) {
    isPresence = true; // the dog is present
  }

  return (
    <>
      <h3>
        Presence{" - "}
        <input
          className="presence_checkbox"
          type="checkbox"
          id="presence"
          checked={isPresence}
          onChange={function () {
            changePresence(dog);
            setRender(!render);
            new data();
          }}
        />
      </h3>
    </>
  );
}

export default PrecenceButton;

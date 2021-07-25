const Input = () => {
  return (
    <div id="input">
      <form id="CR-form">
        <label>Desired CR: </label>
        <input type="text" placeholder="Input Challenge Rating" />
      </form>
      <span> OR </span>
      <form id="number-form">
        <label>Number of Party Members: </label>
        <input type="text" placeholder="# of Members" />
        <label> Average Level of Party Members: </label>
        <input type="text" placeholder="Party Level" />
      </form>
    </div>
  );
};

export default Input;

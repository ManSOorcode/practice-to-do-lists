import { useState } from "react";

const UserForm = (props) => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    number: "",
  });

  const nameChangeHandler = (detail, value) => {
    setUserDetails((prev) => ({ ...prev, [detail]: value }));
  };

  // const numberChangeHandler = (value) => {
  //   setUserDetails((prev) => ({ ...prev, number: value }));
  // };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(userDetails);
    props.userElements(userDetails);
  };
  return (
    <div className="h-40 p-4 bg-slate-700">
      <form className={"b-g  flex flex-col"} onSubmit={submitHandler}>
        <label>Name</label>
        <input
          value={userDetails.name}
          type="text"
          placeholder="Name"
          onChange={(e) => nameChangeHandler("name", e.target.value)}
        />
        <label>Phone-Number</label>
        <input
          value={userDetails.number}
          onChange={(e) => nameChangeHandler("number", e.target.value)}
          type="number"
          placeholder="number"
        />

        <button className="w-12 px-4 py-2 mt-4 bg-red-600">click</button>
      </form>
    </div>
  );
};

export default UserForm;

import { useState } from "react";
import UserData from "./component/UserData";
import UserForm from "./component/UserForm";
import Overlay from "./ui/Overlay";

function App() {
  const [data, setupdate] = useState([]);

  const updatedata = (userData) => {
    setupdate((prev) => [...prev, userData]);
  };
  return (
    <Overlay>
      <UserForm userElements={updatedata} />
      <UserData newData={data} />
    </Overlay>
  );
}

export default App;

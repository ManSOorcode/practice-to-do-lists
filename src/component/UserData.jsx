const UserData = ({ newData }) => {
  console.log(newData);
  return (
    <div className="bg-orange-400 ">
      {newData.map((el, i) => (
        <div key={i} className="h-fit">
          <div>{el?.name}</div>
          <div>{el?.number}</div>
        </div>
      ))}
    </div>
  );
};

export default UserData;

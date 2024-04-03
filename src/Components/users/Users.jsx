import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
  const users = useLoaderData();
  return (
    <div>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-red-800">Users:{users.length}</h1>
        <h2 className="text-3xl font-bold">This is Users Comeponent </h2>
      </div>

      <div className="grid grid-cols-3 gap-4 my-5">
        {users.map((user) => (
          <User user={user} key={users.id}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;

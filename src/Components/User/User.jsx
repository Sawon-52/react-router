import { Link, useNavigate } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, email, address } = user;
  const navigate = useNavigate();

  const handleShow = () => {
    navigate(`/user/${id}`);
  };

  return (
    <div>
      <div className="border-4 border-red-500 p-4 rounded-md text-xl font-bold ">
        <h1>{name}</h1>
        <h2>{email}</h2>
        <h2>{address.city}</h2>
        <button onClick={handleShow} className="text-blue-500 hover:underline flex justify-center p-4 border-2 border-green-400  rounded-lg my-4">
          Show Details
        </button>
        {/* <Link to={`/user/${id}`}>Show Details</Link> */}
      </div>
    </div>
  );
};

export default User;

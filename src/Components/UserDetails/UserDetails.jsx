import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { name, email, address, website, company } = user;
  return (
    <div className="md:w-2/3 mx-auto p-4 border-4 border-blue-950 rounded-lg text-3xl font-bold   ">
      <h2 className="text-red-700">Name: {name}</h2>
      <h2>Email: {email}</h2>
      <h2>Address: {address.city}</h2>
      <h2>Website: {website}</h2>
      <h2>Company: {company.name}</h2>
    </div>
  );
};

export default UserDetails;

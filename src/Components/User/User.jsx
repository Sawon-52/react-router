const User = ({ user }) => {
  const { name, email, address, phone, website, company } = user;
  return (
    <div>
      <div className="border-4 border-red-500 p-4 rounded-md text-xl text-blue-800 ">
        <h1>{name}</h1>
        <h2>{email}</h2>
        <h2>{address.city}</h2>
        <h2>{phone}</h2>
        <h2>{website}</h2>
        <h2>{company.name}</h2>
      </div>
    </div>
  );
};

export default User;

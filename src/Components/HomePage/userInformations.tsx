export const UserInformations = ({ user }) => {
  return (
    <div>
      <h2>{user.first_name}</h2>
      <h2>{user.last_name}</h2>
    </div>
  );
};

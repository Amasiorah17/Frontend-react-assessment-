 const UserCard = ({ name, email }) => {
    return(
      <div className="user-card">
       <h2>User Card </h2>
       <p><strong>Name:</strong>{name}</p>
       <p><strong>Email:</strong>{email}</p>
    </div>
)
};

export default UserCard;
export const UserProfile = ({ img, name, bio, location, skills, isOnline }) => {
  return (
    <div
      className="user-list-item"
      style={{
        border: "1px solid",
        margin: "10px",
        padding: "10px",
      }}
    >
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <p className="bio">{bio}</p>
      <ul className="skill">
        skills:
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <p className="status">{`status: ${isOnline ? "online" : "offline"}`}</p>
    </div>
  );
};

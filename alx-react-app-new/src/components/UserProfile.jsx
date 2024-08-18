function UserProfile(props) {
  return (
      <div style={{ border: '1px solid gray', borderRadius: '8px', padding: '15px', margin: '10px', backgroundColor: '#f0f0f0' }}>
          <h2 style={{ color: 'blue', marginBottom: '10px' }}>{props.name}</h2>
          <p style={{ fontSize: '18px' }}>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
          <p style={{ fontSize: '16px', fontStyle: 'italic' }}>Bio: {props.bio}</p>
      </div>
  );
}

export default UserProfile;
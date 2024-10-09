
import './App.css';

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Personal Details</h1>
      <div style={styles.detailsContainer}>
        <img src="mypic1.jpg" alt="Profile" style={styles.profileImage} />
        <div style={styles.textContainer}>
          <h2>Name: Sonu Kumar</h2>
          <p><strong>Email:</strong> sonu@example.com</p>
          <p><strong>Phone:</strong> +91 12345 67890</p>
          <p><strong>Address:</strong> 123, Your Street, City, Country</p>
          <p><strong>Bio:</strong> A passionate developer with experience in web development, React, and front-end technologies. Enthusiastic about learning and building projects that solve real-world problems.</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
  },
  detailsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  profileImage: {
    borderRadius: '50%',
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    marginBottom: '20px',
  },
  textContainer: {
    textAlign: 'center',
  },
};

export default App;

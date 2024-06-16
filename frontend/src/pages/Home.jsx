import React from 'react';

const HomePage = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Welcome to Our Website</h1>
      </header>
      <main style={styles.main}>
        <section style={styles.section}>
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut lacinia diam.</p>
        </section>
        <section style={styles.section}>
          <h2>Services</h2>
          <ul style={styles.serviceList}>
            <li>Web Design</li>
            <li>Graphic Design</li>
            <li>SEO Optimization</li>
          </ul>
        </section>
        <section style={styles.section}>
          <h2>Contact Us</h2>
          <p>Email: info@example.com</p>
          <p>Phone: +1 234 567 890</p>
        </section>
      </main>
      <footer style={styles.footer}>
        <p>&copy; 2024 Our Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    maxWidth: '1200px',
    margin: 'auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  nav: {
    display: 'flex',
  },
  navLink: {
    margin: '0 10px',
    color: '#333',
    textDecoration: 'none',
    fontSize: '18px',
  },
  main: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
  },
  section: {
    backgroundColor: '#f0f0f0',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  serviceList: {
    listStyle: 'none',
    padding: '0',
  },
  footer: {
    marginTop: '20px',
    textAlign: 'center',
    padding: '10px',
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: '8px',
  },
};

export default HomePage;

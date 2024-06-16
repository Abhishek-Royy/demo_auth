import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={styles.navbar}>
      <Link to="/"><div style={styles.logo}>Logo</div></Link>
      <div style={styles.navItems}>
        <Link to="/signup" style={styles.navItem}>Sign Up</Link>
        <Link to="/signin" style={styles.navItem}>Sign In</Link>
      </div>
    </div>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#f0f0f0",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    textDecoration:"none"
  },
  navItems: {
    display: "flex",
    gap: "20px",
  },
  navItem: {
    textDecoration: "none",
    color: "#333",
    padding: "8px 12px",
    borderRadius: "5px",
    backgroundColor: "#ddd",
  },
};

export default Navbar;

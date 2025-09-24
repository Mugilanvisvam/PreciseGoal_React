import React from "react";

const Equity = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.icon}>🚧</div>
        <h2 style={styles.title}>Page Under Construction</h2>
        <p style={styles.text}>
          We’re working hard to bring this page to life. Please check back soon!
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    // background: "#57C675",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  card: {
    background: "#57C675",
    padding: "40px",
    borderRadius: "16px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    textAlign: "center",
    maxWidth: "500px",
  },
  icon: {
    fontSize: "60px",
    marginBottom: "20px",
  },
  title: {
    fontSize: "28px",
    marginBottom: "10px",
    color: "#fff",
  },
  text: {
    fontSize: "16px",
    color: "#fff",
  },
};

export default Equity;

import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Prediction = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div style={styles.container}>
      {/* Particles Background */}
      <Particles 
        init={particlesInit}
        options={{
          background: { color: "#0F2027" }, // Dark futuristic theme
          particles: {
            number: { value: 120 },
            size: { value: 3 },
            move: { speed: 2 },
            color: { value: ["#00FFFF", "#FFD700", "#00BFFF"] }, // Cyan, Gold, and Blue
            links: { enable: true, color: "#FFD700" }, // Gold links between particles
          },
        }}
        style={styles.particles}
      />

      {/* Prediction Content */}
      <div style={styles.predictionSection}>
        <h1 style={styles.heading}>🚗 Vehicle Prediction</h1>
        <p style={styles.description}>
          Using advanced **data analytics & machine learning**, we predict the **number of vehicles by 2025**.  
          Discover insights into the future of **EVs, hybrids, and fuel-based vehicles**.  
        </p>

        {/* Placeholder for Charts */}
        <div style={styles.chartContainer}>
          <p style={styles.chartPlaceholder}>📊 Prediction results & charts will be displayed here.</p>
        </div>
      </div>
    </div>
  );
};

/* 🔹 Styles */
const styles = {
  container: {
    position: "relative",
    textAlign: "center",
    padding: "50px 20px",
    background: "#0F2027", // Dark gradient base
    color: "#fff",
    minHeight: "100vh",
  },
  particles: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
  predictionSection: {
    maxWidth: "800px",
    margin: "80px auto 0", // Ensures it doesn’t overlap navbar
    padding: "30px",
    borderRadius: "12px",
    background: "rgba(0, 0, 0, 0.5)", // Subtle dark overlay
    backdropFilter: "blur(8px)",
  },
  heading: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#FFD700", // Gold color for futuristic look
    textShadow: "1px 1px 5px rgba(255, 215, 0, 0.5)",
  },
  description: {
    fontSize: "18px",
    lineHeight: "1.6",
    marginBottom: "20px",
  },
  chartContainer: {
    width: "100%",
    height: "200px",
    border: "2px dashed rgba(255, 255, 255, 0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
    marginTop: "20px",
  },
  chartPlaceholder: {
    fontSize: "16px",
    fontStyle: "italic",
    color: "rgba(255, 255, 255, 0.7)",
  },
};

export default Prediction;

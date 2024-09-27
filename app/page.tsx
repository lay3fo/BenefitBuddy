"use client";

import React from "react";
import styles from "./page.module.css"; // Import the CSS file for styling
import Chat from "./components/chat";
import Robot from "./components/robot"; // Import the robot component

const Home: React.FC = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.column}>
          <div className={styles.robotContainer}>
            <Robot />
          </div>
        </div>
        <div className={styles.chatContainer}>
        <div className={styles.chat}>
          <Chat />
        </div>
        </div>
      </div>
    </main>
  );
};

export default Home;

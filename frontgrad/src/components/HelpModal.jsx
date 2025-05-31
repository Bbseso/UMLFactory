import React from "react";
import styles from "./styles/components-styles/HelpModal.module.css";

function HelpModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeX} onClick={onClose} title="Close">&times;</button>
        <h2 className={styles.title}>Need a Hand?</h2>
        <p className={styles.subtitle}>Welcome to UMLFactory!</p>
        <p className={styles.helpText}>
          If you're new here or need a refresher, our project manual has everything you need to get started and make the most of the platform.
        </p>
        <a
          href="https://www.canva.com/design/DAGo9LWSZq8/dooIr2TP8_QG1BatJCEx_g/edit"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.manualLink}
        >
          📖 Open Project Manual
        </a>
      </div>
    </div>
  );
}

export default HelpModal; 
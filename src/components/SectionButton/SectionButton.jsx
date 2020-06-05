import React, { useState, useEffect } from 'react';
import styles from "./SectionButton.module.css";

const ButtonSection = ({ sectionName }) => {
    return (
        // Trying to create buttons for the sections for the home screen
        // view in the staff portal. 
        <div className={styles.ButtonSection}>
            {sectionName}
            {console.log(sectionName)}
        </div>
    )
}

export default ButtonSection
import React from 'react';
import styles from '../css/homepage.module.css';

const Homepage: React.FC = () => {
    return (
        <div className={styles.videoContainer}>
            <video className={styles.video} autoPlay muted loop>
                <source src="/ivern.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <div className={styles.contentContainer}>
                    <p className={styles.contentText}>With Stalker you can </p>
                    <ul className={styles.contentList}>
                        <li className={styles.contentListItem}>track friends !</li>
                        <li className={styles.contentListItem}>see their game stats !</li>
                        <li className={styles.contentListItem}>have a stats leaderboard !</li>
                    </ul>
                </div>
                <a href="https://github.com/MrChoppy/StalkerBot" className={styles.githubButton} target="_blank" rel="noopener noreferrer">
                    Source Code
                </a>
            </div>
            <div className={styles.footer}>
                <p>Made by MrChoppy. Not affiliated with Riot Games.</p>
            </div>
        </div>
    );
};
export default Homepage;

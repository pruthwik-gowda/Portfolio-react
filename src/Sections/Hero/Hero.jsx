import React from 'react'
import styles from './HeroStyles.module.css'
import heroImg from '../../assets/profile-photo-2.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'
import githubLight from '../../assets/github-light.svg'
import linkedInLight from '../../assets/linkedin-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedInDark from '../../assets/linkedin-dark.svg'
import Resume from '../../assets/pruthwik_gowda (5).pdf'
import { useTheme } from '../../Common/ThemeContext'

const Hero = () => {

    const { theme, toggleTheme } = useTheme();


    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedInIcon = theme === 'light' ? linkedInLight : linkedInDark;

    return (
        <section id="section0" className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img 
                    className={styles.hero} 
                    src={heroImg} 
                    alt="Profile picture"
                />
                <img 
                className={styles.colorMode} 
                src={themeIcon} 
                alt='Theme toggle' 
                onClick={toggleTheme}/>
            </div>
            <div className={styles.info}>
                <h1>
                    Pruthwik
                    <br></br>
                    Gowda
                </h1>
                <h2>
                    Engineering Student
                </h2>
                <span>
                    <a href="https://github.com/pruthwik-gowda" target="_blank">
                        <img src={twitterIcon} alt="twitter logo" />
                    </a>
                    <a href="https://github.com/pruthwik-gowda" target="_blank">
                        <img src={githubIcon} alt="twitter logo" />
                    </a>
                    <a href="https://www.linkedin.com/in/pruthwik-gowda-576926248/" target="_blank">
                        <img src={linkedInIcon} alt="twitter logo" />
                    </a>
                </span>
                <p className={styles.description}>
                    Seeking opportunities as a Software engineer
                </p>
                <a href={Resume} target="_blank" download>
                    <button className='hover' /*download*/>
                        Resume
                    </button>
                </a>
            </div>
        </section>
    )
}

export default Hero
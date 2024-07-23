import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../Common/SkillList';
import { useTheme } from '../../Common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="section2" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Java" />
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="C" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="ReactJS" />
        <SkillList src={checkMarkIcon} skill="NodeJS" />
        <SkillList src={checkMarkIcon} skill="BLockchain" />
        <SkillList src={checkMarkIcon} skill="Solidity" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Selenium" />
        <SkillList src={checkMarkIcon} skill="GCP" />
        <SkillList src={checkMarkIcon} skill="Git" />
      </div>
      {/* <hr /> */}
      {/* <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Computer Networks" />
        <SkillList src={checkMarkIcon} skill="SDLC" />
        <SkillList src={checkMarkIcon} skill="DBMS" />
        <SkillList src={checkMarkIcon} skill="OS" />
        <SkillList src={checkMarkIcon} skill="Bootstrap" />
      </div> */}
    </section>
  );
}

export default Skills;
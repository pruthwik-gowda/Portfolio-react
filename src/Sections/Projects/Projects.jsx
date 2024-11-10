import styles from './ProjectsStyles.module.css';
import fundingHero from '../../assets/crowd-funding-hero.svg'
import sortingHero from '../../assets/sorting-hero-image.svg'
import bestBuyHero from '../../assets/BestBuyBot.svg'
import ProjectCard from '../../Common/ProjectCard';

function Projects() {
  return (
    <section id="section1" className={styles.container}>
      <div>
        <h1 className="sectionTitle">Projects</h1>
      </div>
      <div>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={sortingHero}
          link="https://react-sorting-vis.vercel.app/"
          h3="SortViz"
          p="Sorting Vizualizer"
        />
        <ProjectCard
          src={fundingHero}
          link="https://fund-raising-blockchain.vercel.app/"
          h3="Dfund"
          p="Ethereum based crowdfunding DApp"
        />
        <ProjectCard
          src={bestBuyHero}
          link="https://best-buy-website.vercel.app/"
          h3="BestBuyBot"
          p="Want to save money on your next purchase?"
        />
        

      </div>
      </div>
    </section>
  );
}

export default Projects;

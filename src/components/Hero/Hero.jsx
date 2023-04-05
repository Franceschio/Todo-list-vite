import styles from "./index.module.scss";

const Hero = () => {
  return (
    <div className={styles.Hero}>
      {new Date().getHours() >= 17 ? (
        <h1>Good evening!</h1>
      ) : (
        <h1>Good morning!</h1>
      )}
    </div>
  );
};

export default Hero;

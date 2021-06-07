import styles from "./layout.module.css";

export default function Footer() {
  return (
    <footer className="footer">
      <a className={styles.img} href="https://twitter.com/molly__millions">
        <img
          align="left"
          alt="Natalia's Twitter"
          width="22px"
          src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/twitter.svg"
        />
      </a>
      <a className={styles.img} href="http://www.linkedin.com/in/natalia-mar">
        <img
          align="left"
          alt="Natalia's Linkdein"
          width="22px"
          src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg"
        />
      </a>
      <a className={styles.img} href="https://github.com/ripleycmd">
        <img
          align="left"
          alt="Natalia's Github"
          width="22px"
          src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/github.svg"
        />
      </a>{" "}
    </footer>
  );
}

{
  /* <style jsx>
  {`
    width: 100%;
    height: 100px;
    border-top: 1px solid #eaeaea;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
</style>; */
}

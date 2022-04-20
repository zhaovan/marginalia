import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowDimensions;
};

export default function Home() {
  const { width, height } = useWindowDimensions();
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  console.log(height);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(scrollPosition);

  const imageArray = [2, 3, 4, 5];
  const num = height;
  return (
    <div style={{ minHeight: "100%" }}>
      <Head>
        <title>A letter to my dog</title>
        <meta name="description" content="Project for line work piece" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div className={styles.parallax} /> */}
      <Image
        src="/l1.jpeg"
        priority
        alt=""
        layout="fixed"
        className={styles.image}
        width={500}
        height={500}
        style={{ zIndex: 1 }}
      />
      {imageArray.map((e) => {
        if (scrollPosition > (e - 1) * num) {
          return (
            <Image
              src={"/l" + e + ".jpeg"}
              alt=""
              layout="fixed"
              lazy
              className={styles.image}
              width={500}
              height={500}
              style={{ zIndex: e }}
            />
          );
        }
      })}
      <div className={styles.container}>
        <p className={styles.text}>
          Hey Buddy
          <br />
          &emsp; I miss you
          <br />
          &emsp; &emsp; Here you are, staring at me, fidgeting with the world
          <br />
          What took you so long to come to me?
        </p>
      </div>
      <div className={styles.container}>
        <p className={styles.text}>
          You're kinda stinky looking huh
          <br />
          &emsp; but you're my favorite stinky boy
          <br />
          &emsp;&emsp; You always wake up in the morning, staring at me with
          those two pupils, without a thought in the world
          <br />
          Not a single thought behind those eyes.
        </p>
      </div>{" "}
      <div className={styles.container}>
        <p className={styles.text}>
          Sometimes a gift to the world.
          <br />
          &emsp; Sometimes you're hell to deal with.
          <br />
          &emsp;&emsp; Mom loves you though.
          <br />
          That's why she puts a rose on you.
        </p>
      </div>{" "}
      <div className={styles.container}>
        <p className={styles.text}>
          It's kind of humorous, ya know.
          <br />
          &emsp; The way you watched me... all those years, waiting for me to
          grow up.
          <br />
          &emsp;&emsp; You grew up faster.
          <br />
          But you waited.
        </p>
      </div>
      <div className={styles.container}>
        <p className={styles.text}>
          Thanks for supporting me all the way
          {Array(6)
            .fill(0)
            .map((e) => {
              return (
                <>
                  <br />
                </>
              );
            })}
          I love you
          <br />
          Ivan
        </p>
      </div>
    </div>
  );
}

import animationone from "@/public/lottie/visit-burr-1.json";
import animationtwo from "@/public/lottie/visit-burr-2.json";
import animationthree from "@/public/lottie/visit-burr-3.json";
import animationfour from "@/public/lottie/visit-burr-4.json";
import animationfive from "@/public/lottie/visit-burr-5.json";
import Lottie from "lottie-react";
import { useAnswers } from "@/hooks/answerContext";
import Button from "@/components/Button";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import styles from "@/styles/Visitburr.module.css";
import InfoIcon from "@/components/InfoIcon";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function VisitBurrOne() {
  const [clientSide, setClientSide] = useState(false);
  const { score } = useAnswers();

  useEffect(() => {
    setClientSide(true);
  }, []);

  function findAnim(score) {
    switch (score) {
      case 1:
        return animationfive;
      case 2:
        return animationfour;
      case 3:
        return animationthree;
      case 4:
        return animationtwo;
      case 5:
        return animationone;
      case 6:
        return animationone;
      default:
        return null;
    }
  }

  const anim = findAnim(score);

  return (
    <>
      <Head>
        <title>Visit Burr</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      {clientSide && score !== 0 && (
        <div className={styles.info}>
          <InfoIcon />
        </div>
      )}
      <main
        style={{
          overflow: "hidden",
          height: "100vh",
          display: "grid",
          placeItems: "center",
        }}
      >
        {anim && (
          <div
            style={{
              overflow: "hidden",
              height: "100vh",
            }}
          >
            <Lottie
              animationData={anim}
              loop={true}
              onComplete={() => {}}
              className={styles.lottie}
            />

            <div className={styles.desktopInfo}>
              <div className={styles.title_head}>
                <p>Your Impact Matters.</p>
              </div>
              <div className={styles.title_desc}>
                <p>
                  Burr’s habitat changes based on your quiz results. The higher
                  you score, the more populated his home will be. Every choice
                  you make throughout your day has an impact on the world around
                  you.
                </p>
              </div>
              <div className={styles.title_desc}>
                <p>
                  Still have questions about the environment? Why don’t you talk
                  to Burr himself?
                </p>
              </div>
              <div className={styles.button}>
                <Button word={"Talk to Burr"} route={"/askburr"} />
              </div>
            </div>
          </div>
        )}
        {!anim && score === 0 && (
          <Button word={"Try the quiz!"} route={"/quiz"} />
        )}
      </main>
    </>
  );
}

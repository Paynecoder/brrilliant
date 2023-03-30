import styles from "../styles/Quiz.module.css";
import { useState, useEffect } from "react";
import { questions } from "../data/questions.js";
import Navbar from "../components/Navbar/index.js";
import Image from "next/image";
import Router from "next/router";
import usePopup from "@/hooks/usePopup";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizData, setQuizData] = useState([...questions]);
  const [currentQuestionData, setCurrentQuestionData] = useState({});
  const [score, setScore] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    setCurrentQuestionData(quizData[currentQuestion]);
    console.log(score);
  }, [currentQuestion]);

  const router = Router;
  const { renderPopup, nextQuestion } = usePopup();

  return (
    <>
      <Navbar />
      <div className={styles.progresscontainer}>
        <div
          className={styles.progress}
          style={{
            width: `${((currentQuestion + 1) / questions.length) * 100}%`,
          }}
        ></div>
      </div>
      <main className={styles.main}>
        <div>
          <Image
            src={currentQuestionData.image}
            width={225}
            height={225}
            alt="question"
          />
        </div>
        <div className={styles.qtitlebox}>
          <h1 className={styles.title}>{currentQuestionData.title}</h1>
          <p>{currentQuestionData.question}</p>
        </div>
        <div className={styles.buttons}>
          {currentQuestionData.answers?.map((answer, index) => (
            <div className={styles.buttonContainer} key={index}>
              <button
                className={styles.buttonBody}
                onClick={() => {
                  setSelectedAnswer(answer);
                  if (
                    answer === currentQuestionData.correctAnswer ||
                    (currentQuestionData.correctAnswerTwo &&
                      currentQuestion === currentQuestionData.id)
                  ) {
                    setScore(score + 1);
                  }
                  if (
                    currentQuestion === questions.length - 1 &&
                    currentQuestionData.id === questions.length - 1
                  ) {
                    if (answer === currentQuestionData.correctAnswer) {
                      router.push(`/results/visit-burr${score}`);
                    } else if (score === 1) {
                      router.push(`/results/visit-burr${score}`);
                    } else if (score === 6) {
                      router.push(`/results/visit-burr${score - 1}`);
                    } else {
                      router.push(`/results/visit-burr${score - 1}`);
                    }
                  } else {
                    setTimeout(() => {
                      nextQuestion(
                        setCurrentQuestion,
                        setSelectedAnswer,
                        currentQuestion
                      );
                    }, 2000);
                  }
                }}
              >
                {answer}
              </button>
            </div>
          ))}
        </div>
        <div className={styles.popup}>
          {renderPopup(
            selectedAnswer,
            currentQuestionData,
            currentQuestionData.goodFeedback,
            currentQuestionData.badFeedback
          )}
        </div>
      </main>
    </>
  );
}

'use client'

import { useEffect, useState, useCallback } from 'react'
import { gsap } from 'gsap'
import { DocumentTextIcon, PlusIcon } from '@heroicons/react/24/solid'
import questionsBank from './questions'

// Sample buzzwords for falling animation
const buzzwords = [
  'APR',
  'LTV',
  'Vote',
  '%',
  'Liquidation',
  'Interest',
  'Collateral',
  'Clynto',
  'CLY',
  'Max',
  'Min',
]

// Define the Question interface for TypeScript
interface Question {
  question: string
  options: string[]
  correctAnswer: string
  explanation: string
}

/**
 * ClyntoTriviaChallenge - A trivia game component with dark mode theme and random question selection
 * Integrates game mechanics with falling buzzwords/icons animations
 */
const ClyntoTriviaChallenge = () => {
  // Select 10 random questions initially
  const getRandomQuestions = (count: number): Question[] => {
    const shuffled = [...questionsBank].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, count)
  }

  // Game state management
  const [gameStarted, setGameStarted] = useState(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [score, setScore] = useState(0)
  const [timer, setTimer] = useState(30)
  const [feedback, setFeedback] = useState<{ correct: boolean; explanation: string } | null>(null)
  const [gameEnded, setGameEnded] = useState(false)
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>(getRandomQuestions(10))

  const totalQuestions = 10 // Number of questions per game

  /** Start the game */
  const startGame = useCallback(() => {
    setGameStarted(true)
    setCurrentQuestionIndex(0)
    setScore(0)
    setTimer(30)
    setFeedback(null)
    setGameEnded(false)

    // Select 10 random questions from questionsBank
    const newQuestions = getRandomQuestions(totalQuestions)
    setCurrentQuestions(newQuestions)
  }, [])

  /** Move to the next question or end game */
  const nextQuestion = useCallback(() => {
    if (
      currentQuestionIndex + 1 < totalQuestions &&
      currentQuestionIndex + 1 < currentQuestions.length
    ) {
      setCurrentQuestionIndex((prev) => prev + 1)
      setTimer(30)
      setSelectedAnswer(null)
      setFeedback(null)
    } else {
      setGameEnded(true)
    }
  }, [currentQuestionIndex, currentQuestions.length])

  /** Handle user's answer selection */
  const handleAnswer = useCallback(
    (answer: string) => {
      setSelectedAnswer(answer)
      const correct = answer === currentQuestions[currentQuestionIndex].correctAnswer
      setFeedback({
        correct,
        explanation: currentQuestions[currentQuestionIndex].explanation,
      })
      if (correct) setScore((prev) => prev + 10) // 10 points per correct answer
      setTimeout(nextQuestion, 3000) // Show feedback for 3 seconds
    },
    [currentQuestionIndex, nextQuestion, currentQuestions]
  )

  /** Handle timer running out */
  const handleTimeout = useCallback(() => {
    if (currentQuestions[currentQuestionIndex]) {
      setFeedback({
        correct: false,
        explanation: currentQuestions[currentQuestionIndex].explanation,
      })
      setTimeout(nextQuestion, 3000)
    }
  }, [currentQuestionIndex, nextQuestion, currentQuestions])

  /** Replay the game */
  const replayGame = useCallback(() => {
    startGame()
  }, [startGame])

  // Timer logic using useEffect
  useEffect(() => {
    if (gameStarted && !gameEnded && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1)
      }, 1000)
      return () => clearInterval(interval)
    } else if (timer === 0) {
      handleTimeout()
    }
  }, [gameStarted, gameEnded, timer, handleTimeout])

  // GSAP animations for falling buzzwords and icons
  useEffect(() => {
    const elements = document.querySelectorAll('.falling-item')
    elements.forEach((element) => {
      const randomDelay = Math.random() * 5
      const randomDuration = Math.random() * 3 + 2
      const randomX = Math.random() * 650

      gsap.fromTo(
        element,
        { x: randomX, y: -100 },
        {
          y: 600,
          duration: randomDuration,
          delay: randomDelay,
          ease: 'linear',
          repeat: -1,
          onRepeat: () => {
            // Ensure onRepeat doesn't return a Tween
            void gsap.set(element, { x: Math.random() * 650 })
          },
        }
      )
    })
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background SVG with dark mode theme */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1200 600"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0"
      >
        <rect x="0" y="0" width="1200" height="600" fill="#1E3A8A" /> {/* Dark blue sky */}
        <rect x="0" y="400" width="1200" height="200" fill="#4B5563" /> {/* Dark gray road */}
      </svg>

      {/* Falling Icons and Buzzwords */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full">
        <div className="falling-item absolute h-10 w-10 text-gray-200">
          <DocumentTextIcon />
        </div>
        <div className="falling-item absolute h-10 w-10 text-gray-200">
          <PlusIcon />
        </div>
        {buzzwords.map((word, index) => (
          <div key={index} className="falling-item absolute text-xl font-bold text-gray-200">
            {word}
          </div>
        ))}
      </div>

      {/* Game Overlay with dark mode theme */}
      <div className="absolute inset-0 flex items-start justify-center pt-4">
        {!gameStarted && !gameEnded && (
          <div className="sticky top-0 rounded-lg bg-gray-800 p-8 text-center shadow-lg">
            <h1 className="mb-4 text-3xl font-bold text-white">Clynto Trivia Challenge</h1>
            <p className="mb-4 text-lg text-gray-200">
              Test your knowledge of Clynto and earn points!
            </p>
            <button
              onClick={startGame}
              className="rounded-lg bg-blue-600 px-6 py-3 text-xl text-white hover:bg-blue-700"
            >
              Play
            </button>
          </div>
        )}

        {gameStarted && !gameEnded && (
          <div className="w-full max-w-md rounded-lg bg-gray-800 p-8 text-center shadow-lg">
            <h2 className="mb-4 text-xl font-bold text-white">
              Question {currentQuestionIndex + 1} of {totalQuestions}
            </h2>
            <p className="mb-4 text-lg text-gray-200">
              {currentQuestions[currentQuestionIndex].question}
            </p>
            <div className="space-y-3">
              {currentQuestions[currentQuestionIndex].options.map((option: string, idx: number) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(option)}
                  className={`w-full rounded-lg bg-gray-700 p-3 text-left text-gray-200 hover:bg-gray-600 ${
                    selectedAnswer ? 'cursor-not-allowed opacity-50' : ''
                  }`}
                  disabled={selectedAnswer !== null}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="mt-4">
              <p className="text-lg text-gray-200">Time left: {timer} seconds</p>
            </div>
            {feedback && (
              <div className="mt-4">
                <p className={feedback.correct ? 'text-green-400' : 'text-red-400'}>
                  {feedback.correct ? 'Correct!' : 'Incorrect!'}
                </p>
                <p className="text-sm text-gray-300">{feedback.explanation}</p>
              </div>
            )}
          </div>
        )}

        {gameEnded && (
          <div className="rounded-lg bg-gray-800 p-8 text-center shadow-lg">
            <h1 className="mb-4 text-3xl font-bold text-white">Game Over</h1>
            <p className="mb-4 text-lg text-gray-200">Your final score: {score}</p>
            <button
              onClick={replayGame}
              className="rounded-lg bg-blue-600 px-6 py-3 text-xl text-white hover:bg-blue-700"
            >
              Replay
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ClyntoTriviaChallenge

"use client";
import React, { useState, useEffect, useRef } from 'react';

function PomodoroTimer() {
  const [workTime, setWorkTime] = useState(25); // minutes
  const [breakTime, setBreakTime] = useState(5); // minutes
  const [longBreakTime, setLongBreakTime] = useState(30); // minutes
  const [isWork, setIsWork] = useState(true);
  const [remainingTime, setRemainingTime] = useState(workTime * 60); // seconds
  const [isStarted, setIsStarted] = useState(false);
  const intervalIdRef = useRef(null);
  const audioRef = useRef(new Audio('path/to/break_sound.mp3'));
  const longBreakAudioRef = useRef(new Audio('path/to/long_break_sound.mp3'));

  useEffect(() => {
    if (isStarted) {
      intervalIdRef.current = setInterval(() => {
        setRemainingTime(prevTime => Math.max(prevTime - 1, 0));
        if (remainingTime === 0) {
          // Handle timer completion
          if (isWork) {
            setIsWork(false);
            setRemainingTime(breakTime * 60);
            audioRef.current.play(); // Play break sound
          } else {
            const completedSessions = JSON.parse(localStorage.getItem('completedSessions')) || 0;
            if (completedSessions % 4 === 3) {
              setRemainingTime(longBreakTime * 60);
              longBreakAudioRef.current.play(); // Play long break sound
            } else {
              setRemainingTime(breakTime * 60);
              audioRef.current.play(); // Play break sound
            }
            localStorage.setItem('completedSessions', JSON.stringify(completedSessions + 1));
          }
        }
      }, 1000);
      return () => clearInterval(intervalIdRef.current);
    }
  }, [isStarted, remainingTime, isWork, breakTime, longBreakTime]);

  const handleStartPause = () => {
    setIsStarted(!isStarted);
    if (!isStarted) {
      clearInterval(intervalIdRef.current);
    }
  };

  const handleReset = () => {
    setIsStarted(false);
    setIsWork(true);
    setRemainingTime(workTime * 60);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secondsRemaining = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secondsRemaining.toString().padStart(2, '0')}`;
  };

  return (
    <div className="container mx-auto flex flex-col items-center justify-center p-8">
      <div className="timer bg-gray-200 p-4 rounded-lg shadow-md text-center">
        {/* Timer visualization */}
        <p className="text-3xl font-bold mb-2">{formatTime(remainingTime)}</p>
        <p className="text-gray-600">{isWork ? "Work" : "Break"}</p>
      </div>
      <div className="controls mt-4 flex justify-center gap-4">
        <button
          className={`rounded-full px-4 py-2 font-bold shadow ${
            isStarted ? "bg-red-500 hover:bg-red-700" : "bg-green-500 hover:bg-green-700"
          }`}
          onClick={handleStartPause}
        >
          {isStarted ? "Pause" : "Start"}
        </button>
        <button className="rounded-full px-4 py-2 font-bold shadow bg-gray-500 hover:bg-gray-700" onClick={handleReset}>
          Reset
        </button>
      </div>
      <div className="settings mt-4 flex flex-col justify-between gap-4">
        <div className="flex items-center gap-2">
          <p className="text-gray-700">Work (min):</p>
          <input
            type="number"
            value={workTime}
            onChange={(e) => setWorkTime(Number(e.target.value))}
            className="rounded-md px-2 py-1 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>
        <div className="flex items-center gap-2">
          <p className="text-gray-700">Break (min):</p>
          <input
            type="number"
            value={breakTime}
            onChange={(e) => setBreakTime(Number(e.target.value))}
            className="rounded-md px-2 py-1 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>
        <div className="flex items-center gap-2">
          <p className="text-gray-700">Long Break (min):</p>
          <input
            type="number"
            value={longBreakTime}
            onChange={(e) => setLongBreakTime(Number(e.target.value))}
            className="rounded-md px-2 py-1 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>
      </div>
    </div>
   );
   
}

export default PomodoroTimer;

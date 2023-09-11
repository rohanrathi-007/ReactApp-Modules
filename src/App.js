import './App.css';

import React from "react";

import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

const App = () => {
  const { 
    transcript, 
    listening, 
    resetTranscript, 
    browserSupportsSpeechRecognition 
  } = useSpeechRecognition();

  if(!browserSupportsSpeechRecognition) {
    return <span>Your Browser doesn't support Speech to Text</span>
  }

  return (
    <div>
      <p>{transcript}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>      
      <p>Microphone: {listening ? 'ON' : 'OFF'}</p>
    </div>
  );
};

export default App;
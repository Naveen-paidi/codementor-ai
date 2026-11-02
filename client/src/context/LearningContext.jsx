import React, { createContext, useContext, useState } from 'react';

const LearningContext = createContext(null);

export const LearningProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('python');
  const [activeTopic, setActiveTopic] = useState(null);
  const [activeLesson, setActiveLesson] = useState(null);
  const [activeQuestion, setActiveQuestion] = useState(null);
  
  // Floating AI Chatbot state and contextual memory
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatContext, setChatContext] = useState({
    language: 'python',
    topicTitle: '',
    currentCode: '',
    currentError: ''
  });

  const updateChatContext = (updates) => {
    setChatContext(prev => ({ ...prev, ...updates }));
  };

  const openChatWithContext = (contextUpdates = {}) => {
    updateChatContext(contextUpdates);
    setIsChatOpen(true);
  };

  return (
    <LearningContext.Provider value={{
      selectedLanguage,
      setSelectedLanguage,
      activeTopic,
      setActiveTopic,
      activeLesson,
      setActiveLesson,
      activeQuestion,
      setActiveQuestion,
      isChatOpen,
      setIsChatOpen,
      chatContext,
      updateChatContext,
      openChatWithContext
    }}>
      {children}
    </LearningContext.Provider>
  );
};

export const useLearning = () => useContext(LearningContext);

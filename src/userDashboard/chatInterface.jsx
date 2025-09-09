import React, { useState, useRef, useEffect } from 'react';
import { Copy, ThumbsDown, ThumbsUp, RefreshCw, Share } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import axiosAuth from '../utils/axiosAuth';
import useSession from '../hooks/useSession';

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [hasStartedChat, setHasStartedChat] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [tempSessionId, setTempSessionId] = useState(null);
  const messagesEndRef = useRef(null);
  const { sessionId } = useParams();
  const navigate = useNavigate();
  const { createSession } = useSession();

  const actionButtons = [
    {
      icon: '⚖️',
      title: "Get Jury Instructions",
      description: "Generate comprehensive jury instruction sets",
      color: "from-[#14b8a6] to-[#0f9b8f]",
      iconColor: '#14b8a6',
      cardClassExtra: 'hover:bg-teal-500/10',
    },
    {
      icon: '📄',
      title: "Draft a Motion",
      description: "Create legal motions and court filings",
      color: "from-[#60a5fa] to-[#3b82f6]",
      iconColor: '#3b82f6',
      cardClassExtra: 'hover:bg-blue-500/10',
    },
    {
      icon: '✅',
      title: "Check Precedents",
      description: "Search through case law and precedents",
      color: "from-[#a78bfa] to-[#8b5cf6]",
      iconColor: '#8b5cf6',
      cardClassExtra: 'hover:bg-purple-500/10',
    },
    {
      icon: '🛡️',
      title: "Analyze Police Report",
      description: "Review and analyze police reports",
      color: "from-[#f472b6] to-[#ec4899]",
      iconColor: '#ec4899',
      cardClassExtra: 'hover:bg-pink-500/10',
    },
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Function to create a session automatically
  const createAutoSession = async () => {
    try {
      const sessionData = await createSession("New Chat");
      setTempSessionId(sessionData.session_id);
      return sessionData.session_id;
    } catch (error) {
      console.error("Failed to create session:", error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    // If no session ID exists, create one automatically
    let currentSessionId = sessionId;
    if (!currentSessionId && !tempSessionId) {
      try {
        currentSessionId = await createAutoSession();
      } catch (error) {
        // If session creation fails, show error and return
        const errorMessage = error.response?.data?.detail || "Sorry, I couldn't create a chat session. Please try again.";
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            text: errorMessage,
          },
        ]);
        setIsLoading(false);
        return;
      }
    }

    if (!hasStartedChat) {
      setHasStartedChat(true);
    }

    const newMessages = [...messages, { role: "user", text: input }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append('session_id', currentSessionId || tempSessionId);
      formData.append('question', input);

      const { data } = await axiosAuth.post('/chatbot/ask', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: data.response || "I've analyzed your query about legal matters. Based on my database of case law and statutes, I can provide you with relevant information and citations. Would you like me to draft a document or provide more specific details?",
        },
      ]);

      // If we created a temporary session and it's successful, redirect to the proper URL
      if (tempSessionId && !sessionId) {
        navigate(`/chat/${tempSessionId}`, { replace: true });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      
      // Show proper error message from server response or generic error
      const errorMessage = error.response?.data?.detail || 
                          error.response?.data?.message || 
                          error.response?.data?.error || 
                          "Sorry, I encountered a server error. Please try again.";
      
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: errorMessage,
        },
      ]);
    } finally {
      setIsLoading(false);
      setInput("");
    }
  };

  const handleActionButtonClick = async (title) => {
    setInput(title);
    
    // If no session exists, create one automatically when clicking action buttons
    if (!sessionId && !tempSessionId) {
      try {
        await createAutoSession();
      } catch (error) {
        console.error("Failed to create session:", error);
      }
    }
  };

  return (
    <div className="w-full mx-auto h-[75vh] flex flex-col bg-[#121926] chat-interface">
      {hasStartedChat && (
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx}>
                <div
                  className={`max-w-[80%] text-sm whitespace-pre-line ${
                    msg.role === "user"
                      ? "ml-auto bg-[#0C131F] p-4 rounded-2xl text-white"
                      : "mr-auto bg-transparent mt-5 text-gray-200 border-b border-[#E3E5EB] pb-5"
                  }`}
                >
                  {msg.text}
                </div>

                {msg.role !== "user" && (
                  <div className="flex items-center gap-4 mt-2 ml-2 text-white ">
                    <ThumbsUp className="hover:text-[#F1750F] transition-colors w-[13px]"/>
                    <ThumbsDown className="hover:text-[#F1750F] transition-colors w-[13px]"/>              
                    <RefreshCw className="hover:text-[#F1750F] transition-colors w-[13px]"/>
                    <Copy className="hover:text-[#F1750F] transition-colors w-[13px]"/>
                    <Share className="hover:text-[#F1750F] transition-colors w-[13px]"/>
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="mr-auto bg-transparent mt-5 text-gray-200 border-b border-[#E3E5EB] pb-5">
                Thinking...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>
      )}

      <div className={`${hasStartedChat ? 'hidden' : 'flex-1 flex flex-col justify-center'}`}>
        <div className="text-center mb-8 px-4">
          <h1 className="text-2xl sm:text-3xl font-semibold mb-3 text-[#e3e8ef]">Hey there, Welcome to BearisterAI</h1>
          <p className="text-sm sm:text-base max-w-2xl mx-auto text-[#9ca3af]">
            I'm Obie—your sleepless, non-billing AI with Supreme Court smarts and a sarcastic law-professor edge.
            Let's dive into the fine print!
          </p>
        </div>

        <div className="px-4 max-w-[740px] mx-auto">
          <form onSubmit={handleSubmit} className="rounded-[22px]" style={{ backgroundColor: 'transparent' }}>
            <div className="flex items-center gap-3">
              <div className="relative flex-1">
                <div
                  className="relative rounded-[18px] px-4 pt-7 pb-5"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.04)',
                  }}
                >
                  <button
                    type="button"
                    className="absolute left-4 bottom-2 w-9 h-9 flex items-center justify-center rounded-full text-gray-300/90 hover:text-white transition-colors"
                    aria-label="add link"
                    style={{ backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
                  >
                    <span>🔗</span>
                  </button>

                  <textarea
                    rows={1}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="✨ Ask Anything..."
                    className="w-full text-[13px] text-white focus:outline-none focus:ring-0 resize-none overflow-hidden min-h-[72px] max-h-[160px] font-medium bg-transparent pb-7 placeholder:text-[#FCFCFD] placeholder:font-medium"
                    style={{
                      height: 'auto',
                    }}
                  />

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="absolute right-3 bottom-2 w-10 h-10 flex items-center justify-center rounded-full focus:outline-none focus:ring-0 shadow-[0_6px_18px_rgba(251,146,60,0.25)] transition-transform duration-150 hover:scale-105 cursor-pointer"
                    aria-label="send"
                    style={{
                      background: 'radial-gradient(86% 93.75% at 50% 100%, #FFAE47 0%, #C7497D 58.08%, #7527AA 100%)',
                      color: 'white',
                      opacity: isLoading ? 0.7 : 1
                    }}
                  >
                    <span>➤</span>
                  </button>
                </div>
              </div>
            </div>
          </form>

          <div className="w-full mx-auto grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
            {actionButtons.map((button, index) => (
              <button
                key={index}
                onClick={() => handleActionButtonClick(button.title)}
                className="group relative overflow-hidden bg-[#1a2232] hover:bg-[#1e293b] border border-[#2d3748] hover:border-[#3b82f6] rounded-[8px] px-1.5 py-2 transition-all duration-150 hover:scale-[1.02] h-auto w-full flex items-center justify-center gap-2"
              >
                <span className="inline-flex w-6 h-6 items-center justify-center rounded-md mb-0" style={{ color: button.iconColor }}>
                  {button.icon}
                </span>
                <span className="text-[12px] font-medium leading-none text-[#e3e8ef] whitespace-nowrap truncate text-center">
                  {button.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {hasStartedChat && (
        <div className="sticky bottom-0 w-full">
          <form onSubmit={handleSubmit} className="rounded-[22px]" style={{ backgroundColor: 'transparent' }}>
            <div className="flex items-center gap-3">
              <div className="relative flex-1">
                <div className="relative rounded-[18px] px-4 pt-7 pb-5" style={{ 
                  backgroundColor: 'rgba(255,255,255,0.05)', 
                  border: '1px solid rgba(255,255,255,0.08)', 
                  boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.04)'
                }}>
                  <button
                    type="button"
                    className="absolute left-4 bottom-2 w-9 h-9 flex items-center justify-center rounded-full text-gray-300/90 hover:text-white transition-colors"
                    aria-label="add link"
                    style={{ backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)'}}
                  >
                    <span className="">🔗</span>
                  </button>

                  <textarea
                    rows={1}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="w-full text-[13px] text-white focus:outline-none focus:ring-0 resize-none overflow-hidden min-h-[72px] max-h-[160px] font-medium bg-transparent pb-7"
                    style={{
                      height: 'auto',
                    }}
                    placeholder="✨ Ask Anything..."
                    disabled={isLoading}
                  />

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="absolute right-3 bottom-2 w-10 h-10 flex items-center justify-center rounded-full focus:outline-none focus:ring-0 shadow-[0_6px_18px_rgba(251,146,60,0.25)] transition-transform duration-150 hover:scale-105 cursor-pointer"
                    aria-label="send"
                    style={{ 
                      background: 'radial-gradient(86% 93.75% at 50% 100%, #FFAE47 0%, #C7497D 58.08%, #7527AA 100%)',
                      color: 'white',
                      opacity: isLoading ? 0.7 : 1
                    }}
                  >
                    <span className="">➤</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatInterface;
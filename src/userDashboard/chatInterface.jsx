import React, { useState, useRef, useEffect } from 'react';
import { Copy, ThumbsDown, ThumbsUp, RefreshCw,Share } from 'lucide-react';

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [hasStartedChat, setHasStartedChat] = useState(false);
  const [showPrompts, setShowPrompts] = useState(false);
  const [filteredPrompts, setFilteredPrompts] = useState([]);
  const messagesEndRef = useRef(null);

  // Dummy prompts data
  const dummyPrompts = [
    "What are the elements of a breach of contract claim?",
    "How do I draft a motion to dismiss?",
    "What's the statute of limitations for personal injury in California?",
    "Can you help me analyze this police report?",
    "What jury instructions are appropriate for a negligence case?",
    "How to respond to a request for production of documents?",
    "What are the requirements for a valid will?",
    "Explain the difference between murder and manslaughter",
    "How to calculate damages in a breach of contract case?",
    "What are the elements of negligence?"
  ];

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

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Filter prompts based on input
  useEffect(() => {
    if (input.length > 1) {
      const filtered = dummyPrompts.filter(prompt => 
        prompt.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredPrompts(filtered);
      setShowPrompts(true);
    } else {
      setShowPrompts(false);
    }
  }, [input]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Mark that chat has started
    if (!hasStartedChat) {
      setHasStartedChat(true);
    }

    // Add user message
    const newMessages = [...messages, { role: "user", text: input }];
    setMessages(newMessages);
    setShowPrompts(false);

    // Dummy assistant reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "I've analyzed your query about legal matters. Based on my database of case law and statutes, I can provide you with relevant information and citations. Would you like me to draft a document or provide more specific details?",
        },
      ]);
    }, 700);

    setInput("");
  };

  const handleActionButtonClick = (title) => {
    setInput(title);
    setShowPrompts(false);
  };

  const handlePromptClick = (prompt) => {
    setInput(prompt);
    setShowPrompts(false);
  };

  return (
    <div className="w-full  mx-auto h-[75vh] flex flex-col bg-[#121926] chat-interface">
      {/* Chat messages container - takes full height when chat has started */}
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

          {/* icons only for bot */}
          {msg.role !== "user" && (
            <div className="flex items-center gap-4 mt-2 ml-2 text-white ">
        
              < ThumbsUp   className="hover:text-[#F1750F] transition-colors w-[13px]"/>
              < ThumbsDown   className="hover:text-[#F1750F] transition-colors w-[13px]"/>              
              < RefreshCw   className="hover:text-[#F1750F] transition-colors w-[13px]"/>
              <Copy   className="hover:text-[#F1750F] transition-colors w-[13px]"/>
              <Share   className="hover:text-[#F1750F] transition-colors w-[13px]"/>
            
            </div>
          )}
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  </div>
)}



      {/* Main content container - your original design */}
      <div className={`${hasStartedChat ? 'hidden' : 'flex-1 flex flex-col justify-center'}`}>
        <div className="text-center mb-8 px-4">
          <h1 className="text-2xl sm:text-3xl font-semibold mb-3 text-[#e3e8ef]">Hey there, Welcome to BearisterAI</h1>
          <p className="text-sm sm:text-base max-w-2xl mx-auto text-[#9ca3af]">
            I'm Obie—your sleepless, non-billing AI with Supreme Court smarts and a sarcastic law-professor edge.
            Let's dive into the fine print!
          </p>
        </div>

        {/* Your original form - unchanged */}
        <div className="px-4 max-w-[740px] mx-auto">
        <form onSubmit={handleSubmit} className="rounded-[22px]" style={{ backgroundColor: 'transparent' }}>
  <div className="flex items-center gap-3">
    <div className="relative flex-1">
      {/* inner input container (lighter card) */}
      <div
        className="relative rounded-[18px] px-4 pt-7 pb-5"
        style={{
          backgroundColor: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.04)',
        }}
      >
        {/* link button inside input (left) */}
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
          className="w-full  text-[13px] text-white focus:outline-none focus:ring-0 resize-none overflow-hidden min-h-[72px] max-h-[160px] font-medium bg-transparent pb-7 placeholder:text-[#FCFCFD] placeholder:font-medium"
          style={{
            height: 'auto',
          }}
        />

        {/* send button inside inner field (right) */}
        <button
          type="submit"
          className="absolute right-3 bottom-2 w-10 h-10 flex items-center justify-center rounded-full focus:outline-none focus:ring-0 shadow-[0_6px_18px_rgba(251,146,60,0.25)] transition-transform duration-150 hover:scale-105 cursor-pointer"
          aria-label="send"
          style={{
            background: 'radial-gradient(86% 93.75% at 50% 100%, #FFAE47 0%, #C7497D 58.08%, #7527AA 100%)',
            color: 'white',
          }}
        >
          <span>➤</span>
        </button>
      </div>
    </div>
  </div>
</form>


          {/* Your original action buttons - unchanged */}
          <div className="w-full  mx-auto grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
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

      {/* Fixed input at bottom for when chat has started */}
      {hasStartedChat && (
        <div className="sticky bottom-0 w-full  ">
          <form onSubmit={handleSubmit} className="rounded-[22px]" style={{ backgroundColor: 'transparent' }}>
            <div className="flex items-center gap-3">
              <div className="relative flex-1">
                {/* inner input container (lighter card) */}
                <div className="relative rounded-[18px] px-4 pt-7 pb-5" style={{ 
                  backgroundColor: 'rgba(255,255,255,0.05)', 
                  border: '1px solid rgba(255,255,255,0.08)', 
                  boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.04)'
                }}>
                  {/* link button inside input (left) */}
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
                    className="w-full  text-[13px] text-white focus:outline-none focus:ring-0 resize-none overflow-hidden min-h-[72px] max-h-[160px] font-medium bg-transparent pb-7"
                    style={{
                      height: 'auto',
                    }}
                     placeholder="✨ Ask Anything..."
                  />

                

                  {/* send button inside inner field (right) */}
                  <button
                    type="submit"
                    className="absolute right-3 bottom-2 w-10 h-10 flex items-center justify-center rounded-full focus:outline-none focus:ring-0 shadow-[0_6px_18px_rgba(251,146,60,0.25)] transition-transform duration-150 hover:scale-105 cursor-pointer"
                    aria-label="send"
                    style={{ 
                      background: 'radial-gradient(86% 93.75% at 50% 100%, #FFAE47 0%, #C7497D 58.08%, #7527AA 100%)',
                      color: 'white'
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
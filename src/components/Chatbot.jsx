import { useState, useRef, useEffect } from 'react'
import { getResponse } from '../data/chatResponses'

const WELCOME = {
  id: 0,
  from: 'bot',
  text: "Bonjour ! 👋 Je suis l'assistant de **Sky Blue Corporation**.\n\nComment puis-je vous aider ? Je connais nos services, projets, tarifs et bien plus.",
  quickReplies: ['Nos services', 'Voir les projets', 'Tarifs & délais', 'Nous contacter'],
}

let msgId = 1

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([WELCOME])
  const [quickReplies, setQuickReplies] = useState(WELCOME.quickReplies)
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [showBadge, setShowBadge] = useState(true)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, typing])

  useEffect(() => {
    if (open) {
      setShowBadge(false)
      setTimeout(() => inputRef.current?.focus(), 300)
    }
  }, [open])

  function sendMessage(text) {
    if (!text.trim()) return
    const userMsg = { id: msgId++, from: 'user', text: text.trim() }
    setMessages((prev) => [...prev, userMsg])
    setQuickReplies([])
    setInput('')
    setTyping(true)

    setTimeout(() => {
      const { answer, quickReplies: qr } = getResponse(text)
      setTyping(false)
      setMessages((prev) => [...prev, { id: msgId++, from: 'bot', text: answer }])
      setQuickReplies(qr || [])
    }, 900 + Math.random() * 600)
  }

  function handleKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage(input)
    }
  }

  function handleQuickReply(label) {
    sendMessage(label)
  }

  function renderText(text) {
    return text.split('\n').map((line, i) => (
      <span key={i}>
        {line}
        {i < text.split('\n').length - 1 && <br />}
      </span>
    ))
  }

  return (
    <>
      <div className={`chatbot-window${open ? ' open' : ''}`} role="dialog" aria-label="Assistant Sky Blue">
        <div className="chatbot-header">
          <div className="chatbot-avatar">🤖</div>
          <div className="chatbot-header-info">
            <strong>Assistant Sky Blue</strong>
            <span>En ligne · répond en quelques secondes</span>
          </div>
          <button className="chatbot-close" onClick={() => setOpen(false)} aria-label="Fermer">✕</button>
        </div>

        <div className="chatbot-messages">
          {messages.map((msg) => (
            <div key={msg.id} className={`chat-msg ${msg.from}`}>
              {msg.from === 'bot' && <div className="chat-msg-avatar">SB</div>}
              <div className="chat-bubble">{renderText(msg.text)}</div>
            </div>
          ))}

          {typing && (
            <div className="chat-msg bot">
              <div className="chat-msg-avatar">SB</div>
              <div className="typing-indicator">
                <span /><span /><span />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {quickReplies.length > 0 && (
          <div className="chatbot-quick-replies">
            {quickReplies.map((qr) => (
              <button
                key={qr}
                className="quick-reply-btn"
                onClick={() => handleQuickReply(qr)}
              >
                {qr}
              </button>
            ))}
          </div>
        )}

        <div className="chatbot-input-area">
          <input
            ref={inputRef}
            className="chatbot-input"
            placeholder="Posez votre question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            maxLength={300}
          />
          <button
            className="chatbot-send"
            onClick={() => sendMessage(input)}
            aria-label="Envoyer"
            disabled={!input.trim()}
          >
            ➤
          </button>
        </div>
      </div>

      <button
        className="chatbot-toggle"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Fermer le chat' : 'Ouvrir le chat'}
      >
        {open ? '✕' : '💬'}
        {showBadge && !open && <span className="chat-badge">1</span>}
      </button>
    </>
  )
}

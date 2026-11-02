import { useState } from 'react'
import { MessageCircle, Send, X, Sparkles } from 'lucide-react'
import './AIAssistant.css'

function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: 'Namaste! Welcome to Shree Jewels. I can help you explore our jewellery collection.',
    },
  ])

  const handleSubmit = (event) => {
    event.preventDefault()

    const text = message.trim()
    if (!text) return

    setMessages((current) => [
      ...current,
      { role: 'user', text },
      {
        role: 'assistant',
        text: 'Thanks for your question! Our jewellery assistant will be connected soon.',
      },
    ])
    setMessage('')
  }

  return (
    <div className="ai-assistant">
      {isOpen && (
        <section className="ai-chat" aria-label="Shree Jewels AI assistant">
          <div className="ai-chat-header">
            <div className="ai-chat-title">
              <span className="ai-avatar">
                <Sparkles size={18} />
              </span>
              <div>
                <h2>Shree Assistant</h2>
                <p>Jewellery help desk</p>
              </div>
            </div>

            <button
              className="ai-close"
              type="button"
              aria-label="Close chat"
              onClick={() => setIsOpen(false)}
            >
              <X size={19} />
            </button>
          </div>

          <div className="ai-chat-messages" aria-live="polite">
            {messages.map((item, index) => (
              <p
                className={`ai-message ${item.role}`}
                key={`${item.role}-${index}`}
              >
                {item.text}
              </p>
            ))}
          </div>

          <form className="ai-chat-form" onSubmit={handleSubmit}>
            <input
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Ask about jewellery..."
              aria-label="Your message"
            />
            <button type="submit" aria-label="Send message">
              <Send size={18} />
            </button>
          </form>
        </section>
      )}

      <button
        className="ai-float-button"
        type="button"
        aria-label={isOpen ? 'Close AI assistant' : 'Open AI assistant'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <X size={23} /> : <MessageCircle size={23} />}
        {!isOpen && <span>Ask Shree</span>}
      </button>
    </div>
  )
}

export default AIAssistant
"use client"

import { useState } from "react"

export default function ChatModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Botón flotante para abrir el chat */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-blue-600 transition"
        >
          💬 Chat
        </button>
      )}

      {/* Modal del chat */}
      {isOpen && (
        <div className="fixed bottom-[5px] right-4 w-[350px] h-[500px] bg-white border shadow-lg rounded-lg flex flex-col">
          <div className="bg-blue-500 text-white p-3 flex justify-between items-center">
            <span>Asistente Virtual</span>
            <button onClick={() => setIsOpen(false)} className="text-lg">
              ✖
            </button>
          </div>
          <iframe className="flex-1 border-none" src="https://ai-chatbot.softbox.mx/" title="Chat"></iframe>
        </div>
      )}
    </>
  )
}


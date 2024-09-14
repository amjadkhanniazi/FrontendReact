import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';

function App() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const socketRef = useRef(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Connect to the server
    socketRef.current = io('http://localhost:5000');

    // Fetch initial messages
    fetchMessages();

    // Listen for new messages
    socketRef.current.on('message', (message) => {
      setMessages(prevMessages => [message, ...prevMessages]);
    });

    // Listen for deleted messages
    socketRef.current.on('messageDeleted', (deletedId) => {
      setMessages(prevMessages => prevMessages.filter(msg => msg._id !== deletedId));
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const fetchMessages = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/messages');
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    try {
      const response = await fetch('http://localhost:5000/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: newMessage }),
      });

      if (response.ok) {
        setNewMessage('');
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/messages/${id}`, {
        method: 'DELETE',
      });
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Real-time Chat</h1>
      <div style={{ height: '60vh', overflowY: 'auto', display: 'flex', flexDirection: 'column-reverse', border: '1px solid #ccc', padding: '10px', marginBottom: '20px' }}>
        {messages.map((message) => (
          <div key={message._id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <div style={{ background: '#f0f0f0', padding: '10px', borderRadius: '5px', maxWidth: '80%' }}>
              <p>{message.text}</p>
              <small style={{ fontSize: '0.8em', color: '#666' }}>
                {new Date(message.timestamp).toLocaleString()}
              </small>
            </div>
            <button onClick={() => handleDelete(message._id)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              🗑️
            </button>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSubmit} style={{ display: 'flex' }}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          style={{ flexGrow: 1, marginRight: '10px', padding: '5px' }}
        />
        <button type="submit" style={{ padding: '5px 10px' }}>Send</button>
      </form>
    </div>
  );
}

export default App;
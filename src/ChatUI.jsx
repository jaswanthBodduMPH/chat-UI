import React, { useState } from 'react';

const ChatUI = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Yaar, it’s been so long!', user: 'User 1' },
    { id: 2, text: 'How have you been?', user: 'User 1' },
    { id: 3, text: 'I know, yaar! It’s been ages!', user: 'User 2' },
    { id: 4, text: 'I’m doing good, just busy with work.', user: 'User 2' },
    { id: 5, text: 'Tum kaise ho?', user: 'User 1' },
    { id: 6, text: 'Same here, work has been crazy.', user: 'User 1' },
    { id: 7, text: 'Finally got some time to catch up.', user: 'User 2' },
    { id: 8, text: 'How’s everything at home?', user: 'User 2' },
    { id: 9, text: 'Everything’s good at home.', user: 'User 1' },
    { id: 10, text: 'Mom keeps asking about you.', user: 'User 1' },
    { id: 11, text: 'She says you haven’t come over in ages!', user: 'User 2' },
    { id: 12, text: 'Haha, I know! I’ve been so caught up with office and everything.', user: 'User 2' },
    { id: 13, text: 'But I’ll definitely visit soon.', user: 'User 1' },
    { id: 14, text: 'That’s great! I’ve missed the old times, yaar.', user: 'User 2' },
    { id: 15, text: 'Remember those late-night maggi sessions and chai?', user: 'User 1' },
    { id: 16, text: 'Of course, yaar! Those were the best.', user: 'User 2' },
    { id: 17, text: 'Now, it’s all about work and deadlines.', user: 'User 1' },
    { id: 18, text: 'True! By the way, how’s your new job going?', user: 'User 2' },
    { id: 19, text: 'Everything alright?', user: 'User 1' },
    { id: 20, text: 'It’s going well, but the pressure is crazy.', user: 'User 1' },
    { id: 21, text: 'But it’s fun, though. Kaise chal raha hai tera kaam?', user: 'User 2' },
    { id: 22, text: 'Same here. Sometimes I feel like I need a break!', user: 'User 2' },
    { id: 23, text: 'Ab toh weekend bhi kaam mein nikal jaata hai!', user: 'User 1' },
    { id: 24, text: 'I totally get that!', user: 'User 2' },
    { id: 25, text: 'We should plan something soon, maybe a weekend getaway?', user: 'User 1' },
    { id: 26, text: 'That sounds awesome!', user: 'User 2' },
    { id: 27, text: 'We’ll plan something soon.', user: 'User 1' },
    { id: 28, text: 'Let’s catch up before that though.', user: 'User 1' },
    { id: 29, text: 'For sure! It’ll be great to meet and relax for a bit.', user: 'User 2' },
    { id: 30, text: 'Yes, I’m really looking forward to it.', user: 'User 1' },
    { id: 31, text: 'Let’s fix a date soon!', user: 'User 2' },
    { id: 32, text: 'Done! I’ll call you later this week, let’s finalize the details.', user: 'User 1' },
  ]);

  const [newMessage, setNewMessage] = useState('');
  const [currentUser, setCurrentUser] = useState('User 1'); // Toggle between 'User 1' and 'User 2'

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { id: messages.length + 1, text: newMessage, user: currentUser }]);
      setNewMessage('');
      setCurrentUser(currentUser === 'User 1' ? 'User 2' : 'User 1'); // Toggle user
    }
  };

  return (
    <div className="chat-container">
      <h1 className="chat-heading">Simple Chat UI</h1>
      <div className="chat-box">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`chat-message ${message.user === 'User 1' ? 'user1' : 'user2'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-input-container">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message"
          className="chat-input"
        />
        <button onClick={handleSendMessage} className="chat-send-button">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatUI;

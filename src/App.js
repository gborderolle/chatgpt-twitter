import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';  // Importar el componente Sidebar
import './App.css';

// Componentes de ejemplo para las "páginas"
const Home = () => {
  const [tweets, setTweets] = useState([]);
  const [newTweet, setNewTweet] = useState('');

  const handleTweet = () => {
    if (newTweet) {
      setTweets([...tweets, { text: newTweet, likes: 0, retweets: 0, replies: [] }]);
      setNewTweet('');
    }
  };


  const handleLike = (index) => {
    const newTweets = [...tweets];
    newTweets[index].likes += 1;
    setTweets(newTweets);
  };

  const handleRetweet = (index) => {
    const newTweets = [...tweets];
    newTweets[index].retweets += 1;
    setTweets(newTweets);
  };

  const handleReply = (index, replyText) => {
    const newTweets = [...tweets];
    newTweets[index].replies.push(replyText);
    setTweets(newTweets);
  };


  return (
    <div>
      <header className="App-header">
        <h1>Mini Twitter</h1>
      </header>
      <div className="tweet-box">
        <textarea
          rows="4"
          placeholder="¿Qué está pasando?"
          value={newTweet}
          onChange={(e) => setNewTweet(e.target.value)}
        ></textarea>
        <button onClick={handleTweet}>Tweet</button>
      </div>
      <div className="tweets-list">
        {tweets.map((tweet, index) => (
          <div key={index} className="tweet">
            {tweet.text}
            <button onClick={() => handleLike(index)}>Like {tweet.likes}</button>
            <button onClick={() => handleRetweet(index)}>Retweet {tweet.retweets}</button>
            <div>
              <input type="text" placeholder="Escribe una respuesta..." />
              <button onClick={() => handleReply(index, 'Texto de la respuesta')}>Responder</button>
            </div>
            <div className="replies">
              {tweet.replies.map((reply, replyIndex) => (
                <div key={replyIndex}>{reply}</div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

const Explore = () => <div>Explorar</div>;
const Notifications = () => <div>Notificaciones</div>;
const Messages = () => <div>Mensajes</div>;
const Profile = () => <div>Perfil</div>;

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

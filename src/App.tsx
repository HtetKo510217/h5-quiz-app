import './App.css';
import LeaderBoard from './components/user-quiz-result/LeaderBoard';
import Quiz from './components/Quiz/Quiz';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Quiz />} />
        <Route path='/leaderboard' element={<LeaderBoard />} />
      </Routes>
      <Navigation />
    </div>
  );
}

export default App;
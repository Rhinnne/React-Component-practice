import './App.css';
import VideoPlayer from './VideoPlayer';
import Recommendations from './Recommendations';
import Comments from './Comments';

function App() {
  return (
    <div className="App">
      <div className='content'>
        <div className='main-content'>
          <VideoPlayer />
          <Comments />
        </div>
        <div className='side-content'>
          <Recommendations />
        </div>
      </div>
    </div>
  );
}

export default App;

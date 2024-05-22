import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import { youtubeVideo } from './data';

function App() {
  const [index, setIndex] = useState(0);

  function nextVideo() {
    if (index >= youtubeVideo.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  
  function previousVideo() {
    if (index <= 0) {
      setIndex(youtubeVideo.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

   return (
    <div>
       <div class='App'>
    <img src={youtubeVideo[index].img} alt={'Image of' + youtubeVideo[index].name}></img>
    <a href={youtubeVideo[index].link}>{youtubeVideo[index].name}</a>
    <p>{youtubeVideo[index].content}</p>
  </div>
      <div>
        <button onClick={previousVideo}>Back</button>
        <button onClick={nextVideo}>Next</button>
      </div>
    </div>   
  );
}

export default App;

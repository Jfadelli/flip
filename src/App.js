import {useAudio} from 'react-use';
import mp3File from './static/flipacoin.mp3'

import './App.css';

import headsImg from './static/heads.png'
import tailsImg from './static/tails.png'



function App() {
  const [audio, state, controls, ref] = useAudio({
    src: mp3File,
    autoPlay: false,

  });

  const getRandomInt = (max) => {
    let num = Math.floor(Math.random() * max)
    console.log(num)
    return num;
  }


  const Flip = () => {
    controls.volume(.05)
    controls.play()
    if (getRandomInt(2) > .5) {
      console.log()
      if (document.getElementById('coin')) {
        let container = document.querySelector('.coin-container')
        container.removeChild(container.childNodes[0])
      }
      const heads = document.createElement('img')
      heads.src = headsImg
      heads.className = 'heads-fade-in'
      heads.id = 'coin'
      document.querySelector('.coin-container').appendChild(heads)
    } else {

      if (document.getElementById('coin')) {
        let container = document.querySelector('.coin-container')
        container.removeChild(container.childNodes[0])
      }
      const tails = document.createElement('img')
      tails.src = tailsImg
      tails.className = 'tails-fade-in'
      tails.id = 'coin'
      document.querySelector('.coin-container').appendChild(tails)
    }
  }



  return (

    <div className="App">
{audio}
      <div className='wrapper'>
        <div className='title-div'>
          <h1 className="title">flip a coin</h1>
        </div>
        <div className="button-div">

          <button className='flip-button' onClick={Flip}> flip me</button>
        </div>
        <div className='coin-container'>
          {/* <img className = 'heads'  src={heads} alt='coin heads' />
            <img className = 'tails' src={tails} alt='coin tails' /> */}
        </div>
      </div>
    </div>
  );
}

export default App;

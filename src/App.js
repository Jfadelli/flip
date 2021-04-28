import './App.css';
import headsImg  from './static/heads.png'
import tailsImg from './static/tails.png'


function App() {

  const getRandomInt = (max) => {
    let num = Math.floor(Math.random() * max)
    console.log(num)
    return num;
  }

 const Flip = () => {
    if (getRandomInt(2) > .5){
      console.log()
      if(document.getElementById('coin')){
        let container = document.querySelector('.coin-container')
        container.removeChild(container.childNodes[0])
      }
      const heads = document.createElement('img')
      heads.src = headsImg
      heads.className = 'heads-fade-in'
      heads.id = 'coin'
      document.querySelector('.coin-container').appendChild(heads)
    } else {

      if(document.getElementById('coin')){
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
      <header className="App-header">
      <div className='wrapper'>
        <div className='title-div'>
      <h1 className="title">flip a coin...</h1>
      </div>
      <button className='flip-button' onClick={Flip}> flip me</button>

            <div className='coin-container'>
            {/* <img className = 'heads'  src={heads} alt='coin heads' />
            <img className = 'tails' src={tails} alt='coin tails' /> */}
            </div>
        </div>


      </header>
    </div>
  );
}

export default App;

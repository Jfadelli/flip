import heads  from '../static/heads.png'
import tails from '../static/tails.png'


const Coin = () => {
    return (
        <div>
            <div className='coin-container'>
            <img src={heads} alt='coin heads' />
            <img src={tails} alt='coin tails' />
            </div>
        </div>
    ) 
}

export default Coin
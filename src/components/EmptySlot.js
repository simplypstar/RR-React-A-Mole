import { useEffect } from "react"
import MoleHill from '../molehill.png'
//import App from './App';

const EmptySlot = (props) => {

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}} src={MoleHill} alt='Mole Hill pic' />
        </div>
    )
}

export default EmptySlot
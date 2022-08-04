import {useState, useEffect} from 'react'

function Pomodoro () {

    const [minutes , setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [startButton , setStartButton] = useState(false)

    // useEffect(() => {

// use setInterval to change minute 
    //     const interval = setInterval(() => {
    //      setMinutes((prevCounter) => prevCounter -1)
    //     }, 60000);
      
        
    //   }, []);
      

      const handleClick = () => {
        setInterval(() => {
            setMinutes((prevCounter) => prevCounter -1)
           }, 60000);
      }
      
    return (
        <div className="Pomodoro">
           <div className='timer'>
             {minutes} : {seconds}
            </div> 
            <button onClick={handleClick}> Start </button> 
        </div>
    )
}

export default Pomodoro 
import './TimestampBox.css'

const TimestampBox = ({ timestamp }) => {

  return (

    <div className="timestamp-box">

      <span>Timestamp: {timestamp}</span>

      <span>Local Time: {new Date(timestamp * 1000).toLocaleTimeString()}</span>

    </div>

  )

}

export default TimestampBox
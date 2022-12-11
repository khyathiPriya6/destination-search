import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails

  return (
    <div className="destination-item-bg">
      <img
        src={imgUrl}
        className="destination-item-img"
        alt="destinationsList"
      />
      <p className="destination-item-heading">{name}</p>
    </div>
  )
}

export default DestinationItem

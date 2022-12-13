import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails

  return (
    <li className="destination-item-bg">
      <img src={imgUrl} className="destination-item-img" alt={name} />
      <p className="destination-item-heading">{name}</p>
    </li>
  )
}

export default DestinationItem

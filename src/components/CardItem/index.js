// Write your code here.
import './index.css'

const CardItem = props => {
  const {CardItemDetails} = props
  const {title, description, imgUrl, className} = CardItemDetails

  return (
    <li className={`${className} list-card-container`}>
      <h1 className="heading">{title}</h1>
      <p className="description">{description}</p>
      <div className="image-container">
        <img className="image" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem

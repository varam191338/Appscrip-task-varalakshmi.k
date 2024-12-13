import './index.css'

const ProductItem = props => {
  const {details} = props
  const {image, title} = details

  return (
    <li className="item-container">
      <img src={image} alt="product" className="item" />
      <p>{title}</p>
    </li>
  )
}

export default ProductItem

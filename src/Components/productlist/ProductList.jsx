import "./productlist.css"
import Product from "../product/Product"
import {products} from "../../data"

const ProductList = () => {
  return (
    <div className="pl">
        <div className="pl-texts">
            <div className="pl-title">Create & Inspire.It's Prateek</div>
            <p className="pl-desc">Here's a glimpse of my accomplishments: a collection of valuable certifications that showcase my dedication, expertise, and adaptability. These certifications are more than just pieces of paper; they embody my commitment to excellence and my readiness to excel in the ever-evolving landscape of web development.</p>
        </div>
        <div className="pl-list">
          {products.map(item => (
            <Product key = {item.id} img = {item.img} link= {item.link}/>
          ))}
        </div>
    </div>
  )
}

export default ProductList
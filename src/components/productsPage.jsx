import ItemCard from "./itemCard"
import './../css/product.css'

const ProductPages = () =>{
    let value = true
    if (value === true){
        return(
            <div className="productLand">
                <ItemCard></ItemCard>
                <ItemCard></ItemCard>
                <ItemCard></ItemCard>
                <ItemCard></ItemCard>
            </div>
        )
    }
}

export default ProductPages
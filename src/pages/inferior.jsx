
import ProductList from '../components/productList'; 

function Inferior (){
    return(
        <>
            <h2>Soy la página de las prendas inferiores</h2>
            <div className='itemContainer'>
                <ProductList 
                    itemid = 'leI9tEOHwCrzI913AT6v' 
                />
                <ProductList 
                    itemid = 'vcEOw8stQLOUGa3Dbk5i' 
                /> 
                <ProductList 
                    itemid = 'pWQEnwvMSjtexkwIA6KI' 
                />  
            </div>
        </>
    )
} 

export default Inferior
import ProductList from "../components/productList"

function Zapatillas (){
    return(
        <>
            <h2>Soy la página del calzado</h2>
            <div className='itemContainer'>
                    <ProductList 
                        itemid = 'f1qlcTThrEYsVwvgQO7z' 
                    />
                    <ProductList 
                        itemid = 'ibq7MueDyb9k0AWLgP7z' 
                    /> 
                    <ProductList 
                        itemid = 'JRIt0a5z98hqtaMjAdVv'  
                    />  
            </div>
        </>   
    )
} 

export default Zapatillas
import ProductList from "../components/productList"


function Superior (){
    return(
        <>
            <h2>Soy la página de las prendas superiores</h2>
            <div className='itemContainer'>
                    <ProductList 
                        itemid = 'qbXBSS3nekApHHCAHvQz' 
                    />
                    <ProductList 
                        itemid = 'JCKz1ZonXVOyt1MzufVt' 
                    /> 
                    <ProductList 
                        itemid = 'CUoFM2Psyio3f6DD9zVZ'  
                    />  
            </div>
        </>    
    )
} 

export default Superior
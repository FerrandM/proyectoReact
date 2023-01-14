import AddItem from "./addItem"


const Itemcard = (props )=>{
    
    return(
        <div className="card">
            <h3>{props.title}</h3>
            <p>{props.des}</p>
            <h3>{props.price}</h3>
            <AddItem
                // cb = {()=>{
                //     props.itemId
                // }}
            />
        </div>
    )
}

export default Itemcard
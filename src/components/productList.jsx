import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useState } from 'react'
import { useEffect } from 'react'
import Itemcard from './itemCard'
import AddItem from './addItem'


const ProductList = (props) =>{
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [precio, setPrecio] = useState(0)
    const [carroP, setCarroP] = useState(0)
    const handleOnCLick = (e)=>{
        setCarroP(carroP+1)
    }

    useEffect(()=>{
        const db = getFirestore()

        const camisaRef = doc (db, 'products', props.itemid )
         getDoc(camisaRef)
            .then((snapshot)=>{
                if (snapshot.exists){
                    console.log(snapshot.data());
                    console.log('categoryid:', snapshot.data().title);

                    setName(snapshot.data().title) 
                    setDesc(snapshot.data().des)
                    setPrecio(snapshot.data().price)

                                                         
                }
                
            })
    }, [])

    console.log(name);
    return(
        <Itemcard
            title = {name}
            des = {desc}
            price = {'$' + precio}
        >    
        </Itemcard>
    )
}
     
export default ProductList
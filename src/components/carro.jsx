
import { collection, getFirestore, addDoc } from 'firebase/firestore'

const sendOrder = ()=>{
    const order = {
        buyer: {name: props.name, email: props.email, direction: props.direction},
        items: [{name: props.itemname, price: props.itemprice}]
    }
    const db = getFirestore()
    const orderCollect = collection(db, 'orders')
    addDoc( orderCollect, order).then(({ id }) => setOrderId(id))
}

export default sendOrder
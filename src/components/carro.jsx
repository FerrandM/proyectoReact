
import { collection, getFirestore } from 'firebase/firestore'

function Cart (props){
    const order = {
        buyer: {name: props.name, email: props.email, direction: props.direction},
        items: [{name: props.itemname, price: props.itemprice}]
    }
    const db = getFirestore()
    const orderCollect = collection(db, 'orders')
    // addDoc( orderCollect, order).then(({ id }) => setOrderId(id))
}

export default Cart
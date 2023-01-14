import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const CartWidget = (props)=>{
    return(
        <div className="cart-widget">
            <FontAwesomeIcon icon={faCartShopping} size="2x" color="white" />
            <div className="qty-display">{props.qty}</div>
        </div>
    )
}

export default CartWidget
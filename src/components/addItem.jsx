import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const AddItem = () => {
    //     clase = 'agregarItem'
    //     sumAg = 'agregar'
    // }
    // else{
    //     clase = 'sumarItem'
    //     sumAg = <FontAwesomeIcon icon={faPlus} size="2x" color="white" />        
    // }
    return(
        <button onClick={()=>{console.log('sumo este producto');}} className='agregarItem'> Agregar artículo</button>
    )
}

export default AddItem
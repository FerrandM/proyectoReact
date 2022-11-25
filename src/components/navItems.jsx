const NavItem = ({seleccion})=>{
    return(
            <li style={{width:"100%", height:"60px", display:"flex", justifyContent:"center", alignItems:"center"}}>
                <a href="#">{seleccion}</a>
            </li>
    )
}

export default NavItem
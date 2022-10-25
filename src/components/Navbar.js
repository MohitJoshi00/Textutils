import React from 'react'

export default function Navbar(props) {
    
  return (

<nav className=  {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Home</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>  */}
     
      </ul>

{/* custom theme */}
{/* <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Custom Theme
  </button>
  <div className="dropdown-menu" >
  <div className=" d-flex flex-column align-items-center justify-content-center">
  <p className="dropdown-item text-center" onClick={()=>props.customTheme("black")} style={{backgroundColor:"#1b191e", height:"35px", width:"70px",color:"white"}}>Black</p>
  <p className="dropdown-item text-center" onClick={()=>props.customTheme("blue")} style={{backgroundColor:"#0e1726", height:"35px", width:"70px",color:"white"}}>Blue</p>
  <p className="dropdown-item text-center" onClick={()=>props.customTheme("purple")} style={{backgroundColor:"#141116", height:"35px", width:"70px",color:"white"}}>Purple</p>
  </div>
  </div>
</div> */}

      <div className={` text-${props.mode==='light'?'dark':'light'}`}>
   <i className="fas fa-moon mx-1 fa-2x  "  onClick={props.toggleMode}  id="flexSwitchCheckDefault"/>

    {/* text for mode change */}
  {/* {props.mode === "dark" ?"Light":"Dark"} Mode  */} 
  </div>

    </div>
  
  </div>
</nav>
  )

}

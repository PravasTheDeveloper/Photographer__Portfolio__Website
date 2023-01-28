import React, { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from "react-scroll";

function NavigationBar() {

    const [NavBarMobile, setNavBarMobile] = useState(false)
    const [color, setcolor] = useState("transparent")
    const [textColor, settextColor] = useState("white")

    useEffect(() => {
        const changeColor = () =>{
        if(window.scrollY >= 300){
            setcolor("#ffffff")
            settextColor("#000000") 
        }else{
            setcolor("transparent")
            settextColor("#ffffff") 
        }
    }

        window.addEventListener("scroll",changeColor)
    }, [])

    

  return (
    <>
      <div style={{backgroundColor:`${color}`}} className="w-screen duration-300 h-16 bg-white flex items-center fixed px-5 sm:px-0">
        <div style={{color:`${textColor}`}} className="container h-full mx-auto flex items-center justify-between ">


          {/* Logo Section */}


          <div className="Logo__Section text-xl font-bold">Photos .</div>


          {/* Menu */}
          <div className="h-full hidden sm:flex">
            <ul className="h-full flex items-center">
                <Link to="Home" spy={true} smooth={true} offset={0} duration={500}  className="cursor-pointer">Home</Link>
                <Link to="Gallary" spy={true} smooth={true} offset={0} duration={500} className="mx-10 cursor-pointer">Gallary</Link>
                <Link to="Pricing" spy={true} smooth={true} offset={0} duration={500} className="mr-10 cursor-pointer">Pricing</Link>
                <Link to="Contanct" spy={true} smooth={true} offset={0} duration={500} className="cursor-pointer" >Contact</Link>
            </ul>
          </div>


          {/*  */}
            
            <div className="sm:hidden">
                <Bars3Icon className="w-7" onClick={()=>setNavBarMobile(true)} />
            </div>
          {/*  */}

          <div className={NavBarMobile == true ? "absolute top-0 left-0 w-full h-screen custom_nav_background font-bold sm:hidden duration-300 ease-in":"absolute top-0 left-[-1000px] ease-out duration-300 w-full h-screen custom_nav_background sm:hidden"} >
            <ul className="h-full flex flex-col justify-center items-center text-white relative">
                <Link to="Home" spy={true} smooth={true} offset={0} duration={1000} onClick={()=>{setNavBarMobile(false)}}>Home</Link>
                <Link to="Gallary" spy={true} smooth={true} offset={0} duration={1000} className="py-10" onClick={()=>{setNavBarMobile(false)}}>Gallary</Link>
                <Link to="Pricing" spy={true} smooth={true} offset={0} duration={1000} className="pb-10" onClick={()=>{setNavBarMobile(false)}}>Pricing</Link>
                <Link to="Contanct" spy={true} smooth={true} offset={0} duration={1000} onClick={()=>{setNavBarMobile(false)}}>Contact</Link>
                
                <li><XMarkIcon className="text-white w-6 top-10 absolute right-10" onClick={()=>setNavBarMobile(false)} /></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavigationBar;

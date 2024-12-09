
import Hero from "./Components/Hero";
import Range from "./Components/Range";
import Products from "./Components/Products";
import Carasol from "./Components/Carasol";
import Galeray from "./Components/Galeray";



export default function Home() {
  let rang=[
    {
      img:'/c1.png',
      des:'Dining',
    },
    {
      img:'/c2.png',
      des:'Living',
    },
    {
      img:'/c3.png',
      des:'Bedroom',
    }
  ]
  let product=[
    {
      img:'/p1.png',
      title:'Syltherine',
      des:'Stylish cafe chair',
      price:'Rp 2.500.000',
      sale:'Rp 3.500.000',
      off:'-30%',
      disp1:'hidden',
      disp2:'hidden',
      disp3:'block',
      key:'1'
    },
    {
      img:'/p2.png',
      title:'Levoisa',
      des:'Stylish cafe chair',
      price:'Rp 2.500.000',
      sale:'Rp 3.500.000',
      off:'-30%',
      disp1:'hidden',
      disp2:'block',
      disp3:'block',
      key:'2'
    },
    {
      img:'/p3.png',
      title:'Lolito',
      des:'Luxury big sofa',
      price:'Rp 7.000.000',
      sale:'Rp 14.000.000',
      off:'-50%',
      disp1:'block',
      disp2:'hidden',
      disp3:'hidden',
      key:'3'
    },
    {
      img:'/p4.png',
      title:'Respira',
      des:'Outdoor bar table and stool',
      price:'Rp 500.000',
      sale:'Rp 3.500.000',
      off:'-30%',
      disp1:'block',
      disp2:'hidden',
      disp3:'hidden',
      key:'4'
    },
    {
      img:'/p5.png',
      title:'Syltherine',
      des:'Stylish cafe chair',
      price:'Rp 2.500.000',
      sale:'Rp 3.500.000',
      off:'-30%',
      disp1:'hidden',
      disp2:'hidden',
      disp3:'hidden',
      key:'5'
    },
    {
      img:'/p6.png',
      title:'Syltherine',
      des:'Stylish cafe chair',
      price:'Rp 2.500.000',
      sale:'Rp 3.500.000',
      off:'-30%',
      disp1:'hidden',
      disp2:'block',
      disp3:'block',
      key:'6'
    },
    {
      img:'/p7.png',
      title:'Syltherine',
      des:'Stylish cafe chair',
      price:'Rp 2.500.000',
      sale:'Rp 3.500.000',
      off:'-30%',
      disp1:'block',
      disp2:'hidden',
      disp3:'hidden',
      key:'7'
    },
    {
      img:'/p5.png',
      title:'Syltherine',
      des:'Stylish cafe chair',
      price:'Rp 2.500.000',
      sale:'Rp 3.500.000',
      off:'-30%',
      disp1:'hidden',
      disp2:'block',
      disp3:'hidden',
      key:'8'
    }
  ]
  return (
   <div className=" lg:w-[1440px]">
   <Hero />
   <Range rang={rang}/>
   <Products product={product}/>
   <Carasol />
   <Galeray />
  
   </div>
  );
}

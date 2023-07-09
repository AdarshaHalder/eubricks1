import React from "react";
// import "../node_modules/bootstap/dist/css/bootstap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Grid from '@mui/material/Grid';


import { PaperClipIcon } from "@heroicons/react/24/outline";
import Searchbar from "../Body/Searchbar";
import CardCategory from "../Body/Card";
const App =() =>{
    return <React.Fragment>
      <div className="feed mt-4 px-2 md:px-0  xl:ml-[250px]  sm:ml-[170px]  w-[930px]">

    
        <h1> <PaperClipIcon className="h-10 w-10 text-gray-500" /></h1>
        <Searchbar/>
        <div class="container  p-2">


       <div className=" flex  gap-5">
       <div className="">
      <CardCategory title="College studies 👨‍💻" des="a" label="successfull"/>
    </div>
    <div className="">
    <CardCategory title="Web Devlopment 🌐" des="a" label="succesfull"/>
    </div>
    <div className="">
    <CardCategory title="Placement preparation" des="a" label="succesfull"/>
    </div>
    

   
       </div> 
       {/* //for mobile */}
      
  {/* <div class="row flex">
    <div className="">
      <Card title="A" des="a"/>
    </div>
    <div className="">
    <Card title="A" des="a"/>
    </div>
    <div className="">
    <Card title="A" des="a"/>
    </div>
  </div> */}
</div></div>
    </React.Fragment>
};
export default App;
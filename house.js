import React,{Component} from "react";
import freindship from './components/images/friendship.jpg';
import sh2 from './components/images/sh2.jpg';
import sh3 from './components/images/sh3.jpg';
import './house.css'
class House extends Component{
    render(){
        return(
           <div class="q">
           <h1 class="e">Shop with us!</h1>
            <img src={freindship} width={250} height={250} class="b"></img>
           <img src={sh3} width={250} height={250} class="b"></img>
            <img src={sh2} width={250} height={250} class="c"></img>
            </div>
        
        );
    }
}
export default House;
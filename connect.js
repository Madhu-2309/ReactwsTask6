import React,{Component} from 'react';
class Connect extends Component{
    render(){
        return(
            <div>
                <div>
                    <center><h1>Connect with us!</h1></center>
                    <input type="text" placeholder='Name' value="Name" width="30%"/><br/><br/>
                    <input type="text" placeholder="Contact no:" value="contact" width="30%"/><br/><br/>
                    <input type="text" placeholder="email:" value="email" width="30%"/>
                </div>
            </div>
        )
    }
}
export default Connect;
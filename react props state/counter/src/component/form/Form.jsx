import React,{Component} from "react";

export default class Form extends Component{
   constructor(props)
   {
    super(props);
    this.inpone=React.createRef()
    this.inptwo=React.createRef()
   }

    
    Submit=(e)=>{
        e.preventDefault();
       
        console.log(this.inpone.value);
        console.log(this.inptwo.value);
    };
    render(){
        return(
            <div>
                <h3 style={{"textAlign":"center","color":"red"}}>Registration Form</h3>
                <form action="" onSubmit={this.Submit}>
                    <input type="text" ref={input=>this.inpone=input} name="fname" placeholder="firstname"/>
                    <input type="text" ref={input=>this.inptwo=input} name="lname" placeholder="lastname"/>
                   

                    <button>submit</button>


                </form>
            </div>
        )
    }
}
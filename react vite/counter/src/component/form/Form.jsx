import React,{Component} from "react";

export default class Form extends Component{
    state={
        fname:"",
        lname:"",
        age:""
    }

    handlekey=(e)=>{
        console.log(e.target.name);
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    Submit=(e)=>{
        e.preventdefault();
        const{fname,lname,age}=this.state;
        console.log("hai");
        console.log("fname",fname,"lname",lname,"age",age);
    };
    render(){
        return(
            <div>
                <h3 style={{"textAlign":"center","color":"red"}}>Registration Form</h3>
                <form action="" onSubmit={this.Submit}>
                    <input type="text" onChange={this.handlekey} name="fname" placeholder="firstname"/>
                    <input type="text" onChange={this.handlekey} name="lname" placeholder="lastname"/>
                    <input type="text" onChange={this.handlekey} name="age" placeholder="age"/>

                    <button>submit</button>


                </form>
            </div>
        )
    }
}
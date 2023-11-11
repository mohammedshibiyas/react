import React, { Component } from 'react'

export default class Loop extends Component {
    state={
        data:[{id:1,name:"sanin",age:21},
            {id:2,name:"hai",age:21},
            {id:3,name:"good",age:23}
    

    ]
    }
  render() {
    return (
      <div >
        <ul>
          {
            this.state.data.map((dt=>
               <>
                <li >{dt.id}-{dt.name}-{dt.age}</li>
               </>
                ))
          }
        </ul>
      </div>
    )
  }
}

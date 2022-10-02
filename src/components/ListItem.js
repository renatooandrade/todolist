import React from "react"
import Card from "./Card"

function DoneImg(props){

    if(props.done){   
        return (<img width={"20px"} src="./assets/checked.png" alt="Checked"></img>)
    } else{
        return (<img width={"20px"} src="./assets/unchecked.png" alt="unchecked"></img>)    
    }

}

function ListItem(props){
    return(
        <li>
                <Card className={props.item.done? "done item" : "item"} >
                    {props.item.text}
                    <div>
                        <button onClick={()=>{props.onDone(props.item)}}> <DoneImg done={props.item.done}></DoneImg> </button>
                        <button onClick={()=>{props.onItemDeleted(props.item)}}><img width={"20px"} src="./assets/bin.png" alt="Delete"></img></button>
                    </div>
                </Card>
            </li>)            

}


export default ListItem
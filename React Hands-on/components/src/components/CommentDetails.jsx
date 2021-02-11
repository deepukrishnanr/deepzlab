import React from "react";
import faker from "faker";

// const CommentDetails =  (props) => {
//     console.log(props)
//     return (
//         <div className="comment">
//             <a className="avatar">
//                 <img alt="avatar" src={props.image} />
//             </a>
//             <div className="content">
//                 <a className="author">{props.name}</a>
//                 <div className="metadata">
//                     <span className="date">{props.time}</span>
//                 </div>
//                 <div className="text">
//                     {props.text}
//                 </div>
//             </div>
//         </div>
//     )
// }
//export default CommentDetails;

class CommentDetails extends React.Component{
   constructor(props)  {
       console.log("Inside Constructor")
       super(props);
       this.state = {
           isLiked: props.isLiked
       }
   }
    handleClick() {
       console.log("I am Clicked");
        this.setState(
            {
                isLiked: !this.state.isLiked
            }
        )
    }
    componentDidMount() {
       console.log("Inside componentDidMount");

    }
    componentDidUpdate() {
        console.log("Inside componentDidUpdate");

    }

   render(){
       console.log("Inside render")
       return (
           <div className="comment">
               <a className="avatar">
                   <img alt="avatar" src={this.props.image} />
               </a>
               <div className="content">
                   <a className="author">{this.props.name}</a>
                   <div className="metadata">
                       <span className="date">{this.props.time}</span>
                   </div>
                   <div style={{float: "right"}} onClick={
                       ()=>{
                            this.handleClick()
                        }
                   }>
                       <i className={`heart red ${this.state.isLiked ? "" : "outline"} icon right`}></i>
                   </div>
                   <div className="text">
                       {this.props.text}
                   </div>
               </div>
           </div>
       )
   }
}

export default CommentDetails;
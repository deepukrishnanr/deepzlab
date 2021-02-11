import React from "react";
import faker from "faker";

/*const CommentDetails =  (props) => {

    return (
        <div className="comment">
            <a className="avatar">
                <img alt="avatar" src={props.image} />
            </a>
            <div className="content">
                <a className="author">{props.author}</a>
                <div className="metadata">
                    <span className="date">{props.time}</span>
                </div>
                <div style={{float: "right"}}>
                    <i className={`heart red ${props.isLiked ? "" : "outline"} icon right`}></i>
                </div>
                <div className="text">
                    {props.content}
                </div>
            </div>
        </div>
    )
}
export default CommentDetails;
*/



class CommentDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLiked: props.isLiked
        }
    }

    handleClick() {
        console.log("I am clicked!!!!!!")
        this.setState({
            isLiked: !this.state.isLiked
        })
    }

    render() {
        return (
            <div className="comment">
                <a className="avatar">
                    <img alt="avatar" src={this.props.image} />
                </a>
                <div className="content">
                    <a className="author">{this.props.author}</a>
                    <div className="metadata">
                        <span className="date">{this.props.time}</span>
                    </div>
                    <div style={{float: "right"}} onClick={()=> {this.props.handleClick()}}>
                        <i className={`heart red ${this.props.isFavourite ? "" : "outline"} icon right`}></i>
                    </div>
                    <div className="text">
                        {this.props.content}
                    </div>
                </div>
            </div>
        )
    }
}

export default CommentDetails;



import React from 'react'
/* const CommentDetails = function(props) {
   let iconStyle = this.state.isLiked ? "heart red icon right" : "heart red outline icon right";

    const handleClick = () => {
        console.log("I am clicked!!!!")
    }

    return (
        <div className="comment">
            <a href="/" className="avatar"><img alt="avatar" src={props.image}/></a>

            <div className="content">
                <a href="/" className="author">{props.author} </a>
                <div style={{float: "right"}}>
                    <i className={iconStyle} onClick={handleClick()}></i>
                </div>
                <div className="metadata">
                    <span className="date"> {props.time} </span>
                </div>
                <div className="text">{props.text} </div>
            </div>
        </div>
    )
} */

/*
var name = "Sruti"
 var person = {
	name: "Deepu",
	getName: function(){
		return this.name;
	}
}

var getNameFromOutSide = person.getName;

getNameFromOutSide()
 */


class CommentDetails extends React.Component {

    constructor(props) {
    console.log("Inside constructor ===========================>>>>")
        super(props)
        this.state = {
            isLiked: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentWillMount() {
         console.log("Inside componentWillMount ===========================>>>>")
    }

    shouldComponentUpdate() {
         console.log("Inside shouldComponentUpdate ===========================>>>>")
         return true;
    }

     componentWillUpdate() {
             console.log("Inside componentWillUpdate ===========================>>>>")
        }

    componentDidMount() {
         console.log("Inside componentDidMount ===========================>>>>")
    }

    componentDidUpdate() {
         console.log("Inside componentDidUpdate ===========================>>>>")
    }

    componentWillUnmount() {
         console.log("Inside componentWillUnmount ===========================>>>>")
    }

    handleClick() {
    console.log("Inside event handler=========================================>>>")
        this.setState({
            isLiked: !this.state.isLiked
        })
    }


    render() {
             console.log("Inside render ===========================>>>>")
        let iconStyle = this.state.isLiked ? "heart red icon right" : "heart red outline icon right";
        return (
            <div className="comment">
                <a href="/" className="avatar"><img alt="avatar" src={this.props.image}/></a>
                <div className="content">
                    <a href="/" className="author">{this.props.author} </a>
                    <div style={{float: "right"}}>
                        <i className={iconStyle} onClick={this.handleClick}></i>
                    </div>
                    <div className="metadata">
                        <span className="date"> {this.props.time} </span>
                    </div>
                    <div className="text">{this.props.text} </div>
                </div>
            </div>

            )
    }
}

export default CommentDetails;

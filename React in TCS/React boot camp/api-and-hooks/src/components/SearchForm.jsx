import React,{useState} from 'react'

/* class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: null
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        this.setState({
            term: event.target.value
        })
    }

    render() {
        return (
            <div className="container">
                <input type="text" onChange={this.handleChange}/>
                <div>
                    You have searched for: {this.state.term}
                </div>
            </div>
        )
    }
} */

const SearchForm = () => {

   /*  const fruits = ['orange', 'apple']
    const fruit1= fruits[0]
    const fruit2 = fruits[1]

    //ES6
    const [fruit1, fruit2] = [orange, apple] */

    const  [term, setTerm] = useState(null)

    const handleChange = (event) => {
        setTerm(event.target.value)
    }

    return (
                <div className="container">
                    <input type="text" onChange={handleChange}/>
                    <div>
                        You have searched for: {term}
                    </div>
                </div>
    )
}

export default SearchForm;
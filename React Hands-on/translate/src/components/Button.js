import React from 'react'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorConteext';
const Button = () => {

    const renderButton = (color) => {
        return (
            <button className={`ui button ${color === 'red' ? 'red' : 'primary'}`}>
                <LanguageContext.Consumer>
                    { (value) => value.language === 'english' ?  'Submit' : 'Volgeraan' }
                </LanguageContext.Consumer>
            </button>
        )
    }

    return(
        <ColorContext.Consumer>

            { (color) => renderButton(color) }


        </ColorContext.Consumer>
    )
}

/*class Button extends React.Component {
    //static contextType = LanguageContext;
    render(){
        //const text = this.context === 'english' ? 'Submit' : 'Volgeraan'
        return(
            <button className="ui button primary">
                <LanguageContext.Consumer>
                    { (value) =>  value  === 'english' ? 'Submit' : 'Volgeraan' }
                </LanguageContext.Consumer>
            </button>
        )
    }
}*/

export default Button;
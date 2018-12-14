import React, {Component} from 'react';
import FormField from '../widgets/FormField';

class Vocab extends Component {

    state = {
        formFields:{
            vocab:{
                element:'input',
                label:true,
                value:'',
                labelText:'vocabulary',
                attributes:{
                    placeholder:'Vocab',
                    name:'vocab',
                    type:'text'
                }
            },
            definition:{
                element:'textarea',
                label:false,
                value:'',
                labelText:'definition',
                attributes:{
                    placeholder:"word definition",
                    name:"definition",
                }
            }
        }
    }

    updateForm = (newState) => {
        this.setState({
            formData:newState
        })
    }

    render(){

        return(
            <div className="Vocabs">
                <FormField change={(newState)=>this.updateForm(newState)} formData={this.state.formFields}/>
            </div>
        )
    }
}

export default Vocab
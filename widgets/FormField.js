import React from 'react';

const FormField = (props) => {

    // grab all the form fields

    const renderForm = () => {
        const formArray = [];
        for(let elementName in props.formData) {
            formArray.push({
                id:elementName,
                settings:props.formData[elementName]
            })
        }
        return formArray.map((item,i)=>{
            console.log(item)
            return(
                <div className = "form_element" key={i}>
                    {renderTemplates(item)}
                </div>
            )
        })
    }

    const showLabel = (show, labelText) => {
        if(show){
            return(
                <label>{labelText}</label>
            )
        }
    }

    const changeValue = (e,id) => {
        const newState = props.formData
        let targetField = newState[id]; 
        console.log(targetField)
        props.change(newState)
        targetField.value = e.target.value
    }

    const renderTemplates = (data) => {
        let formTemplate = ''; //code blocks for each cases
        let values = data.settings;
        console.log(values.vocab)
        switch(values.element){
            case('input'):
            console.log(values.elementName)
            formTemplate = (
                <div>
                    {showLabel(values.label, values.labelText)}
                    <input 
                        {...values.attributes}
                        value={values.value}
                        onChange = {(e) => changeValue(e, data.id)}
                    />
                </div>
            )
            break;
            case('textarea'):
            formTemplate = (
                <div>
                    {showLabel(values.label, values.labelText)}
                    <textarea 
                        {...values.attributes}
                    />
                </div>
            )
            break;    
            default:
            formTemplate=null;
        }
        return formTemplate
    }


    return(
        <div>
            {renderForm()}
        </div>
    )
}

export default FormField
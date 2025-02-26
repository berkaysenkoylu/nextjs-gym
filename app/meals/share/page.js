"use client"

import { useState } from "react"

import ImagePicker from "@/app/components/imagepicker/ImagePicker"
import Input from "@/app/components/Input/Input"
import { saveMeal } from "@/api/actions"

import classes from "./mealshare.module.css"

export default function MealSharePage() {
    const [formData, setFormData] = useState({
        "name": {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Your name'
            },
            label: 'Your name',
            required: true,
            value: ''
        },
        "email": {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'E-mail'
            },
            label: 'Your email',
            required: true,
            value: ''
        },
        "title": {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Title'
            },
            label: 'Title',
            required: true,
            value: ''
        },
        "summary": {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Short summary'
            },
            label: 'Short summary',
            required: true,
            value: ''
        },
        "instructions": {
            elementType: 'textarea',
            elementConfig: {
                rows: 10,
                placeholder: 'Instructions'
            },
            label: 'Instructions',
            required: true,
            value: ''
        },
        "image": {
            value: null
        }
    })
    const [formIsValid, setFormIsValid] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const formInputData = {
            title: formData.title.value,
            summary: formData.summary.value,
            instructions: formData.instructions.value,
            image: formData.image.value,
            creator: formData.name.value,
            creator_email: formData.email.value
        }

        saveMeal(formInputData).then(() => {
            // Add a loader and hide it maybe?
        })
    }

    const getFormValid = (data) => {
        let formValid = true
        Object.values(data).forEach(({ value }) => {
            formValid = formValid && value && (value !== "" || value !== null)
        })
        return formValid
    }

    const onInputFieldChange = (e, field) => {
        const copiedFormData = { ...formData }
        const copiedFormField = { ...copiedFormData[field] }

        copiedFormField.value = e.target.value

        copiedFormData[field] = copiedFormField

        setFormIsValid(getFormValid(copiedFormData))
        setFormData(copiedFormData)
    }

    const onImageSelectedHandler = (imgData) => {
        const copiedFormData = { ...formData }
        const copiedImgData = { ...copiedFormData["image"] }
        copiedImgData.value = imgData
        copiedFormData["image"] = copiedImgData

        setFormIsValid(getFormValid(copiedFormData))
        setFormData(copiedFormData)
    }

    const firstTwoFormFields = Object.keys(formData).slice(0, 2).map(field => {
        const formField = formData[field]
        return (
            <Input
                key={field}
                elementConfig={formField["elementConfig"]}
                elementType={formField["elementType"]}
                label={formField["label"]}
                value={formField["value"]}
                required={formField["required"]}
                changed={(e) => onInputFieldChange(e, field)}
            />
        )
    })
    const restOfTheForm = Object.keys(formData).slice(2).map(field => {
        const formField = formData[field]
        return (
            <Input
                key={field}
                elementConfig={formField["elementConfig"]}
                elementType={formField["elementType"]}
                label={formField["label"]}
                value={formField["value"]}
                required={formField["required"]}
                changed={(e) => onInputFieldChange(e, field)}
            />
        )
    })

    return (
        <section className={classes.MealShare}>
            <header>
                <h2>Share your <span>favorite meal</span></h2>

                <p>Or any other meal you feel needs sharing!</p>
            </header>
            
            <form className={classes.Form} onSubmit={handleSubmit}>
                <div className={classes.row}>
                    {firstTwoFormFields}
                </div>

                {restOfTheForm}

                <ImagePicker onImageSelected={onImageSelectedHandler} />

                <div className={classes.Actions}>
                    <button disabled={!formIsValid}>Share Meal</button>
                </div>
            </form>
        </section>
    )
}

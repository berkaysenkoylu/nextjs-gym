"use client"

import { useState, useRef } from 'react'
import Image from 'next/image'

import classes from "./ImagePicker.module.css"

const ImagePicker = (props) => {
    const [selectedImage, setSelectedImage] = useState(null)
    const imageSelectInputRef = useRef(null)

    const imageSelected = (event) => {
        const file = event.target.files[0]

        if (!file) {
            setSelectedImage(null)
            return
        }

        const fileReader = new FileReader()

        fileReader.onload = () => {
            setSelectedImage(fileReader.result)
            props.onImageSelected(file)
        }

        fileReader.readAsDataURL(file)
    }

    return (
        <div className={classes.ImagePicker}>
            <div className={classes.ImagePicker__ImgPreview}>
                {selectedImage ? <Image
                    src={selectedImage}
                    alt="image-preview"
                    fill
                /> : <p>No image picked yet.</p>}
            </div>

            <input
                type='file'
                name="image"
                id="ImagePicker"
                accept="image/png, image/jpg"
                ref={imageSelectInputRef}
                onChange={imageSelected}
                style={{ display: "none" }}
            />

            <button type='button' onClick={() => {
                imageSelectInputRef.current && imageSelectInputRef.current.click()
            }}>Pick an Image</button>
        </div>
    )
}

export default ImagePicker
"use client"

import React from 'react'
import Lottie from "lottie-react"

import MealLoading from "@/public/animations/meal-loading.json"
import classes from "./CustomLoading.module.css"

const CustomLoading = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: MealLoading, 
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return (
        <div className={classes.LottieContainer}>
            <Lottie
                {...defaultOptions}
            />
        </div>
    )
}

export default CustomLoading
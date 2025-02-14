'use client'

import { useState } from "react"
import { MakeText } from "@/components"



export const MakeCell = () => {

    const [top, setTop] = useState(false)
    const [bottom, setBottom] = useState(false)
    const [left, setLeft] = useState(false)
    const [right, setRight] = useState(false)

    const [textTop, setTextTop] = useState('')
    const [textBottom, setTextBottom] = useState('-')
    const [textLeft, setTextLeft] = useState('-')
    const [textRight, setTextRight] = useState('-')


    return (
        <div className="relative w-40 h-40">
            <div
                onClick={
                    () => {
                        setTop(!top)
                        setBottom(false)
                        setRight(false)
                        setLeft(false)
                    }
                }
                className="absolute top-0 w-full text-center cursor-pointer hover:text-sky-600 hover:border hover:border-sky-500 p-2"
            >
                {textTop}
            </div>
            <div
                onClick={
                    () => {
                        setTop(false)
                        setBottom(false)
                        setRight(!right)
                        setLeft(false)
                    }
                }
                className="absolute top-[4.00rem] right-[-2.00rem] h-8 w-24 rotate-90 text-center cursor-pointer hover:text-sky-600 hover:border hover:border-sky-500"
            >
                {textRight}
            </div>
            <div
                onClick={
                    () => {
                        setTop(false)
                        setBottom(!bottom)
                        setRight(false)
                        setLeft(false)
                    }
                }
                className="absolute top-[8.00rem] w-full text-center cursor-pointer hover:text-sky-600 hover:border hover:border-sky-500"
            >
                {textBottom}
            </div>
            <div
                onClick={
                    () => {
                        setTop(false)
                        setBottom(false)
                        setRight(false)
                        setLeft(!left)
                    }
                }
                className="absolute top-[4.00rem] left-[-2.00rem] h-8 w-24 -rotate-90 text-center cursor-pointer hover:text-sky-600 hover:border hover:border-sky-500"
            >
                {textLeft}
            </div>
            {
                // top ? (
                //     <MakeText top={top} bottom={bottom} left={left} right={right} />
                // ) : left ? (
                //     <MakeText top={top} bottom={bottom} left={left} right={right} />
                // ) : bottom ? (
                //     <MakeText top={top} bottom={bottom} left={left} right={right} />
                // ) : right ? (
                //     <MakeText top={top} bottom={bottom} left={left} right={right} />
                // ) : (<></>)
                
                <MakeText valueTextTop={setTextTop} valueTextBottom={setTextBottom} valueTextLeft={setTextLeft} valueTextRight={setTextRight} top={top} bottom={bottom} left={left} right={right} />

            }

        </div>
    )
}
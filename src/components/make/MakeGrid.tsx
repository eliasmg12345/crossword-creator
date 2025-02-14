'use client'

import { useState } from "react"
import { MakeTable } from "@/components"


export const MakeGrid = () => {

    const [sizeH, setSizeH] = useState(0)
    const [sizeW, setSizeW] = useState(0)

    return (
        <div className="w-max">
            <div className="flex flex-col w-48 mb-5">
                <div className="relative">
                    <label className="w-24">{'<====>'}</label>
                    <input
                        className="relative left-[30px]  m-2 p-2 w-12"
                        placeholder="8"
                        type="number"
                        id="sizeW"
                        onChange={e => setSizeW(+e.target.value)}
                    />
                </div>
                <div className="relative">
                    <label htmlFor="" className="absolute rotate-90 top-[15px]">{'<===>'}</label>
                    <input
                        className="relative left-[84px] m-2 p-2 w-12"
                        placeholder="5"
                        type="number"
                        id="sizeH"
                        onChange={e => setSizeH(+e.target.value)}
                    />
                </div>
            </div>
            <div className="">
                <MakeTable sizeH={sizeH} sizeW={sizeW} />
            </div>
        </div>
    )
}
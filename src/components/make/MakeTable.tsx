import { MakeCell } from "@/components"

interface Props {
    sizeH: number
    sizeW: number
}

export const MakeTable = ({ sizeH, sizeW }: Props) => {
    const sizeHeight:number[] = []
    for (let i = 0; i < sizeH; i++) {
        sizeHeight[i] = i
    }
    const sizeWeight:number[] = []
    for (let j = 0; j < sizeW; j++) {
        sizeWeight[j] = j
    }

    return (
        <table>
            <tbody>
                {
                    sizeHeight.map((h,index) => (
                        <tr key={`row-${index}`}>
                            {
                                sizeWeight.map((w, i) => (

                                    <td  key={`cell-${index}-${i}`} className="border">
                                        <MakeCell />
                                    </td>
                                ))
                            }
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
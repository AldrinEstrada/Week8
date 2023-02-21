import Link from "next/link"
import { useEffect, useState } from "react"
import Styles from "../styles/useEffectThree.module.css"


export default function UseEffectThree() {
    const [number, setNumber] = useState(0);

    const [value, setValue] = useState(-10);

    useEffect(() => {
        setValue(value + 10)
    }, [number])


    return(
        <>
            <div className={Styles.main}>
                <Link href="/">Home</Link>
                <div>
                    <button onClick={() => setNumber(number + 1)}>Click Me</button>
                </div>
                <div>
                    useEffectThree
                </div>
                <div>
                    {value}
                </div>
            </div>

        </>
    )
}
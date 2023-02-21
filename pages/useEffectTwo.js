import Link from "next/link"
import { useEffect, useState } from "react"
import Styles from "../styles/useEffectTwo.module.css"



export default function UseEffectTwo() {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number);
        setNumber(number + 50);

    }, [])

    return(
        <>
            <div className={Styles.main}>
                <Link href="/">Home</Link>
                <div>
                    UseEffect Two
                </div>
                <div>
                    {number}
                </div>
            </div>

        </>
    )
}
import Carousel from "../components/carousel"
import Link from "next/link"
import Styles from "../styles/Carouselpage.module.css"

export default function CarouselPage() {
    return(
        <>  
            <div className={Styles.main}>
                <div className={Styles.content}>
                    <Link href="/">Home</Link>
                    <div className={Styles.carouselContent}>
                        <Carousel/>
                    </div>

                </div>

            </div>

        </>
    )

}
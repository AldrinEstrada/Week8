import Image from "next/image"
import { useState } from "react"
import Styles from "./Carousel.module.css"

export default function Carousel(){

    const [img, setImg] = useState(0)

    const changeImage = (change) => {
        if(change == "backward"){
            setImg(img - 1);

            if(img == 0){
                setImg(5);
            }
        }else if(change == "forward"){
            setImg(img + 1);

            if(img == 5){
                setImg(0);
            }
        }
    }

    return(
        <>
            <div style = {{
                backgroundImage:"url(/carousel-images/" + img + ".jpg)",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: 500,
                height: 300
            }}>
                <Image className={Styles.leftArrow}
                    src={"/icons/leftArrow.png"}
                    alt={"/icons/leftArrow.png"}
                    width={40}
                    height={40}
                    onClick={() => changeImage("backward")}
                />
                
                <Image className={Styles.rightArrow}
                    src={"/icons/rightArrow.png"}
                    alt={"/icons/rightArrow.png"}
                    width={40}
                    height={40}onClick={() => changeImage("forward")}
                />
            </div>
        </>
    )
}
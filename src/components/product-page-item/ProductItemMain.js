import {HiOutlineCake,HiOutlinePuzzlePiece} from "react-icons/hi2";
import {AiOutlineCrown} from "react-icons/ai"
import {BiHash} from "react-icons/bi"

export function ProductItemMain(props){
    let {image, id} = props

    return (
            <div className="product-visual-container">
                <div className="product-visual-upper">

                    <div className="product-img-scrollbar">
                        <img src={image} alt="product"></img>
                        <img src={image} alt="product"></img>
                        <img src={image} alt="product"></img>
                        <img src={image} alt="product"></img>
                        <img src={image} alt="product"></img>
                        <img src={image} alt="product"></img>
                        <img src={image} alt="product"></img>
                    </div>
                    <div className="product-big-img">
                        <img src={image} alt="product"></img>
                    </div>
                </div>

                <div className="product-visual-bottom">

                    <div className="bottom-sec">
                        <HiOutlineCake/>
                        <h1>18+</h1>
                        <p>ages</p>
                    </div>
                    <div className="bottom-sec">
                        <HiOutlinePuzzlePiece/>
                        <h1>260</h1>
                        <p>Pieces</p>
                    </div>
                    <div className="bottom-sec">
                        <AiOutlineCrown/>
                        <h1>1600</h1>
                        <p>VIP Points</p>
                    </div>
                    <div className="bottom-sec">
                        <BiHash/>
                        <h1>{id}</h1>
                        <p>Item</p>
                    </div>
                    
                </div>
            </div>
    )

}
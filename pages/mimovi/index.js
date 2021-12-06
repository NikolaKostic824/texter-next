import { useState } from "react";
import MimModal from "./MimModal";

export const getServerSideProps = async () => {
    const res = await fetch('https://texter-test.herokuapp.com/mim');
    const data = await res.json();
    return {
        props: { mims: data }
    }
}
const Mimovi = ({mims}) => {
    //One mim selected
    const [selectedImage, setSelectedImage] = useState(null);
    //Limit
    const [limit, setLimit] = useState(6);
    const loadMore = () => {
        if (limit <= mims.length) {
        setLimit(limit + 6);
        }
    };
    //Remove one mim selected and back to the gallery of mims
    const setBack = () => {
        setSelectedImage(null);
    };

    return ( 
        <>
        <div>
            <div>
                <h1 className="user-page_header">Mimovi</h1>
                <div className="img-grid">
                {mims &&
                    mims
                    .slice(0, limit)
                    .map((mim) => (
                        <div className="img-wrap" key={mim._id}>
                        <img
                            src={mim.image}
                            alt="Mim"
                            onClick={() => setSelectedImage(mim.image)}
                        />
                        </div>
                    ))}
                </div>
                {limit < mims.length ? (
                <div className="load-more-wrapper">
                    <button className="load-more" onClick={() => loadMore()}>
                    DAJ JOŠ
                    </button>
                </div>
                ) : (
                <></>
                )}
                {selectedImage && (
                <MimModal selectedImage={selectedImage} setBack={setBack} />
                )}
            </div>
         
      </div>
      </>
    );
}
export default Mimovi;
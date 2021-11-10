import useFetch from "../Fetch";
import ImageSeparate from "./imageSeparate";

const EditorialImages = () => {
    
    const {fetchData,isPending,error, dataLength} = useFetch("https://picsum.photos/v2/list");

    return(
        <div>
           {isPending && <h3>...Loading</h3>}
           {error && <h3>{error}</h3>}
           {fetchData && <ImageSeparate list={fetchData} len={dataLength}/>}
        </div>
    )
}

export default EditorialImages;
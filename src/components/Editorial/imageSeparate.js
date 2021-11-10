import ImageLoop from "./imageLoop";
import "./Editorial.css";


const ImageSeparate = ({list, len}) => {

    function createGroups(arr, numGroups) {
        const perGroup = Math.ceil(arr.length / numGroups);
        return new Array(numGroups)
        .fill('')
        .map((_, i) => arr.slice(i * perGroup, (i + 1) * perGroup));
    }

    const [arr1, arr2, arr3] = createGroups(list, 3);

    return(
        <div className="image-row">
            <ImageLoop data={arr1} newList={list} len={len}/>
            <ImageLoop data={arr2} newList={list} len={len}/>
            <ImageLoop data={arr3} newList={list} len={len}/>
        </div>
    )
}

export default ImageSeparate;


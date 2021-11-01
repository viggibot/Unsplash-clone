import ImageLoop from "./imageLoop";
import "./Editorial.css";
import BoxModel from "./boxModel";

const ImageSeparate = ({list}) => {

    function createGroups(arr, numGroups) {
        const perGroup = Math.ceil(arr.length / numGroups);
        console.log(perGroup);
        return new Array(numGroups)
        .fill('')
        .map((_, i) => arr.slice(i * perGroup, (i + 1) * perGroup));
    }

    const [arr1, arr2, arr3] = createGroups(list, 3);

    return(
        <div className="image-row">
            <ImageLoop data={arr1}/>
            <ImageLoop data={arr2}/>
            <ImageLoop data={arr3}/>
            <BoxModel/>
        </div>
    )
}

export default ImageSeparate;


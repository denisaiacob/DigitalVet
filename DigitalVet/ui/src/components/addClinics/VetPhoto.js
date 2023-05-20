import "../../App.css";
import {useState, useEffect} from "react";
import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
} from "firebase/storage";
import {storage} from "./firebase";
import {v4} from "uuid";

function VetPhoto() {
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState('');

    const imagesListRef = ref(storage, "vetImages/");

    const uploadFile = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `vetImages/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageUrls((prev) => url);
            });
        });
    };

    useEffect(() => {
        listAll(imagesListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageUrls((prev) => url);
                });
            });
        });
    }, []);


    return (
        <div>
            <input
                type="file"
                onChange={(event) => {
                    setImageUpload(event.target.files[0]);
                }}
            />
            <button onClick={uploadFile}> Upload Image</button>
            <img src={imageUrls} style={{width: 150, margin: 10}}/>
        </div>
    );
}

export default VetPhoto;
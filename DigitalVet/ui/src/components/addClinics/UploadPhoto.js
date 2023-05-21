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

function UploadPhoto() {
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);

    const imagesListRef = ref(storage, "images/");

    const uploadFile = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageUrls((prev) => [...prev, url]);
            });
        });
    };

    useEffect(() => {
        listAll(imagesListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageUrls((prev) => [...prev, url]);
                });
            });
        });
    }, []);
    useEffect(() => {
        listAll(imagesListRef).then((response) => {
            const urls = [];
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    urls.push(url);
                });
            });
            setImageUrls(urls);
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
            {imageUrls.map((url) => {
                return <img alt='Cabinet photo' src={url} style={{width: 300, margin: 10}}/>;
            })}
        </div>
    );
}

export default UploadPhoto;
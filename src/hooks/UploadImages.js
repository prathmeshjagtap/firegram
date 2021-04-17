import { useEffect, useState } from "react";
import { db, storage } from "../firebase";
import firebase from "firebase";

function UploadImages(File) {
  const [Progress, setProgress] = useState(0);
  const [Error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = storage.ref(File.name);
    const collectionRef = db.collection("images");
    storageRef.put(File).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        await collectionRef.add({
          url: url,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setUrl(url);
      }
    );
  }, [File]);

  return { Progress, url, Error };
}

export default UploadImages;

import React, { useEffect, useState } from "react";
import { db, storage } from "../firebase";
import firebase from "firebase";

function UploadImages(File) {
  const [Progress, setProgress] = useState(0);
  const [Error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = storage.ref(File.name);
    storageRef.put(File).on(
      "state_changed",
      (snapshot) => {
        let percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        db.collection("Images").add({
          url: url,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setUrl(url);
      }
    );
  }, [File]);

  return <div>{(Progress, url, Error)}</div>;
}

export default UploadImages;

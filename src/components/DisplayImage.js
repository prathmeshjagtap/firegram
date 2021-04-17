import React, { useState, useEffect } from "react";

import { db } from "../firebase";

function DisplayImage() {
  const [Docs, setDocs] = useState([]);

  useEffect(() => {
    db.collection("Images")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        let documents = [];
        snapshot.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });
  }, []);

  return (
    <div className="img-grid">
      {Docs &&
        Docs.map((Doc) => (
          <div className="img-wrap" key={Doc.id}>
            <img src={Doc.url} alt="Uploaded Pic" />
          </div>
        ))}
    </div>
  );
}

export default DisplayImage;

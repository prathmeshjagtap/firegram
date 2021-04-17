import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { db } from "../firebase";

function DisplayImage({ setSelected }) {
  const [Docs, setDocs] = useState([]);

  useEffect(() => {
    db.collection("images")
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
          <motion.div
            className="img-wrap"
            layout
            whileHover={{ opacity: 1 }}
            key={Doc.id}
            onClick={() => setSelected(Doc.url)}
          >
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              src={Doc.url}
              alt="Uploaded Pic"
            />
          </motion.div>
        ))}
    </div>
  );
}

export default DisplayImage;

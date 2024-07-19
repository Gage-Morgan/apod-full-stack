import React, { useState } from "react";
import "./apodform.css";

function ApodForm() {
  const [url, setUrl] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [imgTitle, setImgTitle] = useState<string | null>(null);
  const [credit, setCredit] = useState<string | null>(null);

  const apodRequest = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/apod");
      if (!res.ok) {
        throw new Error("Failed to fetch APOD");
      }
      const data = await res.json();
      setImgTitle(data.title);
      setUrl(data.hdurl);
      setInfo(data.explanation);
      setCredit(data.copyright);
    } catch (error) {
      console.error("Error fetching APOD:", error);
      setUrl(null); // Reset URL state on error
      setImgTitle(null);
      setInfo(null);
      setCredit(null);
    }
  };

  return (
    <div>
      <button onClick={apodRequest}>Get APOD</button>
      {url !== null ? (
        <>
          <h2>Credit: {credit}</h2>
          <h3>{imgTitle}</h3>
          <img src={url} alt="Astronomy Picture of the Day" />
          <p>{info}</p>
        </>
      ) : null}
    </div>
  );
}

export default ApodForm;

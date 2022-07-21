import "./styles.css";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  const [name, setName] = useState("");
  const [dispname, setDispname] = useState([]);
  const [workname, setWorkname] = useState("");
  const [url, setUrl] = useState("");
  const addname = (e) => {
    setName(e);
  };
  const adddispname = (e) => {
    const dn = [...dispname, e];
    setDispname(dn);
  };
  const addworkname = (e) => {
    setWorkname(e);
  };
  const addurl = (e) => {
    setUrl(e);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Page1 addname={addname} adddispname={adddispname} />}
          />
          <Route
            path="/Page1"
            element={<Page1 addname={addname} adddispname={adddispname} />}
          />
          <Route
            path="/Page2"
            element={<Page2 addworkname={addworkname} addurl={addurl} />}
          />
          <Route path="/Page3" element={<Page3 />} />
          <Route path="/Page4" element={<Page4 dispname={dispname} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

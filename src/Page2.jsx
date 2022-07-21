import pic from "./Eden.png";
import i from "./12.png";
import b from "./button2.png";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Page2({ addname, addurl }) {
  const [name, setName] = useState([]);
  const [url, setUrl] = useState([]);
  const handleSubmit = (e) => {
    addname(name);
    addurl(url);
  };
  return (
    <>
      <div>
        <img
          src={pic}
          alt="Eden"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px",
            marginLeft: "43%",
            marginRight: "auto",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
            marginBottom: "50px",
          }}
        >
          <img src={i} alt="12" />
        </div>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          style={{ marginLeft: "33%" }}
        >
          <h1>Let's set up a home for all your work</h1>
          <h4 style={{ marginLeft: "8.5%", color: "GrayText" }}>
            You can always create another workspace later.
          </h4>
          <h4 style={{ marginLeft: "7%", marginRight: "210px" }}>
            Workspace Name
          </h4>
          <input
            name="name"
            type="text"
            placeholder="Eden"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ marginLeft: "9%", width: "380px" }}
          />
          <h4 style={{ marginLeft: "7%", marginRight: "110px" }}>
            Workspace URL (optional)
          </h4>
          <input
            name="url"
            type="text"
            placeholder="www.eden.com/Eden"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            style={{ marginLeft: "9%", width: "380px" }}
          />
          <br />
          <button
            style={{
              marginTop: "20px",
              border: "none",
              marginLeft: "7%",
              width: "400px",
            }}
          >
            <Link to="/Page3">
              <img src={b} alt="" />
            </Link>
          </button>
        </form>
      </div>
    </>
  );
}

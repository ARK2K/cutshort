import pic from "./Eden.png";
import i from "./1.png";
import b from "./button2.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Page1({ addname, adddispname }) {
  let navigate = useNavigate();
  const [name, setName] = useState([]);
  const [dispname, setDispname] = useState([]);

  const handleSubmit = (e) => {
    addname(name);
    adddispname(dispname);
    e.preventDefault();
    navigate(`/Page2`);
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
          <img src={i} alt="1" />
        </div>
        <form onSubmit={(e) => handleSubmit(e)} style={{ marginLeft: "35%" }}>
          <h1>Welcome! First things first...</h1>
          <h4 style={{ marginLeft: "8%", color: "GrayText" }}>
            You can always change them later.
          </h4>
          <h2 style={{ marginRight: "300px" }}>Full Name</h2>
          <input
            name="name"
            type="text"
            placeholder="Steve Jobs"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "400px" }}
          />
          <h2 style={{ marginRight: "250px" }}>Display Name</h2>
          <input
            name="dispname"
            type="text"
            placeholder="Steve"
            value={dispname}
            onChange={(e) => setDispname(e.target.value)}
            style={{ width: "400px" }}
          />
          <br />
          <button
            style={{
              marginTop: "20px",
              border: "none",
              marginRight: "10%",
            }}
          >
            <img src={b} alt="" />
          </button>
        </form>
      </div>
    </>
  );
}

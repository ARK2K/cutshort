import pic from "./Eden.png";
import i from "./123.png";
import b from "./button2.png";
import { Link } from "react-router-dom";
import GroupCard from "./Card";

export default function Page3() {
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
          <img src={i} alt="123" />
        </div>
        <form>
          <h1 style={{ marginLeft: "33%" }}>
            How are you planning to use Eden?
          </h1>
          <h4 style={{ marginLeft: "38%", color: "GrayText" }}>
            We'll streamline your setup accordingly.
          </h4>
          <GroupCard />
          <br />
          <button
            style={{
              marginTop: "20px",
              border: "none",
              marginLeft: "35%",
              width: "400px",
            }}
          >
            <Link to="/Page4">
              <img src={b} alt="" />
            </Link>
          </button>
        </form>
      </div>
    </>
  );
}

import pic from "./Eden.png";
import i from "./1234.png";
import b from "./button.png";
import t from "./Tick.png";

export default function Page4({ name }) {
  const handleSubmit = (e) => {
    alert("Submitted");
    e.preventDefault();
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
            marginBottom: "50px",
          }}
        >
          <img src={t} alt="Tick" />
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <h1 style={{ marginLeft: "38%" }}>Congratulations {name}!</h1>
          <h4 style={{ marginLeft: "35%", color: "GrayText" }}>
            You have completed onboarding, you can start using Eden!
          </h4>
          <br />
          <button
            style={{
              marginTop: "20px",
              border: "none",
              marginLeft: "37%",
            }}
          >
            <img src={b} alt="" />
          </button>
        </form>
      </div>
    </>
  );
}

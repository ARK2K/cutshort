import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { BsFillPersonFill } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";

function GroupCard() {
  return (
    <CardGroup>
      <div
        style={{
          marginLeft: "36%",
          float: "left",
          width: "10%",
        }}
      >
        <Card>
          <BsFillPersonFill
            style={{
              marginLeft: "10px",
              marginBottom: "10px",
              marginTop: "10px",
              color: "blueviolet",
            }}
          />
          <Card.Body style={{ marginLeft: "10px", marginBottom: "10px" }}>
            <Card.Title style={{ fontWeight: "bold" }}>For myself</Card.Title>
            <Card.Text>
              Write better. Think more clearly. Stay organized.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div
        style={{
          marginRight: "38%",
          float: "right",
          width: "10%",
        }}
      >
        <Card>
          <RiTeamFill
            style={{
              marginLeft: "10px",
              marginBottom: "10px",
              marginTop: "10px",
              color: "blueviolet",
            }}
          />
          <Card.Body style={{ marginLeft: "10px", marginBottom: "10px" }}>
            <Card.Title style={{ fontWeight: "bold" }}>With my team</Card.Title>
            <Card.Text>
              Wikis, docs, tasks & projects, all in one place.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </CardGroup>
  );
}

export default GroupCard;

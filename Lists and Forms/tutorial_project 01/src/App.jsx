import Form from "./Components/Form";
import WelcomeMessage from "./Components/WelcomeMessage";

export default function app(){

  const teams = [
    {
      id:1, team: "Manchester United", country: "England",
    },
    {
      id:2, team: "Real Madrid", country: "Spain",
    }
  ]

  return (
    <div className="app-container">
      <WelcomeMessage message="Welcome to the Teams Form" />
      <Form 
      teamsArray={teams}
      {
        ...teams
      }
      />
    </div>
  );
}
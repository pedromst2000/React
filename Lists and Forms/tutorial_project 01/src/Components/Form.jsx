import { useState } from "react";
import proptypes from "prop-types";
import TableTeams from "./TableTeams";


export default function Form({teamsArray}) {

  const [team, setTeam] = useState("");
  const [country, setCountry] = useState("");


  const handleSubmit = (e) => {

      e.preventDefault();

      const newTeam = {
          id: teamsArray.length + 1,
          team: team,
          country: country,
      }

      teamsArray.push(newTeam);

        console.log(teamsArray);

        // reset the form
        setTeam("");
        setCountry("");

  };

 return (
    <div className="form-container">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
          console.log(team, country);
        }}
      >
        <input type="text" placeholder="team" value={team}
        onChange={(e) => {
            setTeam(e.target.value);
        }}
        />
        <input type="text" placeholder="country" value={country}
        onChange={(e) => {
            setCountry(e.target.value);
        }}
        />
        <button type="submit">Submit</button>
      </form>
      <TableTeams teamsArray={teamsArray} />
    </div>
    
  );

}


Form.propTypes = {
    teamsArray: proptypes.array,
    country_: proptypes.string,
    team_: proptypes.string,
  }
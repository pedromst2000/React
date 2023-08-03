import {PropTypes} from 'prop-types';

export default function TableTeams({teamsArray}) {
  
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Team</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {teamsArray.map((index) => {
          return (
            <tr key={index.id}>
              <td>{index.team}</td>
              <td>{index.country}</td>
            </tr>
          );
        })} 
      </tbody>
    </table>
  );
}

TableTeams.propTypes = {
    teamsArray: PropTypes.array,
};
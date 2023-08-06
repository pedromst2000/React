import PropTypes from "prop-types";
import TableItem from "./TableItem";

function TableSeries({ removeSerie, editSerie, series }) {
  return (
    <div className="table-series">
      <table>
        <thead>
          <tr>
            <th>title</th>
            <th>genre</th>
            <th>cover</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {series.length == 0 ? (
            <tr>
              <td colSpan="4">No series found</td>
            </tr>
          ) : (
            series.map((serie) => (
              <TableItem
                key={serie.id}
                removeSerie={removeSerie}
                editSerie={editSerie}
                series={serie}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

TableSeries.propTypes = {
  removeSerie: PropTypes.func.isRequired,
  editSerie: PropTypes.func.isRequired,
  series: PropTypes.array.isRequired,
};

export default TableSeries;

import PropTypes from 'prop-types'

function TableSeries({removeSerie, editSerie, series, isFilterSearch, isFilterGenre, filterTitle, filterGenre, title, genre, setFilterTitle, setFilterGenre}) {
  
    function checkFilterSearch() {
        if(title !== "") {
            setFilterTitle(true);
            setFilterGenre(false);            
            filterTitle();
        }
    }


    function checkFilterGenre() {
        if(genre !== "all") {
            setFilterGenre(true);
            setFilterTitle(false);
            filterGenre();
        }
    }


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
                {
                    isFilterSearch ? checkFilterSearch() : isFilterGenre ? checkFilterGenre() : series.map((serie) => (
                        <tr key={serie.id}>
                            <td>{serie.title}</td>
                            <td>{serie.genre}</td>
                            <td><img src={serie.cover} alt={serie.title} /></td>
                            <td>
                                <button onClick={() => removeSerie(serie.id)}>Delete</button>
                                <button onClick={() => editSerie(serie.id)}>Edit</button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
        </table>
    </div>
    )
}

TableSeries.propTypes = {
    removeSerie: PropTypes.func.isRequired,
    editSerie: PropTypes.func.isRequired,
    series: PropTypes.array.isRequired,
    isFilterSearch: PropTypes.bool.isRequired,
    isFilterGenre: PropTypes.bool.isRequired,
    filterTitle: PropTypes.func.isRequired,
    filterGenre: PropTypes.func.isRequired,
    setFilterGenre: PropTypes.func.isRequired,
    setFilterTitle: PropTypes.func.isRequired,
}

export default TableSeries

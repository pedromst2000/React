import PropTypes from 'prop-types'
import { useState } from 'react'

function FormSeries({addSerie, series, validateSerie}) {

    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [cover, setCover] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // validate the form
        const validate = validateSerie(title, genre, cover);
        if(!validate) return;

        // add the serie
        addSerie({
            id: series.length + 1,
            title: title,
            genre: genre,
            cover: cover,
        });

        // reset the form
        setTitle('');
        setGenre('');
        setCover('');
    
    };


  return (
    <div className="form">
        <form 
        onSubmit={handleSubmit}
        >
            <input type="text" required placeholder='title' value={title}
            onChange={(e) => setTitle(e.target.value)} />
            <select name="genrer" value={genre}
            onChange={(e) => setGenre(e.target.value)}
            >
                <option value="all">all</option>
                <option value="action">action</option>
                <option value="comedy">comedy</option>
                <option value="drama">drama</option>
                <option value="horror">horror</option>
            </select>
            <input type="file" name="cover" value={cover} 
            onChange={(e) => setCover(e.target.value)} />
            <input type="submit" value="Add serie" />
        </form>
    </div>
    )
}

FormSeries.propTypes = {
    addSerie: PropTypes.func.isRequired,
    series: PropTypes.array.isRequired,
    validateSerie: PropTypes.func.isRequired,
}

export default FormSeries

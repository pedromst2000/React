import PropTypes from 'prop-types'

function ChangeSquare({color, setColor, visible, prevColorRef, changeColor}) {
  return (
    <div>
        <form
        onSubmit={(e) => {
            e.preventDefault();
            changeColor();
        }}
        >
            <input type="text" ref={prevColorRef}  value={color} placeholder='change Color' 
            onChange={(e) => setColor(e.target.value)}
            />
            <input type="submit" value="change color"/>
        </form>
            <input type="button" value={
                visible ? "remove Square" : "show Square"
            } />
    </div>
  )
}

ChangeSquare.propTypes = {
    color: PropTypes.string.isRequired,
    setColor: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired,
    prevColorRef: PropTypes.object.isRequired,
    changeColor: PropTypes.func.isRequired,
}

export default ChangeSquare

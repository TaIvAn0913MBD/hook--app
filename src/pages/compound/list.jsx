

const NewInp = (props) =>{
    const value = props.value;
    return(
    <div>
        <input
          value={value}
          type="text"
          className="input"
          placeholder="Your plan today is..."
          onChange={(events) => handleSubValue(events.target.value)}
        ></input>
        <button ></button>
    </div>)
}
export default NewInp;
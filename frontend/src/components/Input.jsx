import "../styles/components/input.css";

const Input = ({label}) => {
    return (
        <div className="input">
            <label>{label}</label>
            <input type="text" />
        </div>
    )
}

export default Input;
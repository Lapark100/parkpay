export default function Toogle ({onChange}) {
    return (
        <label className="toogle-container">
            <input className="toogle-input" type="checkbox" onChange={onChange} />
            <span className="slider"/>
        </label>
    )
}
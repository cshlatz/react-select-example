import ReactSelect, {components} from 'react-select';
import dragonball from './assets/dragonball.png';
import './Select.css';

const styles = {
    option: base => ({
        ...base,
        backgroundColor: "inherit",
        color: "inherit",
        "&:hover": {
            backgroundColor: "inherit"
        }
    }),
    singleValue: base => ({
        ...base,
        width: "100%"
    }),
}

const Option = (props) => {
    return (
        <div style={props.data.style}>
            <components.Option {...props}>
                <div className="option-container">
                    <img src={props.data.src} alt={props.data.value} /> <span>{props.children}</span>
                </div>
            </components.Option>
        </div>
    );
};

const SingleValue = (props) => {
    return (
            <components.SingleValue {...props}>
                <div className="option-container" style={props.data.style}>
                    <img src={props.data.src} alt={props.data.value} /> <span>{props.children}</span>
                </div>
            </components.SingleValue>
    );
};

const DropdownIndicator = (props) => {
    return (
        <components.DropdownIndicator {...props}>
            <img src={dragonball} alt="dragonball dropdown icon" />
        </components.DropdownIndicator>
    );
}

const Select = (props) => {
    return (
        <ReactSelect {...props} styles={styles} components={{ Option, SingleValue, DropdownIndicator }} />
    )
}


export default Select;

import './App.css';
import goku from './assets/goku.png'
import gohan from './assets/gohan.png'
import vegeta from './assets/vegeta.png'
import piccolo from './assets/piccolo.png'
import Select from './Select';

const App = (props) => {
    const options = [
        { value: 'goku', label: 'Goku', src: goku, style: { color: '#05055e', backgroundColor: '#ff5b0f' }},
        { value: 'gohan', label: 'Gohan', src: gohan, style: { color: '#1084de', backgroundColor: '#9834eb' }},
        { value: 'vegeta', label: 'Vegeta', src: vegeta, style: { color: 'white', backgroundColor: '#00026b' }},
        { value: 'piccolo', label: 'Piccolo', src: piccolo, style: { color: '#03fc77', backgroundColor: '#2d0061' }},
    ];

    return (
        <div className="select-container">
            <Select options={options} />
        </div>
    )
}

export default App;

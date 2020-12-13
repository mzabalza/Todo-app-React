console.log('App.js is running!')

const app = {
    title: 'Some Title',
    subtitle: 'This is my subtitle',
    options: [],
};

const onFormSubmit = (e) => {
    // Stops the full page refresh
    e.preventDefault();
    // e.target is going to point to the element, the event started from
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const onRemoveAll = (e) => {
    e.preventDefault();
    app.options = [];
    render();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>Age: {app.subtitle}</p>}
            <p>{app.options.length > 0? 'Here are your options' : 'No options'}</p>
            <button onClick={onMakeDecision}>What should I do</button>            
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
            {
                app.options.map((option) => <li key={option}>{option}</li>)
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    
    ReactDOM.render(template, appRoot);
};

render();

import Home from './Pages/Home/Home';

export default () => {
    const App = document.createElement('div');

    App.appendChild(Home());

    return App;
}
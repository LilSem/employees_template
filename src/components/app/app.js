import AppInfo from "../app-info/app-info";
import './app.css';
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form";



function App() {
    const data = [
        {name:'John S.', salary: 800, increase: false},
        {name:'Michael E.', salary: 3000, increase: true},
        {name:'Santos B.', salary: 4000, increase: false}
    ];

    return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployersList data = {data}/>
            <EmployersAddForm/>
        </div>
    )
}

export default App;
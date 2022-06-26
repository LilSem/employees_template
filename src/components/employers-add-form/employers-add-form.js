// import './employers-add-form.css';
import {Component} from "react";
import './employers-add-form.scss';


class EmployersAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name && this.state.salary) {
            this.props.onAdd(this.state.name, this.state.salary);
        }
        this.setState({
            name: '',
            salary: ''
        })
    }

    render() {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit = {this.onSubmit}>
                    <input type="text"
                           name="name"
                           value={name}
                           onChange={this.onValueChange}
                           className="form-control new-post-label"
                           placeholder="Как его зовут?"/>
                    <input type="number"
                           name="salary"
                           value={salary}
                           onChange={this.onValueChange}
                           className="form-control new-post-label"
                           placeholder="З/П в $?"/>

                    <button type="submit"
                            className="btn btn-outline-light"
                            >Добавить
                    </button>
                </form>
            </div>
        )
    }
}

export default EmployersAddForm;
import React from 'react';
import { Link } from 'react-router-dom';



class Category extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            users_id: '',
            categories: [],
            catAdd: {
                name: '',
                namee: ''
            }
        }
    }

    onClick = (event) => {
        event.preventDefault();
        if(this.state.categories.length > 0){
            this.props.history.push("/income_card");
        } else {
            alert('Please add at least 1 category')
        }

        /*   const form = event.target;
          let name = form.namee.value;
          //  let users_id=form.users_idd.value;
          this.createCategory({ name });
          form.namee.value = "";
          //  form.users_idd.value=""; */
    }
    onClick2 = (event) => {
        event.preventDefault();

        const form = event.target;
        let name = this.state.catAdd.namee;
        debugger;
        //  let users_id=form.users_idd.value;
        this.createCategory({ name });
        debugger;
        this.setState({
            catAdd: {
                ...this.state.catAdd,
                namee: ''
            }
        })
        //  form.users_idd.value="";
    }
    onSubmitHandle = (event) => {
        this.setState({
            catAdd: {
                ...this.state.catAdd,
                [event.target.name]: event.target.value

            }
        })
    }


    getCategory = async () => {
        try {
            const response = await fetch("http://localhost:8000/api/categories");
            const result = await response.json();
            console.log(result);
            if (result.success) {
                this.setState({ categories: result.result, error: "" });
            } else {
                this.setState({ error: result.message });
            }
        } catch (err) {
            this.setState({ error: err });
        }
    };

    createCategory = async props => {
        try {
            if (!props || !(props.name)) {
                throw new Error(
                    `you need category name to create a Category list`
                );
            }
            const { name } = props;
            const token = localStorage.getItem('token')
            const response = await fetch(
                `http://localhost:8000/api/categories/create?name=${name}&token=${token}`
            );
            const json = await response.json();
            if (json.success) {
                // we reproduce the user that was created in the database, locally
                const categoryY = json.data;
                const categories = [...this.state.categories, categoryY];
                this.setState({ categories, error: "" });
            } else {
                this.setState({ error: json.message });
            }
        } catch (err) {
            this.setState({ error: err.message });
        }
    };


    render() {
        return (

            <div className="row" style={{ marginTop: "3%" }}>
                <div className=" col-md-7 mx-auto">
                    <div class="card card-signin">
                        <div className="card-body shadow-lg">
                            <h3 className="card-title text-center">Add your Categories Here</h3>
                            <hr />
                            <br />

                            {/* <form onSubmit={this.onClick}> */}
                            <div className="row">
                                <form onSubmit={this.onClick2}>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <h6>Incomes/Expenses Category</h6>
                                            <div className="input-group" style={{ display: "flex", flexDirection: "column" }}>

                                                <input  className="form-control" placeholder="Enter your Category" name="namee" type="text" required
                                                    onChange={this.onSubmitHandle}
                                                    value={this.state.catAdd.namee} />
                                                {/*     <input name="" className="form-control" placeholder="Category 2" name="namee" type="text" required />
                                                <input name="" className="form-control" placeholder="Category 3" name="namee" type="text" required />
 */}

                                                <ul>
                                                    {this.state.categories.map(category => (
                                                        <li key={category.id}>
                                                            {category.name}
                                                        </li>
                                                    ))}
                                                </ul>


                                            </div>
                                            <br />
                                            <button type="submit" className="btn btn-primary" style={{ backgroundColor: 'rgb(54, 54, 112)', }}>+ ADD Category</button>

                                        </div>
                                    </div>
                                </form>
                            </div>
                            <br /><br />
                            <form onSubmit={this.onClick}>
                                <div className="row" style={{ textAlign: "center" }}>
                                    <div className="col-md-12">
                                        <div>
                                            <p className="text-center">Click continue to start adding your incomes and expenses</p>
                                        </div>

                                        <div className="form-group text-center">

                                            <button type="submit" className="btn btn-primary">Continue</button>

                                        </div>
                                    </div>
                                </div>
                            </form>





                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Category;


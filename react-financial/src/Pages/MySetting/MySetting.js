import React from 'react';
import Setting_component from '../../Components/Setting_component/Setting_component';




class MySetting extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      settings: [],
      currencies: [],
      categories: [],
      originalCategories: [],
      user: null,
      settings2: [],
      modeUser: 'view',
      first_name: '',
      last_name: '',
      password: '',
      currency_id: '',
      name: '',

    }
  }

  onHandleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,

    })
  }
  onUserUpdate = async (event) => {
    event.preventDefault();
    try {
      const toUpdate = [];
      const { first_name, last_name, password, currency_id, id } = this.state;

      if (first_name != '') {
        toUpdate.push(first_name)
      }
      if (last_name != '') {
        toUpdate.push(last_name)
      }
      if (password != '') {
        toUpdate.push(password)
      }
      if (currency_id != '') {
        toUpdate.push(currency_id)
      }
      if (toUpdate.length === 0) {
        alert(
          `you need to update one variable at least`
        );
        return;
      }

      const token = localStorage.getItem('token');
      let response;
      let new_first_name = first_name !== '' ? first_name : this.state.user.first_name;
      let new_last_name = last_name !== '' ? last_name : this.state.user.last_name;
      let new_currency_id = currency_id !== '' ? currency_id : this.state.user.currency_id;
      debugger;
      if (password !== '') {
        response = await fetch(`http://localhost:8000/api/user/update?first_name=${new_first_name}&last_name=${new_last_name}&password=${password}&currency_id=${new_currency_id}&token=${token}`, {
          headers: {
            'Accept': 'application/json'
          }
        });

      } else {
        response = await fetch(`http://localhost:8000/api/user/update?id=${id}&first_name=${new_first_name}&last_name=${new_last_name}&currency_id=${new_currency_id}&token=${token}`);
      }
      const json = await response.json();
      if (json.success) {

        this.setState({ user: json.data, first_name: '', last_name: "", currency_id: "", password: "", error: "", modeUser: 'view' });
      } else {
        this.setState({ error: json.message });
      }
    } catch (err) {
      debugger
      this.setState({ error: err });
    }
  }

  onCategoryUpdate = async (event, editedIndex) => {
    event.preventDefault();
    try {
      const toUpdate = [];
      const category = this.state.categories[editedIndex];
      const { id, name } = category.data;

      if (name != '') {
        toUpdate.push(name)
      }
      if (toUpdate.length === 0) {
        alert(
          `you need to update this category`
        );
        return;
      }
      const token = localStorage.getItem('token');
      let response;
      debugger;
      let new_name = name !== '' ? name : this.state.category.name;
      response = await fetch(`http://localhost:8000/api/categories/update/${id}?name=${new_name}&token=${token}`, {
        headers: {
          'Accept': 'application/json'
        }
      });
      const json = await response.json();
      if (json.success) {
        // we reproduce the user that was created in the database, locally
        const categoryY = json.data;
        const new_categories = this.state.categories.map((category, currentIndex) => {
          if (editedIndex !== currentIndex) {
            return category;
          } else {
            return {
              mode: 'view',
              data: categoryY 
            }
          }
        }
        )

        const new_originalCategories = this.state.originalCategories.map((category, currentIndex) => {
          if (editedIndex !== currentIndex) {
            return category;
          } else {
            return categoryY
          }
        }
        )

        this.setState({ categories: new_categories, originalCategories: new_originalCategories, error: "" });
      } else {
        this.setState({ error: json.message });
      }
    } catch (err) {
      this.setState({ error: err });
    }
  }





  createCategory = async (props, index) => {
    try {
      if (!props || !(props.name)) {
        alert(
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
        const new_categories = this.state.categories.map((category, currentIndex) => {
          if (index !== currentIndex) {
            return category;
          } else {
            return {
              mode: 'view',
              data: { ...category, name: category.name }
            }
          }
        }
        )

        this.setState({ categories: new_categories, originalCategories: [...this.state.originalCategories, categoryY], error: "" });
      } else {
        this.setState({ error: json.message });
      }
    } catch (err) {
      this.setState({ error: err.message });
    }


  };


  handleSwitchUserToUpdate = () => {
    // Add api call for later    
    this.setState({
      modeUser: 'edit'
    })
  }
  handleSwitchUserToView = () => {
    this.setState({
      modeUser: 'view', first_name: '', last_name: "", currency_id: "", password: ""
    })
  }
  handleSwitchCategoryToUpdate = (category_index) => {
    const new_categories = this.state.categories.map((category, index) => {

      if (index !== category_index) {
        return category;
      }
      else {
        return {
          ...category,
          mode: 'edit'
        }
      }
    })
    this.setState({
      categories: new_categories
    })
  }
  handleSwitchCategoryToView = (index) => {

    const new_categories = this.state.categories.map((category, currentIndex)=> {

      if(currentIndex !== index){
        return category;
      }else {
        return {
          mode: 'view',
          data: this.state.originalCategories[index]
        }
      }
    })
    this.setState({
          categories: new_categories
        } 
    )
  }

  handleCancelCategory = (index) => {
    const categories = this.state.categories;
    debugger;
    categories.splice(index, 1)
    this.setState({
      categories: categories
    })
  }
  handleAddCategory = () => {
    this.setState({
      categories: [
        ...this.state.categories,
        {
          mode: 'add',
          data: {
            name: '',
          }
        }
      ]
    })
  }

  handleCategoryInputChange = (event, index) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    const newCategories = this.state.categories;

    newCategories[index]['data'] = {
      ...newCategories[index]['data'], [name]: value
    }

    this.setState(
      {
        categories: newCategories
      }
    );
  }


  async componentDidMount() {
    const response = await fetch('http://localhost:8000/api/currencies');
    const json = await response.json();
    if (json.success === true) {
      this.setState({
        currencies: json.data
      })
    }
    this.getCurrentUser();
    this.getUserCategories();
  }

  getCurrentUser = async () => {

    const token = localStorage.getItem('token');
    const response = await fetch(`http://localhost:8000/api/user?token=${token}`);
    const json = await response.json();
    if (json.success === true) {
      this.setState({
        user: json.data
      })
    }
  }
  getUserCategories = async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`http://localhost:8000/api/categories?token=${token}`);
    const json = await response.json();
    if (json.success === true) {
      const categories = json.data.map(category => {
        return {
          mode: 'view',
          data: category
        }
      })
      this.setState({
        categories: categories,
        originalCategories: json.data
      })
    }

  }

  render() {
    return (
      <div style={{ marginTop: "50px" }}>
        <Setting_component createCategory={this.createCategory} handleCategoryInputChange={this.handleCategoryInputChange} handleCancelCategory={this.handleCancelCategory} handleAddCategory={this.handleAddCategory} categories={this.state.categories} currencies={this.state.currencies} user={this.state.user} first_name={this.state.first_name} last_name={this.state.last_name} password={this.state.password} currency_id={this.state.currency_id} name={this.state.name}
          settings={this.state.settings} onHandleChange={this.onHandleChange} onUserUpdate={this.onUserUpdate} onCategoryUpdate={this.onCategoryUpdate} handleSwitchUserToUpdate={this.handleSwitchUserToUpdate} handleSwitchUserToView={this.handleSwitchUserToView} handleSwitchCategoryToUpdate={this.handleSwitchCategoryToUpdate} handleSwitchCategoryToView={this.handleSwitchCategoryToView} modeUser={this.state.modeUser} modeCategory={this.state.modeCategory} />
      </div>
    )
  }
}
export default MySetting;






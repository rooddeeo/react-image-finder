import { Component } from "react";
//Компонент принимает один проп onSubmit - функцию для передачи значения инпута при сабмите формы. 
//Создает DOM-элемент следующей структуры.

class Searchbar extends Component {
  state = {
    name: '',
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({search:this.state});
    this.setState({
      name: '',
    });
  };
  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };
  render() {
    return (
<header className="searchbar">
<form onSubmit={this.handleSubmit}>
<input
      className="input"
      type="text"
      autoComplete="off"
      autoFocus
      name="name"
      value={this.state.name}
      onChange={this.handleChange}
      placeholder="Search images and photos"
    />
        <button type="submit" className="button">
      <span className="button-label">Search</span>
    </button>
</form>
</header>
  )}}
export default Searchbar;
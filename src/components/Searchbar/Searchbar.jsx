
//Компонент принимает один проп onSubmit - функцию для передачи значения инпута при сабмите формы. 
//Создает DOM-элемент следующей структуры.

const Searchbar = (onSubmit) => {
  <header className="searchbar">
  <form className="form">
    <button type="submit" className="button">
      <span className="button-label">Search</span>
    </button>

    <input
      className="input"
      type="text"
      autocomplete="off"
      autofocus
      //value={}
      //onChange={}
      placeholder="Search images and photos"
    />
  </form>
</header>
};

export default Searchbar
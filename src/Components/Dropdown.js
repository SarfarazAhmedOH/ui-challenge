import React from 'react';
import '../Css/Libraries/Bootstrap/css/bootstrap.css';

class Dropdown extends React.Component {

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClickOutside, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside, false)
  }

  handleClickOutside = (e) => {
    if (this.node.contains(e.target)) {
        return;
    }
    this.props.handleClickOutside();
  }
  render() {

    const { dropdownActive, toggle, orderBy, order, doOrderBy, doOrder } = this.props;
    const checked = <span className={'glyphicon glyphicon-ok'}></span>;
    const output = names.map((item, index)=>{
        return <li key={index}><a onClick={ doOrderBy } data-value={ item[0]}>{item[1] } { orderBy === item[0] ? checked : null }</a></li>
    });

    return (
      <div className={ dropdownActive ? "dropdown  pull-right open" : "dropdown pull-right " } ref={node => this.node = node}>
        <a className={'button button-info'} onClick={ toggle }>
          Sort by
          <span className="caret"></span>
        </a>
        <ul className={"dropdown-menu"}>
          { output }
          <li className={"divider"}></li>
          <li><a onClick={ doOrder } data-value="asc">ascending { order === "asc" ? checked : null }</a></li>
          <li><a onClick={ doOrder } data-value="desc">descending { order === "desc" ? checked : null }</a></li>
        </ul>
      </div>
   )
  }
}

const names = [["last_name", "last name"],["first_name", "first name"],["email_address","email address"],["specialty","specialty"],["practice_name","practice name"]]

export default Dropdown;

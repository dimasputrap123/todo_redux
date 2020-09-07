import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { remove_list } from "../../redux/action/listAction";
const List = (props) => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/add");
  };
  const handleDelete = (item) => {
    props.remove_list(item);
  };
  return (
    <div className="wrapper">
      <h2 className="mb-4">List</h2>
      <ul className="list-group mb-3">
        {props.list.map((item, id) => {
          console.log(id);
          return (
            <li
              className="list-group-item list-group-item-action d-flex justify-content-between"
              aria-disabled="true"
              key={id}
            >
              <p className="mb-0">{item.value}</p>
              {/* <i class="fas fa-trash-alt"></i> */}
              <i
                className="fa fa-trash"
                onClick={() => handleDelete(item.key)}
              ></i>
            </li>
          );
        })}
        {/* <li
          className="list-group-item list-group-item-action d-flex justify-content-between"
          aria-disabled="true"
        >
          <p className="mb-0">Cras justo odio</p>
          <i className="fa fa-trash" onClick={handleDelete}></i>
        </li>
        <li
          className="list-group-item list-group-item-action d-flex justify-content-between"
          aria-disabled="true"
        >
          <p className="mb-0">Cras justo odio</p>
          <i className="fa fa-trash" onClick={handleDelete}></i>
        </li>
        <li
          className="list-group-item list-group-item-action d-flex justify-content-between"
          aria-disabled="true"
        >
          <p className="mb-0">Cras justo odio</p>
          <i className="fa fa-trash" onClick={handleDelete}></i>
        </li>
        <li
          className="list-group-item list-group-item-action d-flex justify-content-between"
          aria-disabled="true"
        >
          <p className="mb-0">Cras justo odio</p>
          <i className="fa fa-trash" onClick={handleDelete}></i>
        </li> */}
      </ul>
      <button
        type="button"
        className="btn btn-primary btn-block"
        onClick={handleClick}
      >
        Add List
      </button>
    </div>
  );
};

const mapStateProps = (state) => ({
  list: state.listReducer.list,
});

const mapDispatchProps = {
  remove_list,
};

export default connect(mapStateProps, mapDispatchProps)(List);

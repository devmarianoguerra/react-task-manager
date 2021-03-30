import React from "react";

function Card(props) {
  const { id, title, description, edit, erase } = props;

  const editTask = () => {
    edit(id);
  };

  const deleteTask = () => {
    erase(id);
  };

  return (
    <div className="card-wrapper">
      <div className="card-container">
        <div className="btn-wrapper">
          <button onClick={editTask} className="edit-btn">
            Editar
          </button>
          <button onClick={deleteTask} className="close-btn">
            X
          </button>
        </div>
        <h1>
          {id} - {title}
        </h1>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;

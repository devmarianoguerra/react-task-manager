import React, { Component } from "react";
import Card from "./Card";

class Task extends Component {
  state = {
    tasks: [
      {
        id: 1,
        title: "Recursividad",
        description: "Estudiar funciónes recursivas",
      },
      {
        id: 2,
        title: "Algoritmos",
        description: "Estudiar ejercicios de algoritmos",
      },
      {
        id: 3,
        title: "Time Complexity",
        description: "Repasar Time Complexity",
      },
    ],
    idCount: 3,
    newTask: {
      id: null,
      title: "",
      description: "",
    },
    editTask: false,
    editedTask: {
      id: null,
      title: "",
      description: "",
    },
  };

  handleInput = (e) => {
    let { idCount, newTask } = this.state;

    if (e.target.name === "title") {
      this.setState({
        newTask: {
          ...this.state.newTask,
          id: this.state.idCount + 1,
          title: e.target.value,
        },
      });
    } else {
      this.setState({
        newTask: {
          ...newTask,
          id: idCount + 1,
          description: e.target.value,
        },
      });
    }
  };

  // setEditedTask = (data) => {
  //   console.log(e.target.value);
  //   console.log(data);
  // };

  addTask = () => {
    this.setState({
      tasks: [...this.state.tasks, this.state.newTask],
      idCount: this.state.idCount + 1,
    });

    console.log("id count: ", this.state.idCount);
  };

  editTask = (id) => {
    //console.log(this.state.tasks[1].id);
    const { tasks } = this.state;
    let filtered = tasks.filter((item) => item.id === id);

    this.setState({ editTask: true });

    this.handleEdit = (e) => {
      let currentID = filtered[0].id;

      if (e.target.name === "title") {
        this.setState({
          editedTask: {
            ...this.state.editedTask,
            id: currentID,
            title: e.target.value,
          },
        });
      } else {
        this.setState({
          editedTask: {
            ...this.state.editedTask,
            id: currentID,
            description: e.target.value,
          },
        });
      }

      console.log("Edited Task: ", this.state.editedTask);

      let editedArr = tasks.map((item) =>
        item.id === filtered[0].id ? this.state.editedTask.title : item.title
      );

      this.setEditTask(editedArr);
    };
  };

  // setEditTask = (e, arr) => {
  //   console.log("EDITED ARRAY: ", arr);
  //   this.setState({ tasks: arr });
  // };

  closeEditor = () => {
    this.setState({ editTask: false });
  };

  deleteTask = (id) => {
    let erased = this.state.tasks.filter((item) => item.id !== id);
    this.setState({ tasks: erased });
  };

  render() {
    return (
      <>
        <h1>Administrador de tareas</h1>
        <div className="input-wrapper">
          <label>Título</label>
          <input
            className="task-input"
            type="text"
            placeholder="Escribe aquí tu tarea a realizar"
            onChange={this.handleInput}
            name="title"
          />
          <label>Descripción</label>
          <input
            className="task-input"
            type="text"
            placeholder="Escribe aquí la descripción de tu tarea"
            onChange={this.handleInput}
            description="description"
          />
          <button className="add-task-btn" onClick={this.addTask}>
            Agregar tarea
          </button>
        </div>
        {this.state.editTask && (
          <div className="input-wrapper">
            <h3>Editor de tareas: </h3>
            <button onClick={this.closeEditor}>X</button>
            <label>Título</label>
            <input
              className="task-input"
              type="text"
              placeholder="Escribe aquí tu tarea a realizar"
              onChange={this.handleEdit}
              name="title"
            />
            <label>Descripción</label>
            <input
              className="task-input"
              type="text"
              placeholder="Escribe aquí la descripción de tu tarea"
              onChange={this.handleEdit}
              description="description"
            />
            <button className="add-task-btn" onClick={this.setEditTask}>
              Editar Tarea
            </button>
          </div>
        )}
        <ul>
          {this.state.tasks.map((item) => (
            <Card
              id={item.id}
              title={item.title}
              description={item.description}
              edit={this.editTask}
              erase={this.deleteTask}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default Task;

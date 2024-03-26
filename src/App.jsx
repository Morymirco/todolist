import { useState } from "react";
import Todo from "./components/Todo";
function App() {
  const [tab, settab] = useState(["mory", "amadou", "mamy"]);
  const [newelement, setelement] = useState("");
  const handledelete = (index) => {
    const todocopie = [...tab];
    todocopie.splice(index, 1);
    settab(todocopie);
  };
  const handchange = (e) => {
    setelement(e.target.value);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    if (newelement.trim() !== "") {
      settab([...tab, newelement]);
      
    }
    setelement("");
  };
  return (
    <>
      <marquee
        behavior="scroll"
        direction="right"
        className="text-primary-emphasis fs-1"
      >
        Bienvenue sur mon Todoliste
      </marquee>
      <form action="" onSubmit={handlesubmit}>
        <div className="input-group mb-3 mt-4">
          <input
            type="text"
            class="form-control"
            placeholder="Ajouter un element "
            aria-label="Recipient's username"
            onChange={handchange}
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-outline-primary "
            type="submit"
            id="button-addon2"
          >
            Ajouter +
          </button>
        </div>
        {/* <input
          className="form-control mb-3"
          type="text"
          placeholder="ajouter un element"
        /> */}
      </form>
      <ol class="list-group list-group-numbered">
        {tab.map((element, index) => {
          return (
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">{element}</div>
              <button
                className="btn btn bg-danger text-white "
                onClick={() => {
                  handledelete(index);
                }}
              >
                X
              </button>
            </li>
          );
        })}
      </ol>
      <Todo></Todo>
    </>
  );
}

export default App;

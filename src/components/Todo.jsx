import { useState } from "react";

function Todo() {
  const [tab, settab] = useState([
    {
      nom: "mory",
      message: "bonjour a tout le monde",
      date: "22/03/2024",
    },
    {
      nom: "amadou",
      message: "bonjour a tout le monde kankan",
      date: "22/03/2024",
    },
    {
      nom: "mamy",
      message: "bonjour a tout le monde conakry",
      date: "22/03/2024",
    },
  ]);
  const [newelement, setelement] = useState("");
  const [newmessage, setmessage] = useState("");
  const handledelete = (index) => {
    const todocopie = [...tab];
    todocopie.splice(index, 1);
    settab(todocopie);
  };
  const handchange = (e) => {
    setelement(e.target.value);
  };

  const handchangeMessage = (e) => {
    setmessage(e.target.value);
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    const madate = new Date();
    const heure = madate.getHours()+":"+madate.getMinutes() + ":" + madate.getSeconds()
    const da= new Date().toLocaleDateString();
    const date  = ""+heure + "   " + da

    console.log(date);
    const tabcopie = [...tab];
    if (newelement.trim() !== "" && newmessage.trim() !== "") {
      tabcopie.push({ nom: newelement, message: newmessage,date :date });
    }

    settab(tabcopie);

    setelement("");
    setmessage("");
  };
  return (
    <>
      <marquee
        behavior="scroll"
        direction="right"
        className="text-primary-emphasis fs-1"
      >
        LA SECTION COMMENTAIRE
      </marquee>
      <form action="" onSubmit={handlesubmit}>
        <div className="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Votre Nom
          </label>
          <input
            type="text"
            class="form-control"
            placeholder="saisir votre nom "
            aria-label="Recipient's username"
            onChange={handchange}
            aria-describedby="button-addon2"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Votre message
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            placeholder="votre message ici ...."
            rows="3"
            onChange={handchangeMessage}
          ></textarea>
        </div>
        <button
          className="btn btn-outline-primary mb-3 "
          type="submit"
          id="button-addon2"
        >
          Ajouter +
        </button>
    
      </form>
      <div class="accordion" id="accordionExample">
        {tab.map((element, index) => {
          return (
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  {element.nom}
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body d-flex justify-content-between ">
                  {element.message}
                  <button
                    className="btn bg-danger text-white "
                    onClick={() => {
                      handledelete(index);
                    }}
                  >
                    X
                  </button>
                </div>
                <div className="text-center text-body-tertiary">
                  {element.date}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Todo;

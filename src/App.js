import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]); // prostor pro vypsání dat

  const formSubmit = (event) => {
    event.preventDefault();

    if (name && email) {
      const oneUser = { name: name, email: email }; // vytvořím objekt
      setUsers((users) => {
        return [...users, oneUser]; // setState vrací všechny usery a nového oneUsera
      });
    } else {
      console.log("Něco nebylo vyplněno");
    }
    setName(""); // vymazání obsahu pole po odeslání
    setEmail("");
  };

  return (
    <div>
      <article>
        <form onSubmit={formSubmit}>
          <input
            className="user-info"
            type="text"
            placeholder="Jméno a příjmení"
            value={name} // propojení inputu a hodnoty v useSatu
            onChange={(event) => setName(event.target.value)} // při změně se nastaví hodnota inputu jako setState
          />
          <input
            className="user-info"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input type="submit" placeholder="Odeslat" />
        </form>

        {users.map((oneUser, index) => {
          const { name, email } = oneUser; //destrukce objektu

          return (
            <div className="item" key={index}>
              <h4>{name}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </div>
  );
};

export default App;

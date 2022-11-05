import "./styles.css";
const Personagens = () => {
  const personagens = [
    "Jill Valentine",
    "Claire Redfield",
    "Ada Wong",
    "Chris Redfield",
    "Leon S. Kennedy",
    "Albert Wesker"
  ];
  const personagensFiltradas = personagens.filter((personagem) => {
    const ehdaFamilia = personagem.toLocaleLowerCase().includes("valentine");
    return ehdaFamilia;
  });

  return (
    <div>
      <h3>Personagens de Resident Evil</h3>
      <ul>
        {personagensFiltradas.map((personagem) => (
          <li>{personagem}</li>
        ))}
      </ul>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Personagens />
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

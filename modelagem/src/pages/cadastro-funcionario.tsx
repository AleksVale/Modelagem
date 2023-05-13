
export default function CadastroFuncionario(){
  return(
    <main className="flex flex-col items-center justify-center grow">
      <h1>Cadastro Funcionário</h1>
      <form action="/send-data-here" method="post" className="text-black">
        <label htmlFor="first">First name:</label>
        <input type="text" id="first" name="first" />
        <label htmlFor="last">Last name:</label>
        <input type="text" id="last" name="last" />
        <button type="submit">Submit</button>
      </form>
    </main>
  )
}
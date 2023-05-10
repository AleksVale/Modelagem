
export function Sidebar(){
  return (
    <div className="h-screen px-4 pt-8 pb-4 bg-light flex justify-between flex-col border border-dashed">
      <ul className="h-screen flex justify-between flex-col dark:bg-red-400">
        <li >produto</li>
        <li>pedido</li>
        <li>estoque</li>
        <li>funcionario</li>
      </ul>
    </div>
  )
}
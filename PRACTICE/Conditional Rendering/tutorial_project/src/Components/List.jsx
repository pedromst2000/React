export default function List() {
  const list = [
    { id: 1, name: 1 },
    { id: 2, name: 2 },
    { id: 3, name: 'Pedro' },
  ];

  let countString = 0;
  let countInteger = 0;

  list.forEach((item) => {
    if (typeof item.name === "string") {
      countString++;
    } else {
      countInteger++;
    }
  });

  return (
    <div>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <h3>
        {
            list.length > 0 ? 
            `Existe(m) ${countString} nome(s) e ${countInteger} número(s) na lista`
            : 'Não existe nenhum item na lista'

}
      </h3>
    </div>
  );
}
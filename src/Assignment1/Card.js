export default function Card(props) {
  // console.log(props);
  return (
    <>
      {props.data.map((fruits) => {
        return (
          <div>
            <p>{fruits.name}</p>
            <p>{fruits.color}</p>
            <p>{fruits.size}</p>
            <p>{fruits.shape}</p>
            <br />
          </div>
        );
      })}
    </>
  );
}

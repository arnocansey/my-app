export default function stores(props) {
  return (
    <>
      {props.data.map((stores) => {
        return (
          <div>
            <p>{stores.name}</p>
            <p>{stores.location}</p>
          </div>
        );
      })}
    </>
  );
}

import "./Assignment.css";

export default function Assignment2(props) {
  return (
    <>
      <h1>Already downloaded</h1>
      <p>Learn more about what you can do on ZoomRide App</p>
      {props.data.map((Assignment) => {
        return (
          <section className="header">
            <div className="style">
              <h1>{Assignment.header}</h1>
              <p>{Assignment.sub}</p>
              <br />
            </div>
          </section>
        );
      })}
    </>
  );
}

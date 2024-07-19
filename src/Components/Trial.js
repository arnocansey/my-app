// import React from "react";
// import "./images/mon bebe.jpg";

export default function Trial(props) {
  return (
    <>
      {props.data.map((props) => {
        return (
          <div className="header">
            <h1 className="txt">{props.header}</h1>
            <h2 className="txt">{props.subheader}</h2>
            <h3 className="txt">{props.menu} </h3>
            {props.menulist.map((props) => {
              return (
                <div className="list">
                  <div className="list1">
                    <li>{props.m1}</li>
                    <li>{props.m2}</li>
                    <li>{props.m3} </li>
                  </div>
                  {props.m3List.map((props) => {
                    return (
                      <div className="food">
                        <div>
                          <li>{props.m3Food1}</li>
                          <br />
                          <li>{props.m3Food2}</li>
                          <br />
                        </div>
                        <div>
                          <li>{props.m3Food3}</li>
                        </div>
                        <div>{/* <li>{props.m3Food4}</li> */}</div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
}

// import Items from "./Items";

export default function Stores() {
  var stores = [
    {
      name: "provision",
      location: "Ayensu",
    },

    {
      name: "Mart",
      location: "Science",
    },
  ];
  return <Items data={stores} />;
}

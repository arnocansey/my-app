import Trial from "./Trial";
import "./index.css";

export default function Trial2() {
  let Contents = [
    {
      header: "Welcome To Ocansey's Resturant",
      subheader: "What we serve",
      menu: "Menu:",
      menulist: [
        {
          m1: "Menu 1:",
          m2: "Menu 2:",
          m3: "Menu 3:",
          m3List: [
            {
              m3Food1: "Banku with Okro Stew",
              m3Food2: "Rice and Beans stew",
              m3Food3: "Fufu with groundnut soup",
              m3Food4: "Jollof rice",
            },
          ],
        },
      ],
    },
  ];
  return (
    <>
      <Trial data={Contents} menulist={Contents} m3List={Contents} />
    </>
  );
}

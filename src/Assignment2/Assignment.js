import Assignment2 from "./Assignment2";

export default function Assignment() {
  let Topic = [
    {
      header: "Stay connected",
      sub: "learn more",
    },

    {
      header: "Select ride",
      sub: "learn more",
    },

    {
      header: "Join Community",
      sub: "learn more",
    },

    {
      header: "Open Chat",
      sub: "learn more",
    },

    {
      header: "Express yourself",
      sub: "learn more",
    },

    {
      header: "ZoomRide Business",
      sub: "learn more",
    },
  ];
  return (
    <>
      <Assignment2 data={Topic} />
    </>
  );
}

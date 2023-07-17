import DirectoryItem from "../directory-item/directory-item.component";

import { MachineList } from "./directory.styles";

const wash_machines = [
  {
    id: 1,
    title: "Washing Machine 1",
    status: true,
  },
  {
    id: 2,
    title: "Washing Machine 2",
    status: false,
  },
  {
    id: 3,
    title: "Washing Machine 3",
    status: true,
  },
  {
    id: 4,
    title: "Washing Machine 4",
    status: true,
  },
  {
    id: 5,
    title: "Washing Machine 5",
    status: true,
  },
  {
    id: 6,
    title: "Washing Machine 6",
    status: true,
  },
];

const Directory = () => {
  return (
    <MachineList>
      {wash_machines.map((machine) => (
        <DirectoryItem key={machine.id} machine={machine} />
      ))}
    </MachineList>
  );
};

export default Directory;

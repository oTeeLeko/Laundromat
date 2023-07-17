import { createContext, useEffect, useState } from "react";

const startMachine = (machines, machineToStart) => {
  const startingMachine = machines.find(
    (machine) => machine.id === machineToStart.id
  );
  if (startingMachine) {
    return machines.map((machine) =>
      machine.id === machineToStart.id ? { status: false } : machine
    );
  }
};

export const MachineContext = createContext({
  operate: () => {},
});

export const MachineProvider = ({ children }) => {
  //   const [isMachineAvailable, setIsMachineAvailable] = useState(true);
  const [machines, setMachines] = useState([]);

  const operate = (machineToStart) => {
    setMachines(startMachine(machines, machineToStart));
  };
  const value = {
    operate,
  };
  return (
    <MachineContext.Provider value={value}>{children}</MachineContext.Provider>
  );
};

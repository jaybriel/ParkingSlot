import React, { useState, useRef } from "react";
import "./App.css";

const App = () => {
  const radioRef = useRef();
  const [unparkIndex, setUnparkIndex] = useState(0);
  const [isUnpark, setIsUnpark] = useState(false);
  const [vehicleSize, setVehicleSize] = useState("");
  const [parkingEntry, setParkingEntry] = useState("");
  const getRandomSize = () => {
    // SP = 0, MP = 1, LP = 2
    const max = 2
    const min = 0
    const descriptors = ['SP', 'MP', 'LP']
    const size = Math.round(Math.random() * (max - min) + min)
    const desc = descriptors[size]
    return desc;
}

  const [parkingA, setParkingA] = useState([
    {
      id: 0,
      occupied: false,
      parkingSize: getRandomSize(),
      parkingSlot: "A1",
      startTime: "",
    },
    {
      id: 1,
      occupied: false,
      parkingSize: getRandomSize(),
      parkingSlot: "A2",
      startTime: "",
    },
    {
      id: 2,
      occupied: false,
      parkingSize: getRandomSize(),
      parkingSlot: "A3",
      startTime: "",
    },
    {
      id: 3,
      occupied: false,
      parkingSize: getRandomSize(),
      parkingSlot: "A4",
      startTime: "",
    },
    {
      id: 4,
      occupied: false,
      parkingSize: getRandomSize(),
      parkingSlot: "A5",
      startTime: "",
    },
  ]);

  const [parkingB, setParkingB] = useState([
    {
      id: 5,
      occupied: false,
      parkingSize: getRandomSize(),
      parkingSlot: "B1",
      startTime: "",
    },
    {
      id: 6,
      occupied: false,
      parkingSize: getRandomSize(),
      parkingSlot: "B2",
      startTime: "",
    },
    {
      id: 7,
      occupied: false,
      parkingSize: getRandomSize(),
      parkingSlot: "B3",
      startTime: "",
    },
    {
      id: 8,
      occupied: false,
      parkingSize: getRandomSize(),
      parkingSlot: "B4",
      startTime: "",
    },
    {
      id: 9,
      occupied: false,
      parkingSize: getRandomSize(),
      parkingSlot: "B5",
      startTime: "",
    },
  ]);

  const [parkingC, setParkingC] = useState([
    {
      id: 10,
      occupied: false,
      parkingSize: getRandomSize(),
      parkingSlot: "C1",
      startTime: "",
    },
    {
      id: 11,
      occupied: false,
      parkingSize: getRandomSize(),
      parkingSlot: "C2",
      startTime: "",
    },
    {
      id: 12,
      occupied: false,
      parkingSize: getRandomSize(),
      parkingSlot: "C3",
      startTime: "",
    },
    {
      id: 13,
      occupied: false,
      parkingSize: getRandomSize(),
      parkingSlot: "C4",
      startTime: "",
    },
    {
      id: 14,
      occupied: false,
      parkingSize: getRandomSize(),
      parkingSlot: "C5",
      startTime: "",
    },
  ]);

  const checkSize = (vehicleSize, parkingSize) => {
    if (
      vehicleSize === "S" &&
      (parkingSize === "LP" || parkingSize === "MP" || parkingSize === "SP")
    ) {
      return true;
    } else if (
      vehicleSize === "M" &&
      (parkingSize === "MP" || parkingSize === "LP")
    ) {
      return true;
    } else if (vehicleSize === "L" && parkingSize === "LP") {
      return true;
    } else {
      return false;
    }
  };


  const onUnPark = () => {
    let countparkingA = parkingA.filter(
      (item) => item.occupied === true
    ).length;
    let countparkingB = parkingB.filter(
      (item) => item.occupied === true
    ).length;
    let countparkingC = parkingC.filter(
      (item) => item.occupied === true
    ).length;

    if (countparkingA > 0 || countparkingB > 0 || countparkingC > 0) {
      setIsUnpark(true);
    } else {
      alert("no occupied slots");
    }
  };

  const onPark = (vehicleSize, parkingEntry) => {
    if (vehicleSize === "" || parkingEntry === "") {
      alert("please choose vehicle size and parking entry");
    } else {
      switch (parkingEntry) {
        case "A":
          let indexA = parkingA.find(
            (item) =>
              item.occupied === false &&
              checkSize(vehicleSize, item.parkingSize)
          );
          console.log(indexA);
          if (indexA === undefined) {
            alert("parking A has no slots please park on other entry");
          } else {
            setParkingA(
              parkingA.map((item) => {
                if (item.id === indexA.id) {
                  return { ...item, occupied: true, startTime: new Date() };
                } else {
                  return item;
                }
              })
            );
          }
          break;
        case "B":
          let indexB = parkingB.find(
            (item) =>
              item.occupied === false &&
              checkSize(vehicleSize, item.parkingSize)
          );
          if (indexB === undefined) {
            alert("parking B has no slots please park on other entry");
          } else {
            setParkingB(
              parkingB.map((item) => {
                if (item.id === indexB.id) {
                  return {
                    ...item,
                    occupied: true,
                    startTime: new Date(),
                  };
                } else {
                  return item;
                }
              })
            );
          }

          break;
        case "C":
          let indexC = parkingC.find(
            (item) =>
              item.occupied === false &&
              checkSize(vehicleSize, item.parkingSize)
          );
          if (indexC === undefined) {
            alert("parking C has no slots please park on other entry");
          } else {
            setParkingC(
              parkingC.map((item) => {
                if (item.id === indexC.id) {
                  return { ...item, occupied: true, startTime: new Date() };
                } else {
                  return item;
                }
              })
            );
          }

          break;
      }
    }
  };

  const renderParkingA = () => {
    return parkingA.map((item, index) => {
      return (
        <tr>
          <td>
            {isUnpark && item.occupied ? (
              <input
                type="radio"
                name="parking"
                onChange={() => setUnparkIndex(item.parkingSlot)}
              />
            ) : (
              ""
            )}
          </td>
          <td>{item.occupied.toString()}</td>
          <td>{item.parkingSize}</td>
          <td>{item.occupied ? item.startTime.toString() : ""}</td>
        </tr>
      );
    });
  };

  const renderParkingB = () => {
    return parkingB.map((item, index) => {
      return (
        <tr>
          <td>
            {isUnpark && item.occupied ? (
              <input
                type="radio"
                name="parking"
                onChange={() => setUnparkIndex(item.parkingSlot)}
              />
            ) : (
              ""
            )}
          </td>
          <td>{item.occupied.toString()}</td>
          <td>{item.parkingSize}</td>
          <td>{item.occupied ? item.startTime.toString() : ""}</td>
        </tr>
      );
    });
  };

  const renderParkingC = () => {
    return parkingC.map((item, index) => {
      return (
        <tr>
          <td>
            {isUnpark && item.occupied ? (
              <input
                type="radio"
                name="parking"
                onChange={() => setUnparkIndex(item.parkingSlot)}
              />
            ) : (
              ""
            )}
          </td>
          <td>{item.occupied.toString()}</td>
          <td>{item.parkingSize}</td>
          <td>{item.occupied ? item.startTime.toString() : ""}</td>
        </tr>
      );
    });
  };

  const onSelectUnparkVehicle = (unparkIndex) => {
    let isFoundA = parkingA.find((item) => item.parkingSlot === unparkIndex);
    let isFoundB = parkingB.find((item) => item.parkingSlot === unparkIndex);
    let isFoundC = parkingC.find((item) => item.parkingSlot === unparkIndex);

    if (isFoundA) {
      let diff = new Date() - isFoundA.startTime;

      let totalPayable = compute(isFoundA.parkingSize, diff);
      console.log(totalPayable);

      setParkingA(
        parkingA.map((item) => {
          if (item.id === isFoundA.id) {
            return { ...item, occupied: false, startTime: "" };
          } else {
            return item;
          }
        })
      );
      alert("total charges for parking :" + totalPayable.toString());
      setIsUnpark(false);
      radioRef.current.checked = false;
    } else if (isFoundB) {
      let diff = new Date() - isFoundB.startTime;
      let totalPayable = compute(isFoundB.parkingSize, diff);

      setParkingB(
        parkingB.map((item) => {
          if (item.id === isFoundB.id) {
            return { ...item, occupied: false, startTime: "" };
          } else {
            return item;
          }
        })
      );
      alert("total charges for parking :" + totalPayable.toString());
      setIsUnpark(false);
      radioRef.current.checked = false;
    } else if (isFoundC) {
      let diff = new Date() - isFoundC.startTime;
      let totalPayable = compute(isFoundC.parkingSize, diff);
      setParkingC(
        parkingC.map((item) => {
          if (item.id === isFoundC.id) {
            return { ...item, occupied: false, startTime: "" };
          } else {
            return item;
          }
        })
      );
      alert("total charges for parking :" + totalPayable.toString());
      setIsUnpark(false);
      radioRef.current.checked = false;
    } else {
      alert("slot not found");
    }
  };

  const compute = (size, totalTime) => {
    let remainingTime = totalTime;
    let t24 = 1000 * 60 * 24;
    let t1h = 1000 * 60;
    let charges = 0;

    var hourlyCharge = 0;

    if (size === "SP") {
      hourlyCharge = 20;
    } else if (size === "MP") {
      hourlyCharge = 60;
    } else if (size === "LP") {
      hourlyCharge = 100;
    }

    if (remainingTime > t24) {
      let n24 = parseInt(totalTime / t24);
      charges += n24 * 5000;
      remainingTime -= n24 * t24;
    }

    if (remainingTime > t1h * 3) {
      remainingTime -= t1h * 3;
      charges += 40;
    }

    if (remainingTime > 0) {
      let remainingHours = Math.ceil(remainingTime / t1h);
      charges += remainingHours * hourlyCharge;
    }

    // return total charges
    return charges;
  };

  return (
    <>
      <div>
        Small Vehicle
        <input
          type="radio"
          name="vehicle"
          value="S"
          ref={radioRef}
          onChange={() => setVehicleSize("S")}
          disabled={isUnpark}
        />
        Medium Vehicle
        <input
          type="radio"
          name="vehicle"
          value="M"
          ref={radioRef}
          onChange={() => setVehicleSize("M")}
          disabled={isUnpark}
        />
        Large Vehicle
        <input
          type="radio"
          name="vehicle"
          value="L"
          ref={radioRef}
          onChange={() => setVehicleSize("L")}
          disabled={isUnpark}
        />
      </div>
      <div>
        Entry A
        <input
          type="radio"
          name="entry"
          value="A"
          ref={radioRef}
          onChange={() => {
            setParkingEntry("A");
          }}
          disabled={isUnpark}
        />
        Entry B
        <input
          type="radio"
          name="entry"
          value="B"
          ref={radioRef}
          onChange={() => {
            setParkingEntry("B");
          }}
          disabled={isUnpark}
        />
        Entry C
        <input
          type="radio"
          name="entry"
          value="C"
          ref={radioRef}
          onChange={() => {
            setParkingEntry("C");
          }}
          disabled={isUnpark}
        />
        <br />
        <button type="button" onClick={() => onPark(vehicleSize, parkingEntry)}>
          Park
        </button>
        <button type="button" onClick={() => onUnPark()}>
          Select to Unpark Vehicle
        </button>
      </div>

      <table>
        <thead>
          <td colSpan ="3"><h1>Parking A</h1></td>
          </thead>
        <tr>
          <td></td>
          <td>occupied</td>
          <td>parking size</td>
          <td>start time</td>
        </tr>
        {renderParkingA()}
        </table>
        <table>
        <thead>
          <td colSpan ="3"><h1>Parking B</h1></td>
          </thead>
        <tr>
          <td></td>
          <td>occupied</td>
          <td>parking size</td>
          <td>start time</td>
        </tr>
        {renderParkingB()}
        </table>
        <table>
        <thead>
          <td colSpan ="3"><h1>Parking C</h1></td>
          </thead>
        <tr>
          <td></td>
          <td>occupied</td>
          <td>parking size</td>
          <td>start time</td>
        </tr>

        {renderParkingC()}
        </table>
        

        {isUnpark ? (
          <button
            type="button"
            onClick={() => onSelectUnparkVehicle(unparkIndex)}
          >
            Unpark selected vehicle
          </button>
        ) : (
          ""
        )}

    </>
  );
};

export default App;

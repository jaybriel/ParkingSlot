export const checkSize = (vehicleSize, parkingSize) => {
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
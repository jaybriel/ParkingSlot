export const compute = (size, totalTime) => {
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

    return charges;
  };
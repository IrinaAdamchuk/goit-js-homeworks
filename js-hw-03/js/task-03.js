"use strict";

const findBestEmployee = employees => {
  let max = 0;
  let name;
  const entries = Object.entries(employees);

  for (const entry of entries) {
    if (max < entry[1]) {
      max = entry[1];
      name = entry[0];
    }
  }
  return name;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99
  })
);

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4
  })
);

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38
  })
);

import fs from "fs";
import path from "path";
import parse from "csv-parse/lib/sync.js";
import prettier from "prettier"

const objectorsPath = path.join("objectors.json");
const donationsPath = path.join("donations.json");
const housePath = path.join("csv", "2020", "house.csv");
const senatePath = path.join("csv", "2020", "senate.csv");

/** @type {[name: string, cash: string][]} */
const house2020 = parse(fs.readFileSync(housePath, "utf8"));
/** @type {[name: string, cash: string][]} */
const senate2020 = parse(fs.readFileSync(senatePath, "utf8"));
const allDonations = [...house2020, ...senate2020];

/** @type {import("./objectors.json")} */
const objectors = JSON.parse(fs.readFileSync(objectorsPath, "utf8"));

let total = 0;
const donations = [];
objectors.house.forEach((objector) => {
  const donation = allDonations.find((d) => d[0].includes(objector));
  if (donation) {
    const amount = Number(donation[1].slice(1));
    donations.push([objector, amount]);
    total += amount;
  }
});

const data = {
  total,
  donations,
};

const donationsString = prettier.format(JSON.stringify(data, null, "   "), { filepath: donationsPath}) 
fs.writeFileSync(donationsPath, donationsString);

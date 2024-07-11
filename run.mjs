import cheerio from "cheerio";
import fs from "fs";

const $ = cheerio.load(fs.readFileSync("test.html"));

// Initialize an array to hold the jet details
const jets = [];

// Iterate over each jet section and extract details
$("h3").each((i, el) => {
  const jet = {};
  jet.name = $(el).text();
  jet.video_url = $(el).next("iframe").attr("src");
  jet.description = $(el).nextAll("p").first().text();

  const characteristics = [];
  $(el)
    .nextAll(".descriptionjet")
    .first()
    .find("li")
    .each((i, li) => {
      characteristics.push($(li).text());
    });
  jet.key_characteristics = characteristics;

  const tableRow = $(el).nextAll("table").first().find("tbody tr");
  jet.range_miles = tableRow.find("td").eq(1).text();
  jet.passengers = tableRow.find("td").eq(2).text();
  jet.estimated_market_price = tableRow.find("td").eq(3).text();
  jet.manufacturer_website = tableRow.find("td").eq(4).find("a").attr("href");

  jets.push(jet);
});

// Convert the array to JSON
const jsonResult = JSON.stringify({ jets }, null, 2);

// Output the JSON data
console.log(jsonResult);

// Optionally, write the JSON data to a file
fs.writeFileSync("jets.json", jsonResult, "utf-8");

import housesData from "../../../houses.json";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// In-memory storage for demo purposes (will reset on each deployment)
let houses = housesData.houses;

export default async function handler(req, res) {
  const method = req?.method;
  await delay(1000);

  switch (method) {
    case "GET":
      try {
        if (!houses) {
          res.status(404).send("Error: Request failed with status code 404");
        } else {
          res.setHeader("Content-Type", "application/json");
          res.status(200).send(JSON.stringify(houses, null, 2));
          console.log("GET /api/houses  status: 200");
        }
      } catch (e) {
        console.log("/api/houses error:", e);
      }
      break;

    case "POST":
      try {
        const recordFromBody = req?.body;
        recordFromBody.id = Math.max(...houses.map((h) => h.id)) + 1;
        houses = [...houses, recordFromBody];
        res.status(200).json(recordFromBody);
        console.log(`POST /api/houses status: 200`);
      } catch (e) {
        console.log("/api/houses POST error:", e);
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

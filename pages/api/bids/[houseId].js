import bidsData from "../../../bids.json";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// In-memory storage for demo purposes (will reset on each deployment)
let bids = bidsData.bids;

export default async function userHandler(req, res) {
  const houseId = parseInt(req?.query?.houseId);
  const method = req?.method;

  switch (method) {
    case "GET":
      try {
        await delay(1000);
        const filteredBids = bids.filter((rec) => rec.houseId === houseId);
        if (!bids)
          res.status(404).send("Error: Request failed with status code 404");

        res.setHeader("Content-Type", "application/json");
        res.status(200).send(JSON.stringify(filteredBids, null, 2));

        console.log(`GET /api/bids/${houseId} status: 200`);
      } catch (e) {
        console.log("/api/bids error:", e);
      }

      break;
    case "POST":
      try {
        await delay(1000);
        const recordFromBody = req?.body;
        recordFromBody.id = Math.max(...bids.map((b) => b.id)) + 1;
        bids = [...bids, recordFromBody];
        res.status(200).json(recordFromBody);
        console.log(`POST /api/bids/${houseId} status: 200`);
      } catch (e) {
        console.log("/api/bids POST error:", e);
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

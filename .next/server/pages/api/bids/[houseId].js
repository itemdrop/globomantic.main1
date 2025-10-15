"use strict";
(() => {
var exports = {};
exports.id = 97;
exports.ids = [97];
exports.modules = {

/***/ 496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ userHandler)
});

;// CONCATENATED MODULE: ./bids.json
const bids_namespaceObject = JSON.parse('{"U":[{"id":1,"houseId":1,"bidder":"Sonia Reading","amount":200000},{"id":2,"houseId":1,"bidder":"Dick Johnson","amount":202400},{"id":3,"houseId":2,"bidder":"Mohammed Vahls","amount":302400},{"id":4,"houseId":2,"bidder":"Jane Williams","amount":310500},{"id":5,"houseId":2,"bidder":"John Kepler","amount":315400},{"id":6,"houseId":3,"bidder":"Bill Mentor","amount":201000},{"id":7,"houseId":4,"bidder":"Melissa Kirk","amount":410000},{"id":8,"houseId":4,"bidder":"Scott Max","amount":450000},{"id":9,"houseId":4,"bidder":"Christine James","amount":470000},{"id":10,"houseId":5,"bidder":"Omesh Carim","amount":450000},{"id":11,"houseId":5,"bidder":"Charlotte Max","amount":150000},{"id":12,"houseId":5,"bidder":"Marcus Scott","amount":170000},{"houseId":1,"bidder":"Roland","amount":203000,"id":13},{"houseId":1,"bidder":"dsdsdsd","amount":32328,"id":14},{"houseId":5,"bidder":"efan2","amount":232323,"id":15},{"houseId":5,"bidder":"323","amount":0,"id":16}]}');
;// CONCATENATED MODULE: ./pages/api/bids/[houseId].js

const delay = (ms)=>new Promise((resolve)=>setTimeout(resolve, ms));
// In-memory storage for demo purposes (will reset on each deployment)
let bids = bids_namespaceObject.U;
async function userHandler(req, res) {
    const houseId = parseInt(req?.query?.houseId);
    const method = req?.method;
    switch(method){
        case "GET":
            try {
                await delay(1000);
                const filteredBids = bids.filter((rec)=>rec.houseId === houseId);
                if (!bids) res.status(404).send("Error: Request failed with status code 404");
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
                recordFromBody.id = Math.max(...bids.map((b)=>b.id)) + 1;
                bids = [
                    ...bids,
                    recordFromBody
                ];
                res.status(200).json(recordFromBody);
                console.log(`POST /api/bids/${houseId} status: 200`);
            } catch (e1) {
                console.log("/api/bids POST error:", e1);
            }
            break;
        default:
            res.setHeader("Allow", [
                "GET",
                "PUT"
            ]);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(496));
module.exports = __webpack_exports__;

})();
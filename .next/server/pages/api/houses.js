"use strict";
(() => {
var exports = {};
exports.id = 480;
exports.ids = [480];
exports.modules = {

/***/ 579:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _houses_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83);

const delay = (ms)=>new Promise((resolve)=>setTimeout(resolve, ms));
// In-memory storage for demo purposes (will reset on each deployment)
let houses = _houses_json__WEBPACK_IMPORTED_MODULE_0__/* .houses */ .e;
async function handler(req, res) {
    const method = req?.method;
    await delay(1000);
    switch(method){
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
                recordFromBody.id = Math.max(...houses.map((h)=>h.id)) + 1;
                houses = [
                    ...houses,
                    recordFromBody
                ];
                res.status(200).json(recordFromBody);
                console.log(`POST /api/houses status: 200`);
            } catch (e1) {
                console.log("/api/houses POST error:", e1);
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
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [83], () => (__webpack_exec__(579)));
module.exports = __webpack_exports__;

})();
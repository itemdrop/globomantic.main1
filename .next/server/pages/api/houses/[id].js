"use strict";
(() => {
var exports = {};
exports.id = 459;
exports.ids = [459];
exports.modules = {

/***/ 282:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ userHandler)
/* harmony export */ });
/* harmony import */ var _houses_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83);

const delay = (ms)=>new Promise((resolve)=>setTimeout(resolve, ms));
async function userHandler(req, res) {
    const id = parseInt(req?.query?.id);
    await delay(1000);
    const houses = _houses_json__WEBPACK_IMPORTED_MODULE_0__/* .houses */ .e;
    const house = houses.find((rec)=>rec.id === id);
    if (house) {
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(house);
    } else {
        res.status(404).send("house not found");
    }
    console.log(`GET /api/houses/${id} status: 200`);
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [83], () => (__webpack_exec__(282)));
module.exports = __webpack_exports__;

})();
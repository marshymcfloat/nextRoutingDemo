"use strict";
(() => {
var exports = {};
exports.id = 958;
exports.ids = [958];
exports.modules = {

/***/ 5940:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "mongodb"
const external_mongodb_namespaceObject = require("mongodb");
;// CONCATENATED MODULE: ./pages/api/new-meetup.js

async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;
        const client = await external_mongodb_namespaceObject.MongoClient.connect("mongodb+srv://canoydaniel06:SVeYxWhHQu6bxFF6@cluster0.tqgcw.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0");
        const db = client.db();
        const meetupCollection = db.collection("meetups");
        const result = await meetupCollection.insertOne(data);
        console.log(result);
        res.status(201).json({
            message: "Meetup inserted successfully."
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5940));
module.exports = __webpack_exports__;

})();
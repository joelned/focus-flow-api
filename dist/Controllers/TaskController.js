import express from "express";
const app = express();
app.get("/myapi", (req, res) => {
    res.json({
        "username": "joelned",
        "password": "ceiling"
    });
});
app.listen(3000, () => {
    console.log("Server Started On Port 3000");
});
//# sourceMappingURL=TaskController.js.map
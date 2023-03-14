const { Router } = require("express");
const router = Router();

router.get('/', (req, resp) => {
    const date ={
        "name": "dave",
        "email":"dpino@uci.cu"
    }
    resp.json(date);
})

module.exports = router;
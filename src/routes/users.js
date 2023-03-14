const { Router } = require("express");
const router = Router();


router.get('/', async (req, resp) => {
   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
   const users = await response.json();
   resp.json(users);
})

module.exports = router;
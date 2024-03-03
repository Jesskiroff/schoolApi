const router = require('express').Router();
const {pool} = require('../db/index')
//ROUTE: localhost:1338/api/students

//ROUTE: Get all students
router.get('/', async(req, res, next) => {

    try {
        const { rows } = await pool.query('SELECT * FROM students');
        console.log('Query Result: ', rows);
        res.json(rows);
    } catch (err){
        console.error(err);
        res.status(500).send('Server Error');
        }
});
router.get('/:id', async(req, res, next)=> {
   try {
    
      const {id} = req.params;
      const singleStudent = await pool.query (`SELECT * FROM students WHERE id = ${id}`)
      res.json(singleStudent.rows)
    } catch (err){
      console.error(err);
      res.status(500).send('Server Error with single student')
    }
  }
)
module.exports = router;
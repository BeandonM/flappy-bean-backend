const pool = require('./db');
const queries = require('./queries');

const getScores = (req, res) =>{
    pool.query(queries.getScores, (error, results) =>{
        if(error) throw error;
        res.status(200).json(results.rows);
    });
}

const getTopHour = (req, res) =>{
    pool.query(queries.getTopHour, (error, results) =>{
        if(error) throw error;
        res.status(200).json(results.rows);
    });
}

module.exports = {
    getScores,
    getTopHour,
};
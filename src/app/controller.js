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

const getTopDay = (req, res) =>{
    pool.query(queries.getTopDay, (error, results) =>{
        if(error) throw error;
        res.status(200).json(results.rows);
    });
}

const getTopMonth = (req, res) =>{
    pool.query(queries.getTopMonth, (error, results) =>{
        if(error) throw error;
        res.status(200).json(results.rows);
    });
}

const getTopAllTime = (req, res) =>{
    pool.query(queries.getTopAllTime, (error, results) =>{
        if(error) throw error;
        res.status(200).json(results.rows);
    });
}

const addScore = (req, res) =>{
    const {name, score} = req.body;

    pool.query(queries.addScore, [name,score], (error,results) =>{
        if(error)
        {
            throw error;
        }
        res.status(201).send("Score Created Successfully!");
    });
}

module.exports = {
    getScores,
    getTopHour,
    getTopDay,
    getTopMonth,
    getTopAllTime,
    addScore,
};
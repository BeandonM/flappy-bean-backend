const getScores = "SELECT * FROM highscores"
const getTopHour = "SELECT * FROM highscores WHERE score_date + score_time >= NOW() - INTERVAL '1 hour' ORDER BY score DESC LIMIT 10";
const getTopDay = "SELECT * FROM highscores WHERE score_date > NOW() - INTERVAL '1' day ORDER BY score DESC LIMIT 25";
const getTopMonth = "SELECT * FROM highscores WHERE score_date > NOW() - INTERVAL '1' month ORDER BY score DESC LIMIT 50";
const getTopAllTime = "SELECT * FROM highscores ORDER BY score DESC LIMIT 100";
const addScore = "INSERT INTO highscores (name, score) VALUES ($1,$2)";

module.exports = {
    getScores,
    getTopHour,
    getTopDay,
    getTopMonth,
    getTopAllTime,
    addScore,
}
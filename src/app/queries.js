const getScores = "SELECT * FROM highscores"
const getTopHour = "SELECT * FROM highscores WHERE score_date + score_time >= NOW() - INTERVAL '1 hour' ORDER BY score DESC LIMIT 10";
const getTopDay = "SELECT * FROM highscores WHERE score_date > NOW() - INTERVAL '1' day ORDER BY score DESC LIMIT 25";

module.exports = {
    getScores,
    getTopHour,
    getTopDay,
}
const getScores = "SELECT * FROM highscores"
const getTopHour = "SELECT * FROM highscores WHERE score_date + score_time >= NOW() - INTERVAL '1 hour' ORDER BY score DESC LIMIT 10";
module.exports = {
    getScores,
    getTopHour,
}
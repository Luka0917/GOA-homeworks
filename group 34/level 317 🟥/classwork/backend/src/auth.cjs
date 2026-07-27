const db = require('./db.cjs');

function requireAuth(req, res, next){
    const token = req.cookies?.session_id

    if(!token) return res.status(401).json({ error: 'Unathorized!' });

    const session = db.prepare(`
        SELECT session.*, users.username FROM session 
        JOIN users ON session.user_id = users.id 
        WHERE session.token = ?
    `).get(token);

    if(!session || session.expires_at < Date.now()){
        if(session) db.prepare('DELETE FROM session WHERE token = ?').run(token);
        res.clearCookie('session_id');
        return res.status(401).json({ error: 'Session expired or invalid' });
    }

    req.user = {
        id: session.user_id,
        username: session.username,
        token: session.token
    }

    next();
}

module.exports = { requireAuth };
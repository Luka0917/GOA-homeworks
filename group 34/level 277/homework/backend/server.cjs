const express = require('express');
const Database = require('better-sqlite3');
const path = require('path');
const cors = require('cors');
const app = express();
const db = new Database(path.join(__dirname, 'tasks.db'));
const PORT = 1717;

app.use(express.json());
app.use(cors());

//^ GET /tasks -> get all tasks
//^ GET /tasks/:id -> get one task
//^ GET /history -> get all history
//^ GET /history/:task_id -> get history for a specific task
//^ GET /stats -> overview stats

//^ POST /tasks -> create a task
//^ POST /tasks/:id/complete -> complete a task (archives to history)

//^ DELETE /tasks -> clear tasks
//^ DELETE /tasks/:id -> delete a task

db.exec(`
    CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT,
        priority TEXT DEFAULT 'medium',
        completed INTEGER DEFAULT 0,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );
`);

db.exec(`
    CREATE TABLE IF NOT EXISTS history (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        task_id INTEGER NOT NULL,
        title TEXT NOT NULL,
        description TEXT,
        priority TEXT DEFAULT 'medium',
        action_type TEXT NOT NULL,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );
`);

db.exec(`
    CREATE TRIGGER IF NOT EXISTS task_completed
    AFTER UPDATE ON tasks
    WHEN NEW.completed = 1
    BEGIN
        INSERT INTO history (task_id, title, description, priority, action_type)
        VALUES (NEW.id, NEW.title, NEW.description, NEW.priority, 'completed');
        DELETE FROM tasks WHERE id = NEW.id;
    END;
`);

db.exec(`
    CREATE TRIGGER IF NOT EXISTS task_deleted
    AFTER DELETE ON tasks
    WHEN OLD.completed = 0
    BEGIN
        INSERT INTO history (task_id, title, description, priority, action_type)
        VALUES (OLD.id, OLD.title, OLD.description, OLD.priority, 'deleted');
    END;
`);


app.get('/tasks', (req, res) => {
    try{
        const tasks = db.prepare(`SELECT * FROM tasks`).all();
        res.json(tasks);
    }catch(err){
        console.error(err);
        res.status(500).json({ message: 'Server error!' });
    }
})

app.get('/tasks/:id', (req, res) => {
    try{
        const id = req.params.id;
        const task = db.prepare(`SELECT * FROM tasks WHERE id = ?`).get(id)
        if(!task) return res.status(404).json({ message: 'Task not found!' });
        res.json(task);
    }catch(err){
        console.error(err);
        res.status(500).json({ message: 'Server error!' });       
    }
})

app.get('/history', (req, res) => {
    try{
        const history = db.prepare(`SELECT * FROM history`).all();
        res.json(history);
    }catch(err){
        console.error(err);
        res.status(500).json({ message: 'Server error!' });       
    }
})

app.get('/history/:task_id', (req, res) => {
    try{
        const task_id = req.params.task_id;
        const task = db.prepare(`SELECT * FROM history WHERE task_id = ?`).all(task_id);
        if(task.length === 0) return res.status(404).json({ message: 'Task history not found!' });
        res.json(task);
    }catch(err){
        console.error(err);
        res.status(500).json({ message: 'Server error!' });       
    }
})

app.get('/stats', (req, res) => {
    try{
        const tasks_count = db.prepare(`SELECT COUNT(*) AS count FROM tasks`).get();
        const tasks_completed = db.prepare(`SELECT COUNT(*) AS count FROM history WHERE action_type = 'completed'`).get();
        const tasks_deleted = db.prepare(`SELECT COUNT(*) AS count FROM history WHERE action_type = 'deleted'`).get();
        res.json({
            tasks_count: tasks_count.count, 
            tasks_completed: tasks_completed.count, 
            tasks_deleted: tasks_deleted.count
        });
    }catch(err){
        console.error(err);
        res.status(500).json({ message: 'Server error!' });       
    }
})


app.post('/tasks', (req, res) => {
    try{
        const { title, description, priority } = req.body;

        if(!title || !description) return res.status(400).json({ message: 'Title and Description are required!' });
        if(priority && !['low', 'medium', 'high'].includes(priority)) return res.status(400).json({ message: 'Priority must be low, medium or high!' });

        db.prepare(`
            INSERT INTO tasks (title, description, priority)
            VALUES (?, ?, ?)
        `).run(title, description, priority);
        res.status(201).json({ message: 'Task added!' });
    }catch(err){
        console.error(err);
        res.status(500).json({ message: 'Server error!' });       
    }
})

app.post('/tasks/:id/complete', (req, res) => {
    try{
        const id = req.params.id;
        const task = db.prepare(`SELECT * FROM tasks WHERE id = ?`).get(id);
        if(!task) return res.status(404).json({ message: 'Task not found!' });

        db.prepare(`UPDATE tasks SET completed = 1 WHERE id = ?`).run(id);
        res.json({ message: 'Task completed and archived!' })
    }catch(err){
        console.error(err);
        res.status(500).json({ message: 'Server error!' });       
    }
})


app.delete('/tasks', (req, res) => {
    try{
        db.prepare(`DELETE FROM tasks`).run();
        res.json({ message: 'Tasks cleared successfully!' });
    }catch(err){
        console.error(err);
        res.status(500).json({ message: 'Server error!' });       
    }
})

app.delete('/tasks/:id', (req, res) => {
    try{
        const id = req.params.id;
        const task = db.prepare(`SELECT * FROM tasks WHERE id = ?`).get(id);
        if(!task) return res.status(404).json({ message: 'Task not found!' });

        db.prepare(`DELETE FROM tasks WHERE id = ?`).run(id);
        res.json({ message: 'Task removed!' });
    }catch(err){
        console.error(err);
        res.status(500).json({ message: 'Server error!' });       
    }
})

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
const Database = require('better-sqlite3');
const db = new Database('attendance.db');

//^ 1. BEFORE INSERT — runs before a new row is saved. Checks that clock_in is not a future time. If it is, the insert is blocked with an error.
//^ 2. AFTER INSERT — runs after the row is saved. Reads clock_in and sets status = 'late' if the hour is past 9 AM, otherwise status = 'present'.
//^ 3. BEFORE UPDATE — runs before any update. If clock_out is being set, it checks that clock_out > clock_in. Blocks the update if not.
//^ 4. AFTER UPDATE — runs after clock_out is updated. Calculates the difference between clock_out and clock_in and saves the result into hours_worked. Also updates modified_at to now.
//^ 5. UPDATE OF status — runs only when someone tries to change the status column directly. Blocks it entirely — status is managed by triggers only, not by manual updates.
//^ 6. AFTER UPDATE ... WHEN — runs after an update, but only when NEW.hours_worked > 10. Sets status = 'overtime' automatically.
//^ 7. INSTEAD OF DELETE on active_sessions — when someone tries to delete a row from the view (meaning the employee is still clocked in), instead of actually deleting anything, it sets clock_out = now() on the real table — a forced checkout.
//^ 8. BEFORE DELETE — runs before a delete on the real attendance table. If the row has clock_out IS NULL, it blocks the deletion. You can't erase an open session.

db.exec(`
    CREATE TABLE IF NOT EXISTS attedance (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        employee_name TEXT NOT NULL,
        clock_in TEXT,
        clock_out TEXT,
        hourse_worked REAL,
        status TEXT,
        modified_at TEXT
    );
`)
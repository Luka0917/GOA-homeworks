DROP TABLE IF EXISTS performance_test;
CREATE TABLE performance_test (
    id INTEGER PRIMARY KEY,
    category TEXT,
    score INTEGER,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

WITH RECURSIVE cnt(x) AS (
    SELECT 1
    UNION ALL
    SELECT x+1 FROM cnt WHERE x < 3000
)
INSERT INTO performance_test (category, score)
SELECT
    CASE (x % 3)
        WHEN 0 THEN 'math'
        WHEN 1 THEN 'science'
        ELSE 'history'
    END,
    ABS(RANDOM()) % 100
FROM cnt;
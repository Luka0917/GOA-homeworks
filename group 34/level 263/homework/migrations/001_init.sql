CREATE TABLE IF NOT EXISTS Authors (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    birth_year INTEGER CHECK (birth_year > 0),
    country TEXT
) STRICT;

CREATE TABLE IF NOT EXISTS Books (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    author_id INTEGER NOT NULL,
    publish_year INTEGER CHECK (publish_year > 0 AND publish_year <= 2026),
    genre TEXT,
    FOREIGN KEY (author_id) REFERENCES Authors(id)
) STRICT;

CREATE TABLE IF NOT EXISTS Members (
    id INTEGER PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    join_date TEXT DEFAULT (date('now'))
) STRICT;

CREATE TABLE IF NOT EXISTS Loans (
    id INTEGER PRIMARY KEY,
    book_id INTEGER NOT NULL,
    member_id INTEGER NOT NULL,
    loan_date TEXT DEFAULT (date('now')),
    return_date TEXT,
    FOREIGN KEY (book_id) REFERENCES Books(id),
    FOREIGN KEY (member_id) REFERENCES Members(id)
) STRICT
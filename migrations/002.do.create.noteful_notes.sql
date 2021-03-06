DROP TABLE IF EXISTS noteful_notes;

CREATE TABLE noteful_notes (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    note_name TEXT,
    modified TIMESTAMPTZ DEFAULT now(),
    folderid INTEGER REFERENCES noteful_folders(id) ON DELETE CASCADE,
    content TEXT NOT NULL
);
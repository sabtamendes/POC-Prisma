CREATE DATABASE to_do_list;

CREATE TABLE list(
    id SERIAL PRIMARY KEY,
    task TEXT NOT NULL,
    notes TEXT NOT NULL,
    "createdAt" DATE NOT NULL DEFAULT
);
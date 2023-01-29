CREATE DATABASE to_do_list;

CREATE TABLE list(
    id SERIAL PRIMARY KEY,
    task TEXT NOT NULL,
    notes TEXT NOT NULL,
    user_id REFERENCES "username"(id),
    "createdAt" DATE NOT NULL
);

CREATE TABLE username(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);


DROP DATABASE IF EXISTS booking_dev;

CREATE DATABASE booking_dev;

\c booking_dev;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE rooms (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    capacity INTEGER NOT NULL,
    location VARCHAR(255),
    image VARCHAR(255)
);

CREATE TABLE bookings (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    user_id INTEGER REFERENCES users (id) ON DELETE CASCADE,
    room_id INTEGER REFERENCES rooms (id) ON DELETE CASCADE,
    start_date TIMESTAMP NOT NULL,
    end_date TIMESTAMP NOT NULL,
    checkout BOOLEAN DEFAULT FALSE,
    attendees INTEGER,
    special_requirements VARCHAR(255)
);

\c booking_dev

-- Insert dummy data for users
INSERT INTO users (first_name, last_name, email, password)
VALUES
('John', 'Doe', 'john.doe@example.com', 'John123'),
('Alice', 'Smith', 'alice.smith@example.com', 'Alice123'),
('Bob', 'Johnson', 'bob.johnson@example.com', 'Bob123');


INSERT INTO rooms (name, capacity, floor, amenities, description)
VALUES
('Meeting Room X', 10, 1, 'Projector, Whiteboard', 'Versatile meeting space'),
('Office 301', 5, 3, 'Desk, Chair', 'Quiet office with a view'),
('Conference Room D', 15, 2, 'TV, Video Conferencing', 'Spacious conference room');

INSERT INTO bookings (user_id, room_id, start_date, end_date, checkout)
VALUES
(1, 1, '2024-02-01 10:00:00', '2024-02-01 12:00:00', FALSE),
(2, 2, '2024-02-02 14:00:00', '2024-02-02 16:00:00', FALSE),
(3, 3, '2024-02-03 09:00:00', '2024-02-03 11:00:00', FALSE);

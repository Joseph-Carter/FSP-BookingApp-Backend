\c booking_dev

INSERT INTO users (first_name, last_name, email, password)
VALUES
('John', 'Doe', 'john.doe@gmail.com', 'John123'),
('Alice', 'Smith', 'alice.smith@gmail.com', 'Alice123'),
('Bob', 'Johnson', 'bob.johnson@gmail.com', 'Bob123');

INSERT INTO rooms (name, capacity, location, image)
VALUES
('Conference Room A', 20, '42nd St, NY, NY', 'https://cdn0.weddingwire.com/vendor/725374/3_2/960/jpg/1318877939736-92150320.jpeg'),
('Meeting Room B', 10, '1428 Elm Street, Springwood, Ohio', 'https://www.screengeek.net/wp-content/uploads/2021/10/a-nightmare-on-elm-street-house.jpg'),
('Event Space C', 50, '352 Oak St, FairHaven, MA', 'https://partyslate.imgix.net/companies-cover-image/43721/image-424ade8a-c75f-4b5e-b420-13ba7ec469da.jpg?ixlib=js-2.3.2&auto=compress%2Cformat&bg=fff');

INSERT INTO bookings (name, user_id, room_id, start_date, end_date, checkout, attendees, special_requirements)
VALUES
('Team Meeting', 1, 1, '2024-02-01 10:00:00', '2024-02-01 12:00:00', FALSE, 15, 'Project discussion'),
('Client Presentation', 8, 2, '2024-02-02 14:00:00', '2024-02-02 16:00:00', FALSE, 8, 'Audio-visual setup'),
('Company Event', 10, 3, '2024-02-03 09:00:00', '2024-02-03 17:00:00', FALSE, 40, 'Catering required');

\c booking_dev

INSERT INTO users (first_name, last_name, email, password)
VALUES
('John', 'Doe', 'john.doe@gmail.com', 'John123'),
('Alice', 'Smith', 'alice.smith@gmail.com', 'Alice123'),
('Bob', 'Johnson', 'bob.johnson@gmail.com', 'Bob123');

INSERT INTO eventspaces (space_name, capacity, location, image, description)
VALUES
('Main Conference Room ', 20, '42nd St, NY, NY', 'https://cdn0.weddingwire.com/vendor/725374/3_2/960/jpg/1318877939736-92150320.jpeg', 'Elegant conference room with modern amenities'),
('Cottage', 10, '1428 Elm Street, Springwood, Ohio', 'https://www.screengeek.net/wp-content/uploads/2021/10/a-nightmare-on-elm-street-house.jpg', 'Cozy meeting room in a historic location'),
('Warehouse', 200, '352 Oak St, FairHaven, MA', 'https://partyslate.imgix.net/companies-cover-image/43721/image-424ade8a-c75f-4b5e-b420-13ba7ec469da.jpg?ixlib=js-2.3.2&auto=compress%2Cformat&bg=fff', 'Spacious event space with a versatile setup'),
('Grand Hall', 100, '123 Main St, Cityville, CA', 'https://www.theplazany.com/wp-content/uploads/2016/02/Events_TheGrandBallroom_Gallery_SlideshowGallery_4.jpg', 'Luxurious hall for grand events'),
('Board Room D', 15, '789 Business Ave, Metro City', 'https://executivesuitesatlakewoodranch.com/wp-content/uploads/2012/10/Board_Room.jpg', 'Well-equipped board room for executive meetings'),
('Garden Pavilion', 30, '456 Park Lane, Greenfield, IL', 'https://sdg-migration-id.s3.amazonaws.com/Interior-Design-MAD-Architects-Hanergy-Living-Garden-03-03.19.jpg', 'Outdoor pavilion surrounded by beautiful gardens'),
('Tech Hub Auditorium', 200, '100 Tech Plaza, Silicon Valley', 'https://portotechhub.com/wp-content/uploads/2023/05/72700548_1718998314899109_8989376008045985792_n.jpg', 'State-of-the-art auditorium for tech events'),
('Sky Lounge', 50, '859 Skyline Blvd, Cloud City', 'https://essencedining.com/wp-content/uploads/2022/11/Sky-Bar-4.jpg', 'Elevated lounge with panoramic city views');

INSERT INTO bookings (event_name, user_id, eventspaces_id, start_date, end_date, checkout, booked, attendees, special_requirements)
VALUES
('Product Launch', 1, 4, '2024-02-10 15:00:00', '2024-02-10 18:00:00', FALSE, FALSE, 150, 'Product demonstration'),
('Team Building Workshop', 2, 3, '2024-02-15 09:00:00', '2024-02-15 17:00:00', FALSE, FALSE, 25, 'Team-building activities'),
('Seminar on Innovation', 3, 5, '2024-02-20 14:00:00', '2024-02-20 18:00:00', FALSE, FALSE, 80, 'Guest speakers on innovation'),
('Networking Mixer', 1, 2, '2024-02-25 18:00:00', '2024-02-25 20:00:00', FALSE, FALSE, 50, 'Casual networking event'),
('Wedding Reception', 2, 1, '2024-03-01 17:00:00', '2024-03-01 22:00:00', FALSE, FALSE, 200, 'Catering and entertainment');

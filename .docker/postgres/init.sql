CREATE DATABASE multiverse_travels;

\c multiverse_travels;
CREATE TABLE TRAVELS
(
   ID SERIAL PRIMARY KEY,
   TRAVEL_STOPS INT []
);

CREATE TABLE BOOKS
(
   ID SERIAL PRIMARY KEY,
   NAME VARCHAR(100) NOT NULL,
   DESCRIPTION VARCHAR(255) NOT NULL,
   PRICE NUMERIC NOT NULL
);

INSERT INTO travels (travel_stops)
VALUES
    ('{1, 2}'),
    ('{3, 4}'),
    ('{5, 1}'),
    ('{2, 3}'),
    ('{4, 5}');

INSERT INTO books (name, description, price) 
VALUES
    ('Airpods Wireless Bluetooth Headphones', 'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working', 89.99),
    ('iPhone 11 Pro 256GB Memory', 'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life', 599.99),
    ('Cannon EOS 80D DSLR Camera', 'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design', 929.99),
    ('Sony Playstation 4 Pro White Version', 'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music', 399.99),
    ('Logitech G-Series Gaming Mouse', 'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience', 49.99);
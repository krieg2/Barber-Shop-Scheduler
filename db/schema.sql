DROP DATABASE IF EXISTS BarberShop_db ;
CREATE DATABASE BarberShop_db;
use BarberShop_db;

CREATE TABLE barbers(

id int(11) AUTO_INCREMENT NOT NULL,
barber_name VARCHAR(255) NOT NULL,
city VARCHAR(255),
state VARCHAR(2),
monday BOOLEAN NOT NULL,
tuesday BOOLEAN NOT NULL,
wednesday BOOLEAN NOT NULL,
thursday BOOLEAN NOT NULL,
friday BOOLEAN NOT NULL,
saturday BOOLEAN NOT NULL,
sunday BOOLEAN NOT NULL,
primary key (id)
);


CREATE TABLE clients(

id int(11) AUTO_INCREMENT NOT NULL,
client_name VARCHAR(255) NOT NULL,
city VARCHAR(255),
state VARCHAR(2),
primary key (id)
);


-- CREATE TABLE appointments(

-- id int(11) AUTO_INCREMENT NOT NULL,
-- barberID VARCHAR(255) NOT NULL,
-- clientID VARCHAR(255) NOT NULL,
-- appointmenttime datetime  NOT NULL,,
-- timeseen,
-- dayofweek  NOT NULL,
-- customerrating
-- );
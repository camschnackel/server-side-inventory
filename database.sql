-- database name: canopus-inventory
-- Create syntax for inventory table
CREATE TABLE inventory (
	id SERIAL PRIMARY KEY,
	item varchar(200)
);
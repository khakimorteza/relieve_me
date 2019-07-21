DROP DATABASE IF EXISTS relieve_me;
CREATE DATABASE relieve_me;

\c relieve_me;


CREATE TABLE queens (
  id SERIAL PRIMARY KEY,
  neighborhood VARCHAR,
  car_type VARCHAR,
  street VARCHAR,
  cross_streets VARCHAR,
  lat FLOAT NOT NULL,
  long FLOAT NOT NULL
);

CREATE TABLE bronx (
  id SERIAL PRIMARY KEY,
  neighborhood VARCHAR,
  car_type VARCHAR,
  street VARCHAR,
  cross_streets VARCHAR,
  lat FLOAT NOT NULL,
  long FLOAT NOT NULL
);

CREATE TABLE brooklyn (
  id SERIAL PRIMARY KEY,
  neighborhood VARCHAR,
  car_type VARCHAR,
  street VARCHAR,
  cross_streets VARCHAR,
  lat FLOAT NOT NULL,
  long FLOAT NOT NULL
);

CREATE TABLE manhattan (
  id SERIAL PRIMARY KEY,
  neighborhood VARCHAR,
  car_type VARCHAR,
  street VARCHAR,
  cross_streets VARCHAR,
  lat FLOAT NOT NULL,
  long FLOAT NOT NULL
);



INSERT INTO queens (neighborhood, car_type, street, cross_streets, lat, long) VALUES
('Astoria', 'Taxi Only', '31 St (west side)','34 Ave  & 35 Ave', '40.7596699', '-73.9294359'),
('Astoria', 'Taxi Only', '31 St (east side)', '37 Ave  & 36 Ave', '40.7549787','-73.9332458'),
('Long Island City', 'Taxi/FHVs', '43 Ave (north side)','36 St  & 37 St', '40.7460989','-73.9307412'),
('Long Island City', 'Taxi/FHVs', '45 Ave (south side)', 'Jackson Ave & 23 St', '40.746587','-73.9460698'),
('Sunnyside', 'Taxi Only', '55 St (east side)', 'Queens Blvd & Roosevelt Ave', '40.7423727','-73.9122987'),
('Long Island City', 'Taxi/FHVs', '47 Ave (south side)', '11 St & Vernon Blvd', '40.7450174','-73.9528915'),
('Sunnyside', 'Taxi Only', '55 St (east side)', 'Queens Blvd  & Roosevelt Ave', '40.7423727','-73.9122987'),
('Sunnyside', 'Taxi Only', '64 St (west side)', '34 Ave & 35 Ave', '40.7522645','-73.9012039'),
('Sunnyside', 'Taxi/FHVs', '61 St (east side)','Roosevelt Ave & 39 Ave', '40.7455903','-73.9055766'),
('Sunnyside', 'Taxi Only', 'Queens Blvd (south side)', '50 St & 51 St', '40.7425469','-73.917198');


INSERT INTO bronx (neighborhood, car_type, street, cross_streets, lat, long) VALUES
('Wakefield', 'Taxi/FHVs', 'E 233 St (south side)', 'Carpenter Ave & White Plains Rd', '40.8943684','-73.8624202'),
('Mott Haven', 'Taxi Only', 'Park Ave (east side)', 'E 135 St & E 138 St', '40.810885','-73.933031'),
('Mott Haven', 'Taxi Only', 'Park Ave (west side)', 'E 135 St & E 138 St', '40.810885','-73.933031'),
('Pelham Gardens', 'Taxi/FHVs', 'Pelham Pkwy S (south side)', 'Wilson Ave & Eastchester Rd', '40.857493','-73.851535'),
('Kingsbridge', 'Taxi/FHVs', 'W 231 St (north side)', 'Albany Cr & Broadway', '40.8784817','-73.9057937');


INSERT INTO brooklyn (neighborhood, car_type, street, cross_streets, lat, long) VALUES
('Gowanus', 'Taxi Only', '4 Ave (west side)', '3 St & 6 St', '40.6739501','-73.987836'),
('Gowanus', 'Taxi/FHVs', '4 Ave (east side)', 'Prospect Ave', '40.6654733' ,'-73.9949276'),
('Williamsburg', 'Taxi Only', 'N 6 St (north side)','Berry St & Wythe Ave', '40.718084','-73.9617947'),
('Borough Park', 'Taxi Only', 'New Utrecht Ave (north side)', '55 St & 13 Ave', '40.6315644','-73.9976238');

INSERT INTO manhattan (neighborhood, car_type, street, cross_streets, lat, long) VALUES
('Chelsea', 'Taxi/FHVs', '10 Ave (east side)', 'W 26 St & W 28 St', '40.7496049','-74.0049805'),
('Hell''s Kitchen', 'Taxi/FHVs', '11 Ave (east side)', 'W 45 St & W 46 St', '40.7627606','-73.9991214'),
('Gramercy Park', 'Taxi/FHVs', '3 Ave (west side)', 'E 14 St & E 15 St', '40.7332966','-73.9893702'),
('Midtown', 'Taxi/FHVs', '8 Ave (west side)', 'W 46 St & W 47 St', '40.759795','-73.9901157'),
('Lower Manhattan', 'Taxi/FHVs', '6 Ave (east side)', 'Thompson St & Grand St', '40.7222337','-74.0075707'),
('Upper East Side', 'Taxi Only', 'E 86 St (north side)', 'Henderson Pl & York Ave', '40.7751526','-73.9474355'),
('Upper East Side', 'Taxi Only', 'E 87 St (south side)', '1 Ave & 2 Ave', '40.7775601','-73.9510733'),
('Lower East Side', 'Taxi/FHVs', 'Grand St (north side)', 'Forsyth St & Chrystie St', '40.7179272','-73.9952561'),
('Kips Bay', 'Taxi/FHVs', 'Madison Ave (west side)', 'E 26 St & E 27 St', '40.7427822','-73.9887802'),
('Lower Manhattan', 'Taxi/FHVs', 'Maiden Ln (south side)', 'Front St & South St', '40.7057861','-74.0076905'),
('Lower Manhattan', 'Taxi Only', 'Park Row (east side)', 'Ann St & Beekman St', '40.7113851','-74.0108396');

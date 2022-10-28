DROP TABLE IF EXISTS drink_history CASCADE;
CREATE TABLE IF NOT EXISTS drink_history (
    name varchar(64),
    url varchar(512),
    img varchar(512),
    drink_id varchar(20),
    drink_desc varchar(8192)
);
CREATE TABLE cars (
                      id SERIAL PRIMARY KEY,
                      brand VARCHAR(50) NOT NULL,
                      model VARCHAR(50) NOT NULL
);

INSERT INTO cars (brand, model) VALUES ('Toyota', 'Corolla');
INSERT INTO cars (brand, model) VALUES ('Honda', 'Civic');

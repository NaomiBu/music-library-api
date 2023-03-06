/* Initialize DB with some seed data */
USE `music_library_api_1_db`;

-- DONT MODIFY THIS MIGRATION
-- it is used by Xest local development pipeline
INSERT INTO `migrations` (
  name,
  run_on
) VALUES (
  "/20211107064324-seed-data",
  "20211107064324"
);

-- YOU CAN MODIFY BELOW THIS LINE
INSERT INTO user_types (user_type_id, user_type)
VALUES (1, "admin");
INSERT INTO user_types (user_type_id, user_type)
VALUES (2, "user");

INSERT INTO users (user_id, first_name, last_name, email, password, user_type_id, created_at)
VALUES (1, "Ahmet", "Akinsql", "ahmet@akinsql.com", SHA2(CONCAT("password","SUPER_DUPER_SECRET"), 224), 1, "2020-11-20 12:00:00");
INSERT INTO users (user_id, first_name, last_name, email, password, user_type_id, created_at)
VALUES (2, "Joe", "Bloggs","joebloggs@gmail.com", SHA2(CONCAT("password","SUPER_DUPER_SECRET"), 224), 2, "2020-11-20 12:00:00");
INSERT INTO users (user_id, first_name, last_name, email, password, user_type_id, created_at)
VALUES (3, "Jim", "Bloggs" , "jimbloggs@yahoo.com", SHA2(CONCAT("password","SUPER_DUPER_SECRET"), 224), 2, "2020-11-20 12:00:00");

INSERT INTO Artists (name, genre) 
VALUES
( "Michael Jackson" , "Pop"),
( "Snoh Aalegra" , "R&B"),
( "Wizkid" , "Afrobeats"),
( "The Beatles", "Rock");


INSERT INTO Albums (name, year, artist_id) 
VALUES
( "Bad" , 1987, 1),
( "Thriller" , 1982, 1),
( "Feels" , 2017, 2),
( "Made in Lagos", 2020, 3),
( "Superstar", 2011, 3),
( "Divide", 2017, 4);


INSERT INTO Songs (name, artist_id,album_id) 
VALUES
( "Man in the mirror" , 1, 1),
( "Smooth criminal" , 1, 1),
( "Roma" , 3, 4),
( "Ginger", 3, 4),
( "Happier", 4, 6),
( "Barcelona", 4, 6),
( "Walls", 2, 3),
( "Time", 2, 3),
( "Don't dull", 3, 5),
( "For me", 3, 5);
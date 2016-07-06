#!/usr/bin/env bash

if [[ -z $( type -p sqlite3 ) ]]; then echo -e "REQUIRED: sqlite3 -- NOT INSTALLED !";exit ;fi

DB_NAME=app.db
TABLE_NAME=users

sqlite3 $DB_NAME << EOF

DROP TABLE IF EXISTS $TABLE_NAME;

CREATE TABLE "$TABLE_NAME" (
    "id" integer NOT NULL PRIMARY KEY,
    "username" varchar(30) NOT NULL,
    "email" varchar(30) NOT NULL,
    "score" integer,
    UNIQUE("email")
);

INSERT INTO $TABLE_NAME (id, username, email) VALUES (1 , 'tony', 'ton@w.fr'), (2 , 'keke', 'kek@w.fr'), (3 , 'antoine', 'ant@w.fr');

EOF

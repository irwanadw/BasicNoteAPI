drop database if exists notes;
create database notes;
use notes;
create table users(
  id char(21) primary key,
  username varchar(32) not null unique,
  password binary(60) not null,
  updatedAt datetime not null default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP,
  createdAt datetime not null default CURRENT_TIMESTAMP
);
create table notes(
  id char(21) primary key,
  note text not null,
  isArchived boolean not null default false,
  userId char(21) not null,
  foreign key (userId) references users(id),
  updatedAt datetime not null default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP,
  createdAt datetime not null default CURRENT_TIMESTAMP
);
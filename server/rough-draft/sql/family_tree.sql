drop database if exists family_tree;
create database family_tree;
use family_tree;

create table profile(
	person_id int primary key auto_increment,
    person_firstname text not null,
    person_lastname text not null,
    person_description text null,
    parents text not null,
    siblings text null,
    kids text null
);
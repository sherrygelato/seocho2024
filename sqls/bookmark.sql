use seocho2024;
show tables;
show processlist;

create table T (id int not null default 0);
desc T;

show create table T;
-- 'CREATE TABLE `T` (
--   `id` int NOT NULL DEFAULT ''0''
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci'

create table User (
	id mediumint unsigned not null auto_increment comment 'user id', -- primary key
    createdate timestamp DEFAULT CURRENT_TIMESTAMP COMMENT 'signup date',
	updatedate timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'edit date',
    nickname varchar(31) not null comment 'user nickname',
    email varchar(255) not null comment 'user email', -- unipue key
    passwd varchar(512) null comment 'user password', -- google login : null
    birthdt varchar(10)  null comment 'user birthday', -- 연령대 통계 때문에 넣을 수 있음
    mobile varchar(15) null comment 'user phone number with -',
    outdt varchar(15) null comment 'user leaved date', 
    PRIMARY KEY (id),
  	UNIQUE KEY unique_User_email (email)
);

desc User;

insert into User(nickname, email) 
	values('sherry', 'sherrygelato@kakao.com');
    
select * from User;

alter table User add column auth tinyint unsigned not null default 9 comment '0:sys, 1:super, …, 9:guest' after mobile;
-- add modify drop
-- 음수 반드시 unsigned

create table Book (
	id int unsigned not null auto_increment primary key comment 'book id',
    createdate timestamp DEFAULT CURRENT_TIMESTAMP COMMENT 'book create date',
	updatedate timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'book edit date',
    title varchar(31) not null comment 'book name',
    owner mediumint unsigned not null comment 'book owner - user.id', -- user id type
    cleckdel boolean not null default 0 comment 'click after delete',
	deldt varchar(15) null comment 'book deleted date',
    foreign key fk_owner_User(owner) references User(id)
		on delete cascade
);

alter table Book modify column id int unsigned not null auto_increment primary key comment 'book id';

create table Mark (
	id int unsigned not null auto_increment primary key comment 'mark id',
    createdate timestamp DEFAULT CURRENT_TIMESTAMP COMMENT 'mark create date',
	updatedate timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'mark edit date',
    book int unsigned not null comment 'book id',
    url varchar(512) not null comment 'mark url - og: url',
    title varchar(512) not null comment 'mark name - og: title', -- text search loading time long
    descript varchar(1024) null comment 'mark description - og: description',
	image varchar(512) not null comment 'mark image - og: image',
    isdel boolean not null default 0 comment 'is delete',
	deldt varchar(15) null comment 'mark deleted date',
    foreign key fk_book_Book(book) references Book(id) -- fk_book_book
		on delete cascade
);

alter table Mark modify image varchar(512) null comment 'mark image - og: image';

desc Mark;
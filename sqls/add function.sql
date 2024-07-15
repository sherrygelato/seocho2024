select * from Book;
select * from User;

insert into Book(title, owner) value ('BBB', 9);

create view v_user_book as
	select u.id, u.nickname, b.title, b.id as BookId 
	from User u left outer join Book b on u.id = b.owner;
    
select * from v_user_book;

-- 
SHOW FUNCTION STATUS WHERE Db = 'seocho2024';
set global log_bin_trust_function_creators=on;
-- 0 row(s) affected, 1 warning(s): 1287 '@@log_bin_trust_function_creators' is deprecated and will be removed in a future release.

DELIMITER $$
CREATE FUNCTION `f_username`(_userId mediumint unsigned) 
RETURNS varchar(31)
BEGIN
	declare v_ret varchar(32); -- let v_ret: string
    select nickname into v_ret from User where id = _userId;
	RETURN v_ret;
END $$

DELIMITER $$
CREATE Function f_dt(_ts timestamp) RETURNS varchar(31)
BEGIN
	RETURN date_format(_ts, '%m/%d %H:%i');
END $$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE `sp_books_by_user`(_userId mediumint unsigned)
BEGIN
    select * from Book
     where owner = _userId;
END $$
DELIMITER ;

call sp_books_by_user(1);

select * from Book b inner join Mark m on b.id = m.book;

select * from User;
select * from Book;
select * from Mark;

select * from Mark
-- delete from Mark
 where id = 3;

delete from Book where id = 6;

drop table UserLike;
truncate table Mark;

select * from User;
delete from User where id = 3;

delete from Book where id > 0;
-- truncate table Book;

ALTER TABLE Book  AUTO_INCREMENT = 1;

delete from User where id > 0;
alter table User auto_increment = 1;

select conv('EF', 16, 10), conv(239, 10, 16);
select CAST('2018-12-25 11:22:22.123' AS DATETIME);
select CAST( 1.467 AS Signed Integer ), CONVERT(1.567, Signed Integer);
select str_to_date('2018-12-03', '%Y-%m-%d');
select sysdate(), now(), curdate(), curtime();
select date_format(now()); 

select concat('A', '-', 'B', '-', 'C');
select concat_ws('-', 'A', 'B', 'C');
select adddate(curdate(), interval 100 day) '100일',
       weekday(subdate(curdate(), interval 365 day));
select datediff('2024-10-23', now());

select * from User;
insert ignore into User (nickname, email)
  values ('hong', 'hong@gmail.com'), ('kim', 'kim@gmail.com');

select nickname, email, ifnull(passwd, 'XXX'),
     if(nickname = 'hong', 'H','K'),
     ifnull(nullif(nickname, 'hong'), 'HONG') nullifnick
  from User;

select * from User;  
select * from Book;

insert into Book(title, owner) values('BBB', 4);

create view v_user_book AS
select u.id as UserID, u.nickname, b.title, b.id as BookID
  from User u inner join Book b on u.id = b.owner;

select * from v_user_book;

SET GLOBAL log_bin_trust_function_creators = ON;

select b.*, user_name(b.owner) ownername from Book b;

select nickname from User where id = 4;
desc User;
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

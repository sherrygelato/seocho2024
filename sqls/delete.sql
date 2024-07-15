-- delete
select * from Mark
-- delete from Mark
	where id = 2;

select * from Mark;
select * from Book;

delete from Book where id = 8;
delete from Book where owner = 1;

-- drop after create table
truncate table Mark;

select * from User;
delete from User where id = 8;

truncate table Book;
truncate table User;
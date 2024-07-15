-- DML : CRUD

insert into User (nickname, email) values ('kim', 'kim@gmail.com');
insert into User (nickname, email) values ('king', 'king@gmail.com'), ('park', 'park@gmail.com');
insert into User (nickname, email) values ('king', 'kim@gmail.com') on duplicate key update nickname = 'king';

select * from Book where owner = 1;
desc Book;

insert into Book (title, owner) values ('Study', 1), ('Bike', 1), ('Enter', 1);
insert into Book (title, owner) select title, 8 from Book where owner = 1;

select nickname, email as 'email address' from User;

select * from User where id > 1 and id < 10;

select * from User where id between 1 and 10; -- 1 and 10
select * from User where id >= 1 and id <= 10;

select * from User where id in (3, 9); -- 3 or 9
select * from User where id =3 or id = 9;

select distinct auth from User; -- 중복

select * from User order by nickname desc; -- 내림차순
select * from User order by nickname asc; -- 올림차순

-- group by
select auth, count(*) from User group by auth;
select auth, count(*) from User group by auth having auth > 1;

select * from User;
select * from Book;

-- inner join : 일치 되는 것 두 가지를 정하여 공통되는 두 필드만을 보여줌
select Book.*, User.nickname from Book inner join User on Book.owner = User.id;
select b.id as 'Book Id', b.title, u.nickname as 'owner', b.cleckdel as 'clickdel' 
	from Book b inner join User u on b.owner = u.id;

-- outer join : 기준이 되는 테이블이 필요하며, 공통되는 두 필드와 기준이 되는 테이블을 가져옴
select u.id, u.nickname, b.title, b.id as BookId 
	from User u left outer join Book b on u.id = b.owner;
    -- 똑같은 컬럼 이름을 허용하지 말자 : u.id와 b.id as BookId
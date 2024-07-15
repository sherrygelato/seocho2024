-- ex) hong의 Study와 king의 Enter 북에 마크를 하나씩 추가해 보세요.
select * from Mark;
select * from Book;
select * from User;
desc Mark;

-- 추가하기
insert into Mark(book, url, title) value (1, 'https://www.naver.com', '네이버');
insert into Mark(book, url, title) value (1, 'https://www.daum.net', '다음');
insert into Mark(book, url, title) value (1, 'https://www.google.com', '구글');

-- Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails 
-- (`seocho2024`.`mark`, CONSTRAINT `mark_ibfk_1` FOREIGN KEY (`id`) REFERENCES `book` (`id`) ON DELETE CASCADE)


-- 읽기(join)
select b.title, m.url, m.title
  from Book b inner join Mark m on b.id=m.book;

-- multiple joins
select u.nickname, b.title, m.url, m.title from User u 
	inner join Book b on u.id = b.owner
    inner join Mark m on b.id=m.book;
    
-- update Mark set title = '유투브' where title = 'youtube'; -- Bad case
update Mark set title = '유투브' where id=7; -- Good case

select b.title, m.title, concat(b.title, '-', m.title)
	from Book b inner join Mark m on b.id = m.book;

-- join & update
update Book b inner join Mark m on b.id = m.book
	set m.title = concat(b.title, '-', m.title)
    where m.id > 0;

select * from Book b inner join Mark m on b.id = m.book;
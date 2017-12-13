USE barbershop_db;
INSERT users(first_name, last_name,email,phone,createdAt,updatedAt)
VALUE('Edward','Scissorhands','eScissorhands123@barbershop.com','123-456-7890',now(),now());
INSERT users(first_name, last_name,email,phone,createdAt,updatedAt)
VALUE('Ice','Cube','icube@barbershop.com','123-456-7890',now(),now());
INSERT Users(first_name, last_name,email,phone,createdAt,updatedAt)
VALUE('Michael ','Early','mearly@barbershop.com','123-456-7890',now(),now());
INSERT Users(first_name, last_name,email,phone,createdAt,updatedAt)
VALUE('Troy','garity','tgarity@barbershop.com','123-456-7890',now(),now());
INSERT Users(first_name, last_name,email,phone,createdAt,updatedAt)
VALUE('Eve','Jones','ejones@barbershop.com','123-456-7890',now(),now());
INSERT Users(first_name, last_name,email,createdAt,updatedAt)
VALUE('Hector','Candelaria','hcandelaria66.7@gmail.com',now(),now());
INSERT Users(first_name, last_name,email,createdAt,updatedAt)
VALUE('Alex','Rodiguez','arodiguez@gmail.com',now(),now());
INSERT Users(first_name, last_name,email,createdAt,updatedAt)
VALUE('Eric','Smith','esmith@gmail.com',now(),now());
/*Business*/
INSERT Businesses(business_name,createdAt,updatedAt)
VALUE('Scissorhands',now(),now());
INSERT Businesses(business_name,createdAt,updatedAt)
VALUE('The BarberShop',now(),now());
/*Barbers*/
INSERT Employees(UserId,BusinessId,createdAt,updatedAt,photo)
VALUE('1','1',now(),now(),'https://www.hollywood-collectibles.com/store/images/D/Edward-Detail-62.jpg');
INSERT Employees(UserId,BusinessId,createdAt,updatedAt,photo)
VALUE('2','2',now(),now(),'https://i.ytimg.com/vi/xpB7Fiow7vA/maxresdefault.jpg');
INSERT Employees(UserId,BusinessId,createdAt,updatedAt,photo)
VALUE('3','2',now(),now(),'http://l7.alamy.com/zooms/ccccfa95eac74842912fb49275bc2172/michael-ealy-barbershop-2002-bpj66w.jpg');
INSERT Employees(UserId,BusinessId,createdAt,updatedAt,photo)
VALUE('4','2',now(),now(),'http://c8.alamy.com/comp/BPM5HW/troy-garity-barbershop-2-back-in-business-2004-BPM5HW.jpg');
INSERT Employees(UserId,BusinessId,createdAt,updatedAt,photo)
VALUE('5','2',now(),now(),'http://www.media4.hw-static.com/wp-content/uploads/barbershop-movie-still-eve-terri-styles-a-customer-s-hair-in-barbershop_1113067-400x305.jpeg');
/*Schedule*/
INSERT Schedules(EmployeeId,sunday_in,sunday_out,wednesday_in,wednesday_out,thursday_in,thursday_out,friday_in,friday_out,saturday_in,saturday_out,createdAt,updatedAt)
VALUE('1','800','1900','1000','1800','1000','1800','1000','1800','800','2100',now(),now());
INSERT Schedules(EmployeeId,sunday_in,sunday_out,wednesday_in,wednesday_out,thursday_in,thursday_out,friday_in,friday_out,saturday_in,saturday_out,createdAt,updatedAt)
VALUE('2','800','1900','1000','1800','1000','1800','1000','1800','800','2100',now(),now());
INSERT Schedules(EmployeeId,sunday_in,sunday_out,wednesday_in,wednesday_out,thursday_in,thursday_out,friday_in,friday_out,saturday_in,saturday_out,createdAt,updatedAt)
VALUE('3','800','1900','1000','1800','1000','1800','1000','1800','800','2100',now(),now());
INSERT Schedules(EmployeeId,sunday_in,sunday_out,wednesday_in,wednesday_out,thursday_in,thursday_out,friday_in,friday_out,saturday_in,saturday_out,createdAt,updatedAt)
VALUE('4','800','1900','1000','1800','1000','1800','1000','1800','800','2100',now(),now());
INSERT Schedules(EmployeeId,sunday_in,sunday_out,wednesday_in,wednesday_out,thursday_in,thursday_out,friday_in,friday_out,saturday_in,saturday_out,createdAt,updatedAt)
VALUE('5','800','1900','1000','1800','1000','1800','1000','1800','800','2100',now(),now());
/*Service*/
INSERT Services(EmployeeId,service_time,service_name,description,price,createdAt,updatedAt)
VALUE('1','100','haircut','hair cut','25.00',now(),now());
INSERT Services(EmployeeId,service_time,service_name,description,price,createdAt,updatedAt)
VALUE('2','100','haircut','hair cut','25.00',now(),now());
INSERT Services(EmployeeId,service_time,service_name,description,price,createdAt,updatedAt)
VALUE('3','100','haircut','hair cut','25.00',now(),now());
INSERT Services(EmployeeId,service_time,service_name,description,price,createdAt,updatedAt)
VALUE('4','100','haircut','hair cut','25.00',now(),now());
INSERT Services(EmployeeId,service_time,service_name,description,price,createdAt,updatedAt)
VALUE('5','100','haircut','hair cut','25.00',now(),now());
/*Address*/
INSERT Addresses(UserID,street,city,state,zip_code,createdAt,updatedAt)
VALUE('1','7 College Ave,','New Brunswick','NJ','08901',now(),now());
INSERT Addresses(UserID,street,city,state,zip_code,createdAt,updatedAt)
VALUE('2','161 Newkirk St','Jersey City', 'NJ', '07306',now(),now());
INSERT Addresses(UserID,street,city,state,zip_code,createdAt,updatedAt)
VALUE('3','161 Newkirk St','Jersey City', 'NJ', '07306',now(),now());
INSERT Addresses(UserID,street,city,state,zip_code,createdAt,updatedAt)
VALUE('4','161 Newkirk St','Jersey City', 'NJ', '07306',now(),now());
INSERT Addresses(UserID,street,city,state,zip_code,createdAt,updatedAt)
VALUE('5','161 Newkirk St','Jersey City', 'NJ', '07306',now(),now());

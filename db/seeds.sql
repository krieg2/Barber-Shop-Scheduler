INSERT users(first_name, last_name,photo,email,phone,crea)
VALUE('Edward','Scissorhands','https://www.hollywood-collectibles.com/store/images/D/Edward-Detail-62.jpg','eScissorhands123@barbershop.com','123-456-7890');
INSERT users(first_name, last_name,photo,email,phone)
VALUE('Ice','Cube','https://i.ytimg.com/vi/xpB7Fiow7vA/maxresdefault.jpg','icube@barbershop.com','123-456-7890');
INSERT Users(first_name, last_name,photo,email,phone)
VALUE('Michael ','Early','http://l7.alamy.com/zooms/ccccfa95eac74842912fb49275bc2172/michael-ealy-barbershop-2002-bpj66w.jpg','mearly@barbershop.com','123-456-7890');
INSERT Users(first_name, last_name,photo,email,phone)
VALUE('Troy','garity','http://c8.alamy.com/comp/BPM5HW/troy-garity-barbershop-2-back-in-business-2004-BPM5HW.jpg','tgarity@barbershop.com','123-456-7890');
INSERT Users(first_name, last_name,photo,email,phone)
VALUE('Eve','Jones','http://www.media4.hw-static.com/wp-content/uploads/barbershop-movie-still-eve-terri-styles-a-customer-s-hair-in-barbershop_1113067-400x305.jpeg','ejones@barbershop.com','123-456-7890');
INSERT Users(first_name, last_name,email)
VALUE('Hector','Candelaria','hcandelaria66.7@gmail.com');
INSERT Users(first_name, last_name,email)
VALUE('Alex','Rodiguez','arodiguez@gmail.com');
INSERT Users(first_name, last_name,email)
VALUE('Eric','Smith','esmith@gmail.com');
/*Business*/
INSERT Business(business_name)
VALUE('Scissorhands');
INSERT Business(business_name)
VALUE('Scissorhands');
/*Barbers*/
INSERT Employee(UserId,BusinessId)
VALUE('1','1');
INSERT Employee(UserId,BusinessId)
VALUE('2','2');
INSERT Employee(UserId,BusinessId)
VALUE('3','2');
INSERT Employee(UserId,BusinessId)
VALUE('4','2');
INSERT Employee(UserId,BusinessId)
VALUE('5','2');
/*Schedule*/
INSERT Schedule(EmployeeId,sunday_in,sunday_out,wednesday_in,wednesday_out,thursday_in,thursday_out,friday_in,friday_out,saturday_in,saturday_out)
VALUE('1','800','1900','1000','1800','1000','1800','1000','1800','1000','1800','800','2100');
INSERT Schedule(EmployeeId,sunday_in,sunday_out,wednesday_in,wednesday_out,thursday_in,thursday_out,friday_in,friday_out,saturday_in,saturday_out)
VALUE('2','800','1900','1000','1800','1000','1800','1000','1800','1000','1800','800','2100');
INSERT Schedule(EmployeeId,sunday_in,sunday_out,wednesday_in,wednesday_out,thursday_in,thursday_out,friday_in,friday_out,saturday_in,saturday_out)
VALUE('3','800','1900','1000','1800','1000','1800','1000','1800','1000','1800','800','2100');
INSERT Schedule(EmployeeId,sunday_in,sunday_out,wednesday_in,wednesday_out,thursday_in,thursday_out,friday_in,friday_out,saturday_in,saturday_out)
VALUE('4','800','1900','1000','1800','1000','1800','1000','1800','1000','1800','800','2100');
INSERT Schedule(EmployeeId,sunday_in,sunday_out,wednesday_in,wednesday_out,thursday_in,thursday_out,friday_in,friday_out,saturday_in,saturday_out)
VALUE('5','800','1900','1000','1800','1000','1800','1000','1800','1000','1800','800','2100');
/*Service*/
INSERT Service(EmployeeId,service_time,service_name,description,price)
VALUE('1','100','haircut','haircut','25.00');
INSERT Service(EmployeeId,service_time,service_name,description,price)
VALUE('2','100','haircut','haircut','25.00');
INSERT Service(EmployeeId,service_time,service_name,description,price)
VALUE('3','100','haircut','haircut','25.00');
INSERT Service(EmployeeId,service_time,service_name,description,price)
VALUE('4','100','haircut','haircut','25.00');
INSERT Service(EmployeeId,service_time,service_name,description,price)
VALUE('5','100','haircut','haircut','25.00');
/*Address*/
INSERT Address(UserID,street,city,state,zip_code)
VALUE('1','7 College Ave,','New Brunswick','NJ','08901');
INSERT Address(UserID,street,city,state,zip_code)
VALUE('2','161 Newkirk St','Jersey City', 'NJ', '07306');
INSERT Address(UserID,street,city,state,zip_code)
VALUE('3','161 Newkirk St','Jersey City', 'NJ', '07306');
INSERT Address(UserID,street,city,state,zip_code)
VALUE('4','161 Newkirk St','Jersey City', 'NJ', '07306');
INSERT Address(UserID,street,city,state,zip_code)
VALUE('5','161 Newkirk St','Jersey City', 'NJ', '07306');

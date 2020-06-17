USE quizstack;
INSERT INTO questions 
		(questionText, createdAt, updatedAt) 
	VALUES 
		("What does SQL stand for?",NOW(), NOW()),
		("Which SQL statement is used to extract data from a database?",NOW(), NOW()),
		("Which SQL statement is used to update data in a database?",NOW(), NOW()),
		("Which SQL statement is used to delete data from a database?",NOW(), NOW()),
		("Which SQL statement is used to insert new data in a database?",NOW(), NOW()),
		("With SQL, how do you select a column named 'FirstName' from a table named 'Persons'?",NOW(), NOW()),
		("With SQL, how do you select all the columns from a table named 'Persons'?",NOW(), NOW()),
		("With SQL, how do you select all the records from a table named 'Persons' where the value of the column 'FirstName' is 'Peter'?",NOW(), NOW()),
		("With SQL, how do you select all the records from a table named 'Persons' where the value of the column 'FirstName' starts with an 'a'?",NOW(), NOW()),
		("The OR operator displays a record if ANY conditions listed are true. The AND operator displays a record if ALL of the conditions listed are true", NOW(), NOW());
		
		
	INSERT  INTO answers
		(answerText, isCorrect, questionId, createdAt, updatedAt)
	VALUES
		("Strong Question Language", 0, 1,NOW(), NOW()),
		("Structured Question Language", 0, 1,NOW(), NOW()),
		("Structured Querry Language", 1, 1,NOW(), NOW()),
		
		("EXTRACT", 0, 2,NOW(), NOW()),
		("SELECT", 1, 2,NOW(), NOW()),
		("OPEN", 0, 2,NOW(), NOW()),
		("GET", 0, 2,NOW(), NOW()),
		
		("SAVE", 0, 3,NOW(), NOW()),
		("SAVE AS", 0, 3,NOW(), NOW()),
		("MODIFY", 0, 3,NOW(), NOW()),
		("UPDATE", 1, 3,NOW(), NOW()),
		
		("COLLAPSE", 0, 4,NOW(), NOW()),
		("DELETE", 1, 4,NOW(), NOW()),
		("REMOVE", 0, 4,NOW(), NOW()),
		
		("ADD NEW", 0, 5,NOW(), NOW()),
		("INSERT NEW", 0, 5,NOW(), NOW()),
		("ADD RECORD", 0, 5,NOW(), NOW()),
		("INSERT INTO", 1, 5,NOW(), NOW()),
		
		("SELECT FirstName FROM Persons", 1, 6,NOW(), NOW()),
		("SELECT Persons.FirstName", 0, 6,NOW(), NOW()),
		("EXTRACT FirstName FROM Persons", 0, 6,NOW(), NOW()),
		
		("SELECT Persons", 0, 7,NOW(), NOW()),
		("SELECT [all] FROM Persons", 0, 7,NOW(), NOW()),
		("SELECT * FROM Persons", 1, 7,NOW(), NOW()),
		("SELECT *.Persons", 0, 7,NOW(), NOW()),
		
		("SELECT [all] FROM Persons WHERE FirstName='Peter'", 0, 8,NOW(), NOW()),
		("SELECT * FROM Persons WHERE FirstName<>'Peter'", 0, 8,NOW(), NOW()),
		("SELECT * FROM Persons WHERE FirstName='Peter'", 1, 8,NOW(), NOW()),
		("SELECT [all] FROM Persons WHERE FirstName LIKE 'Peter'", 0, 8,NOW(), NOW()),
		
		("SELECT * FROM Persons WHERE FirstName='%a%'", 0, 9,NOW(), NOW()),
		("SELECT * FROM Persons WHERE FirstName='a'", 0, 9,NOW(), NOW()),
		("SELECT * FROM Persons WHERE FirstName LIKE '%a'", 0, 9,NOW(), NOW()),
		("SELECT * FROM Persons WHERE FirstName LIKE 'a%'", 1, 9,NOW(), NOW()),
		
		("False", 0, 10,NOW(), NOW()),
		("True", 1, 10, NOW(), NOW())
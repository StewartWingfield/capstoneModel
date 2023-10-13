CREATE TABLE `capstone`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `pw` VARCHAR(200) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE);

INSERT INTO users (username, email, pw)
VALUES ('3testuser', '3testemail@gmail.com', '3testpassword'), ('user2', 'user2@email.com', 'user2password')

CREATE TABLE budget (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userId` INT NOT NULL,
  `salary` DECIMAL(10, 2) NOT NULL,
  `necessities` DECIMAL(10, 2) NOT NULL,
  `other` DECIMAL(10, 2),
  PRIMARY KEY (`id`),
  FOREIGN KEY (`userId`) REFERENCES users(`id`)
);

INSERT INTO budget (userId, salary, necessities, other_expenses)
VALUES (1, 2500, 1500, 800), (2, 3300, 2300, 500)

CREATE TABLE calculations (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userId` INT NOT NULL,
  `salary` DECIMAL(10, 2) NOT NULL,
  `necessities` DECIMAL(10, 2) NOT NULL,
  `other_expenses` DECIMAL(10, 2), 
  `amount_saved` DECIMAL(10, 2) NOT NULL, 
  PRIMARY KEY (`id`),
  FOREIGN KEY (`userId`) REFERENCES users(`id`)
);

INSERT INTO calculations (userId, salary, necessities, other_expenses, amount_saved)
VALUES (1, 2500, 1500, 800, 200), (2, 3300, 2300, 500, 500)
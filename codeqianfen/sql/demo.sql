Create table 'graphiql'.'account'(
'id' INT NOT NULL AUTO_INCREMENT, 'name' VARCHAR(45) NULL, 'age' VARCHAR(45) NULL,
'sex' VARCHAR(45) NULL, 'department' VARCHAR(45) NULL, PRIMARY KEY('id'))
 ENGINE = InnoDB DEFAULT CHARACTER SET=utf8mb4;

 CREATE TABLE IF NOT EXISTS `sakila`.`country` (
  `country_id` SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `country` VARCHAR(50) NOT NULL,
  `last_update` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`country_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

-- https://www.npmjs.com/package/mysql
-- npm install mysql -S

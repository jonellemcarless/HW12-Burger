-- -- MySQL Workbench Forward Engineering

-- SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
-- SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
-- SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -- -----------------------------------------------------
-- -- Schema burgerdb
-- -- -----------------------------------------------------

-- -- -----------------------------------------------------
-- -- Schema burgerdb
-- -- -----------------------------------------------------
-- CREATE SCHEMA IF NOT EXISTS `burgerdb` DEFAULT CHARACTER SET utf8 ;
-- USE `burgerdb` ;

-- -- -----------------------------------------------------
-- -- Table `burgerdb`.`burgers`
-- -- -----------------------------------------------------
-- CREATE TABLE IF NOT EXISTS `burgerdb`.`burgers` (
--   `ID` INT NOT NULL AUTO_INCREMENT,
--   `BurgerName` VARCHAR(45) NULL,
--   `Devour` TINYINT(1) NULL,
--   `Date` VARCHAR(45) NULL,
--   PRIMARY KEY (`ID`))
-- ENGINE = InnoDB;


-- SET SQL_MODE=@OLD_SQL_MODE;
-- SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
-- SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;



CREATE DATABASE burgers_db;

USE burgers_db;
CREATE TABLE burgers (
id INTEGER(10) AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(20) NOT NULL,
devoured BOOLEAN DEFAULT true,
PRIMARY KEY (id)
);
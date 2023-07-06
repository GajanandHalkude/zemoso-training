CREATE TABLE IF NOT EXISTS `minet`.`transaction` (
    `id` INT PRIMARY KEY,
    `currency_id` VARCHAR(100),
    `type` VARCHAR(50) NOT NULL,
    `price` DECIMAL(18, 2),
    `symbol` VARCHAR(10),
    `quantity` DECIMAL(18, 2),
    `date` DATE,
    `status` VARCHAR(50),
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;
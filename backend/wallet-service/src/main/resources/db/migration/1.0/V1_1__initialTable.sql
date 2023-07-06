CREATE TABLE IF NOT EXISTS `minet`.`wallet` (
    `id` INT PRIMARY KEY,
    `name` VARCHAR(100) NOT NULL,
    `balance` DECIMAL(18, 2) DEFAULT 0,
    `average_value` DECIMAL(18, 2),
    `invested_amount` DECIMAL(18, 2),
    `currency_id` VARCHAR(100),
    FOREIGN KEY (`currency_id`) REFERENCES `currency`(`id`)
);
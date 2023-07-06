CREATE TABLE IF NOT EXISTS `minet`.`currency` (
    `id` VARCHAR(100) NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `symbol` VARCHAR(10) NOT NULL,
    `icon` VARCHAR(100),
    `price` DECIMAL(18, 2),
    `market_cap` DECIMAL(18, 2),
    `total_supply` DECIMAL(18, 2),
    `available_supply` DECIMAL(18, 2),
    `price_change` DECIMAL(18, 2),
    `volume` DECIMAL(18, 2),
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



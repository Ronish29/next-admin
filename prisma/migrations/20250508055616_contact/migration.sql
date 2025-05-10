-- CreateTable
CREATE TABLE `contact` (
    `id` MEDIUMINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(50) NOT NULL,
    `lastName` VARCHAR(50) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `message` MEDIUMTEXT NOT NULL,
    `phone_number` VARCHAR(15) NULL,
    `subject` MEDIUMTEXT NULL,
    `store_id` MEDIUMINT UNSIGNED NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

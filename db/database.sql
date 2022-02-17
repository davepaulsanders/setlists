CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `password_UNIQUE` (`password`)
) ENGINE = InnoDB AUTO_INCREMENT = 29 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci
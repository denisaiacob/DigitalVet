-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gazdă: 127.0.0.1
-- Timp de generare: iun. 07, 2023 la 09:36 PM
-- Versiune server: 10.4.28-MariaDB
-- Versiune PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Bază de date: `digitalvet`
--

-- --------------------------------------------------------

--
-- Structură tabel pentru tabel `clinics`
--

CREATE TABLE `clinics` (
  `clinic_id` bigint(20) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Eliminarea datelor din tabel `clinics`
--

INSERT INTO `clinics` (`clinic_id`, `address`, `city`, `description`, `name`, `photo`) VALUES
(153, 'Strada Soarelui, Nr. 2', 'Cluj', 'Va punem la dispozitie o gama larga de servicii veterinare precum: vaccinari, deparazitari, eliberari acte de calatorie (microcip, pasaport, inregistrare in Recs), chirurgie, deplasari la domiciliu, servicii de toaletaj (tuns, spalat, uscat, trimat) ', 'GreenVet', 'https://firebasestorage.googleapis.com/v0/b/licenta-c5734.appspot.com/o/clinicImages%2Fclinic1.jpgf18be48e-7d88-40a0-a679-7430b82971f4?alt=media&token=8f73318b-f2c8-4dda-8fc7-d8af68fd410a'),
(154, 'Aleea Tudor Neculai, nr. 15', 'Iasi', 'Nu aștepta prea mult și vino să ne faci o vizită! Îți punem la dispoziție cele mai bune servicii și produse destinate animalelor de companie.\nComunicăm de fiecare dată cu clienții noștri și ne asigurăm că le oferim cele mai potrivite soluții pentru problemele lor. Dorim ca fiecare interacțiune avută să aibă, în final, un stăpân mulțumit și un animăluț fericit.', 'AneVet', 'https://firebasestorage.googleapis.com/v0/b/licenta-c5734.appspot.com/o/clinicImages%2Fclinic2.webp1cb89f6e-f0c5-402a-9dff-bbb81d8f1bf4?alt=media&token=1cda6c39-9008-4d60-a2a8-9e4acc28cfab');

-- --------------------------------------------------------

--
-- Structură tabel pentru tabel `clinics_seq`
--

CREATE TABLE `clinics_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Eliminarea datelor din tabel `clinics_seq`
--

INSERT INTO `clinics_seq` (`next_val`) VALUES
(251);

-- --------------------------------------------------------

--
-- Structură tabel pentru tabel `clinic_admin`
--

CREATE TABLE `clinic_admin` (
  `clinic_id` int(9) NOT NULL,
  `user_id` int(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Eliminarea datelor din tabel `clinic_admin`
--

INSERT INTO `clinic_admin` (`clinic_id`, `user_id`) VALUES
(102, 205),
(152, 252),
(153, 253),
(154, 254);

-- --------------------------------------------------------

--
-- Structură tabel pentru tabel `fav_clinics`
--

CREATE TABLE `fav_clinics` (
  `id` int(9) NOT NULL,
  `clinic_id` int(9) NOT NULL,
  `user_id` int(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Eliminarea datelor din tabel `fav_clinics`
--

INSERT INTO `fav_clinics` (`id`, `clinic_id`, `user_id`) VALUES
(14, 153, 255),
(17, 154, 255);

-- --------------------------------------------------------

--
-- Structură tabel pentru tabel `fav_clinics_seq`
--

CREATE TABLE `fav_clinics_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Eliminarea datelor din tabel `fav_clinics_seq`
--

INSERT INTO `fav_clinics_seq` (`next_val`) VALUES
(101);

-- --------------------------------------------------------

--
-- Structură tabel pentru tabel `program`
--

CREATE TABLE `program` (
  `program_id` bigint(20) NOT NULL,
  `clinic_id` bigint(20) DEFAULT NULL,
  `friday` varchar(255) DEFAULT NULL,
  `months` varchar(255) DEFAULT NULL,
  `saturday` varchar(255) DEFAULT NULL,
  `sunday` varchar(255) DEFAULT NULL,
  `thursday` varchar(255) DEFAULT NULL,
  `tuesday` varchar(255) DEFAULT NULL,
  `wednesday` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Eliminarea datelor din tabel `program`
--

INSERT INTO `program` (`program_id`, `clinic_id`, `friday`, `months`, `saturday`, `sunday`, `thursday`, `tuesday`, `wednesday`) VALUES
(153, 153, '08:00-20:00', '08:00-20:00', '-', '-', '08:00-20:00', '08:00-20:00', '08:00-20:00'),
(154, 154, '09:00-20:00', '09:00-20:00', '10:00-16:00', '-', '09:00-20:00', '09:00-20:00', '09:00-20:00');

-- --------------------------------------------------------

--
-- Structură tabel pentru tabel `program_seq`
--

CREATE TABLE `program_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Eliminarea datelor din tabel `program_seq`
--

INSERT INTO `program_seq` (`next_val`) VALUES
(251);

-- --------------------------------------------------------

--
-- Structură tabel pentru tabel `reviews`
--

CREATE TABLE `reviews` (
  `review_id` bigint(20) NOT NULL,
  `day` datetime DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `service` varchar(255) DEFAULT NULL,
  `stars` int(11) DEFAULT NULL,
  `user` varchar(255) DEFAULT NULL,
  `vet_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Eliminarea datelor din tabel `reviews`
--

INSERT INTO `reviews` (`review_id`, `day`, `description`, `service`, `stars`, `user`, `vet_id`) VALUES
(102, '2023-06-07 16:36:32', '', 'Consultatie', 5, 'Alexandra', 154),
(103, '2023-06-07 16:37:05', 'Nu s-a respectat ora programarii', 'Radiografie', 4, 'Alexandra', 157),
(104, '2023-06-07 16:40:16', 'Experienta placuta', 'Microcip + Pasaport', 5, 'Andrei', 155),
(105, '2023-06-07 16:51:28', 'Timp lung de asteptare rezultate', 'Analize sange', 3, 'Andrei', 157);

-- --------------------------------------------------------

--
-- Structură tabel pentru tabel `reviews_seq`
--

CREATE TABLE `reviews_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Eliminarea datelor din tabel `reviews_seq`
--

INSERT INTO `reviews_seq` (`next_val`) VALUES
(201);

-- --------------------------------------------------------

--
-- Structură tabel pentru tabel `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structură tabel pentru tabel `services`
--

CREATE TABLE `services` (
  `service_id` bigint(20) NOT NULL,
  `clinic_id` bigint(20) DEFAULT NULL,
  `minutes` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` double NOT NULL,
  `vet_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Eliminarea datelor din tabel `services`
--

INSERT INTO `services` (`service_id`, `clinic_id`, `minutes`, `name`, `price`, `vet_id`) VALUES
(204, 153, 30, 'Consultatie', 100, 154),
(205, 153, 60, 'Microcip + Pasaport', 120, 155),
(206, 153, 30, 'Consultatie', 100, 156),
(207, 154, 60, 'Radiografie', 200, 157),
(208, 154, 30, 'Consultatie', 100, 157),
(209, 154, 30, 'Analize sange', 300, 157);

-- --------------------------------------------------------

--
-- Structură tabel pentru tabel `services_seq`
--

CREATE TABLE `services_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Eliminarea datelor din tabel `services_seq`
--

INSERT INTO `services_seq` (`next_val`) VALUES
(301);

-- --------------------------------------------------------

--
-- Structură tabel pentru tabel `users`
--

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `clinic_id` int(9) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Eliminarea datelor din tabel `users`
--

INSERT INTO `users` (`id`, `email`, `first_name`, `last_name`, `password`, `role`, `clinic_id`) VALUES
(253, 'denisa.iacob@gmail.com', 'Denisa', 'Iacob', '$2a$10$0gwrKT13UpQrHgzyc53l0OUzBREM1lzqZACqtXqFg061X2K.aAQT6', 'business', NULL),
(254, 'ana@gmail.com', 'Ana', 'Ion', '$2a$10$wbEwFyBzTxxj.H5gzH3au.aZMsy4fCk/2rxeuI9AqvjyJ2487LW5K', 'business', NULL),
(255, 'alexandra.iacob@gmail.com', 'Alexandra', 'Iacob', '$2a$10$wBH4iPuXpOsypa22BJJuWujks79wL3pVwle98EP7c/C03EQQ9Z656', 'user', NULL),
(256, 'andrei@gmail.com', 'Andrei', 'Ioja', '$2a$10$zRBrYG7GIxG/TaAqKS6bie1SEXypZ7kmDeoh6XCjb7DRmw2Hdq53i', 'user', NULL);

-- --------------------------------------------------------

--
-- Structură tabel pentru tabel `users_seq`
--

CREATE TABLE `users_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Eliminarea datelor din tabel `users_seq`
--

INSERT INTO `users_seq` (`next_val`) VALUES
(351);

-- --------------------------------------------------------

--
-- Structură tabel pentru tabel `user_roles`
--

CREATE TABLE `user_roles` (
  `role_id` int(9) NOT NULL,
  `user_id` int(9) NOT NULL,
  `roles` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structură tabel pentru tabel `vets`
--

CREATE TABLE `vets` (
  `vet_id` bigint(20) NOT NULL,
  `clinic_id` bigint(20) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `function` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Eliminarea datelor din tabel `vets`
--

INSERT INTO `vets` (`vet_id`, `clinic_id`, `description`, `function`, `name`, `photo`) VALUES
(154, 153, 'Doctor Medic Veterinar specialist in chirurgie, boli interne, boli de nutritie si etologie canina si felina,  membru al Colegiului Medicilor Veterinari din Iasi si membru al Asociatiei Medicilor Veterinari pentru animale de companie din Romania. Experienta profesionala este sustinuta prin diverse cursuri de specialitate.', 'Specialist in chirurgie', 'Andrei Gherghel', 'https://firebasestorage.googleapis.com/v0/b/licenta-c5734.appspot.com/o/vetImages%2Fvet1.jfif1a43c678-e621-4bf5-84ab-555a8d4a49d4?alt=media&token=13959843-71a0-4108-9c5c-aae00dfff763'),
(155, 153, 'Doctor Medic Veterinar specialist in microbiologie, investigatii de ordin paraclinic, specialist in etologie veterinara este membra a Colegiului Medicilor Veterinari din Iasi si membru al Asociatiei Medicilor Veterinari pentru animale de companie din Romania.', 'Specialist microbiologie', 'Ioana Matei', 'https://firebasestorage.googleapis.com/v0/b/licenta-c5734.appspot.com/o/vetImages%2Fvet3.png2e286b68-f867-4a97-b73f-3f5043a199f5?alt=media&token=29a44a6f-a74c-41a7-8e7f-b8f0c3c7f9ae'),
(156, 153, '', 'Medic generalist', 'Elizabeta Dumitru', 'https://firebasestorage.googleapis.com/v0/b/licenta-c5734.appspot.com/o/vetImages%2Fvet5.jpgdb74257e-56b9-4058-a1a6-03bd892318be?alt=media&token=2ea775cc-d8a2-4121-a6b0-012bdb54e6c2'),
(157, 154, 'Doctor medic veterinar din anul 2004, specializat în Clinică și terapie veterinară din anul 2006.', 'Medic generalist', 'Alina Rusu', 'https://firebasestorage.googleapis.com/v0/b/licenta-c5734.appspot.com/o/vetImages%2Fvet4.jfif63b7a6be-295f-4795-9de8-e0a6ab9417e5?alt=media&token=71702a3d-a432-41f1-8a72-6e31636d93d3');

-- --------------------------------------------------------

--
-- Structură tabel pentru tabel `vets_seq`
--

CREATE TABLE `vets_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Eliminarea datelor din tabel `vets_seq`
--

INSERT INTO `vets_seq` (`next_val`) VALUES
(251);

--
-- Indexuri pentru tabele eliminate
--

--
-- Indexuri pentru tabele `clinics`
--
ALTER TABLE `clinics`
  ADD PRIMARY KEY (`clinic_id`);

--
-- Indexuri pentru tabele `fav_clinics`
--
ALTER TABLE `fav_clinics`
  ADD PRIMARY KEY (`id`);

--
-- Indexuri pentru tabele `program`
--
ALTER TABLE `program`
  ADD PRIMARY KEY (`program_id`);

--
-- Indexuri pentru tabele `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`review_id`);

--
-- Indexuri pentru tabele `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexuri pentru tabele `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`service_id`);

--
-- Indexuri pentru tabele `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK6dotkott2kjsp8vw4d0m25fb7` (`email`);

--
-- Indexuri pentru tabele `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`role_id`);

--
-- Indexuri pentru tabele `vets`
--
ALTER TABLE `vets`
  ADD PRIMARY KEY (`vet_id`);

--
-- AUTO_INCREMENT pentru tabele eliminate
--

--
-- AUTO_INCREMENT pentru tabele `fav_clinics`
--
ALTER TABLE `fav_clinics`
  MODIFY `id` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT pentru tabele `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pentru tabele `user_roles`
--
ALTER TABLE `user_roles`
  MODIFY `role_id` int(9) NOT NULL AUTO_INCREMENT;

--
-- Constrângeri pentru tabele eliminate
--

--
-- Constrângeri pentru tabele `user_roles`
--
ALTER TABLE `user_roles`
  ADD CONSTRAINT `FKh8ciramu9cc9q3qcqiv4ue8a6` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

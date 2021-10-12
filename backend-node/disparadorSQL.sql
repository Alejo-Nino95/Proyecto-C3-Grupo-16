CREATE TABLE `usuario` (
	`id_usuario` VARCHAR(50) NULL DEFAULT NULL COLLATE 'utf8mb4_spanish_ci',
	`nombre_usuario` VARCHAR(50) NULL DEFAULT NULL COLLATE 'utf8mb4_spanish_ci',
	`correo_usuario` VARCHAR(50) NULL DEFAULT NULL COLLATE 'utf8mb4_spanish_ci',
	`telefono_usuario` VARCHAR(50) NULL DEFAULT NULL COLLATE 'utf8mb4_spanish_ci',
	`rol_usuario` VARCHAR(50) NULL DEFAULT NULL COLLATE 'utf8mb4_spanish_ci',
	`estado_usuario` VARCHAR(50) NULL DEFAULT NULL COLLATE 'utf8mb4_spanish_ci',
	UNIQUE INDEX `id_usuario` (`id_usuario`) USING BTREE
)
COLLATE='utf8mb4_spanish_ci'
ENGINE=InnoDB
;

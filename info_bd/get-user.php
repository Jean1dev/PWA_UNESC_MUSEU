<?php
	include "db.php";
	if (!isset($_POST["id_usuario"])){
		exit;
	}
	$id_animais = $_POST["id_usuario"];
    $sql_verifica = 'SELECT id_usuario, nome_usuario, senha_usuario, email, info_museu_id_info_museu FROM usuario WHERE id_usuario = "'.$id_usuario.'';
    
    $retorno = $exec_row->fetch_row();
	$retorno_row = $retorno[1];
	$return = array('RETORNO-USUARIO' => $retorno_row);

	echo json_encode($result);
	$conn->close();
?>
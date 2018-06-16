<?php
	include "conexao.php";
	
	$id_usuario = $_POST["id_usuario"]
	$nome_usuario = $_POST["nome_usuario"];
	$senha_usuario = $_POST["senha_usuario"];
	$email = $_POST["email"];
	$info_museu_id_info_museu = $_POST["info_museu_id_info_museu"];
	$descricao = $_POST["descricao"];

	
	$sql_verifica = 'SELECT id_usuario FROM usuario WHERE id_usuario = "'.$id_usuario.'" ';
	
	$exec_row = $conn->query($sql_verifica);
	
	if($exec_row->num_rows == 0){
		$sql_insert = 'INSERT INTO usuario (nome_animal, senha_usuario, email, info_museu_id_info_museu) ';
		$sql_insert .= ' VALUES (?, ?, ?, ?)';
		
		$stm = $conn->prepare($sql_insert);
		$stm->bind_param("ssss", $id_animal, $nome_animal, $senha_usuario, $email, $info_museu_id_info_museu);
		
		if ($stm->execute()){
			$retorno = array("retorno" => "YES");
			$stm->close();
		} else {
			$retorno = array("retorno" => "NO");
		}
		
	}else{
		$retorno = array("retorno" => 'DATABASE REQUEST ERROR');
	}
	
	echo json_encode($retorno);
	$conn->close();
?>
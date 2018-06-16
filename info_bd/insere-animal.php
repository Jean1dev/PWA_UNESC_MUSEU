<?php
	include "conexao.php";
	
	$id_animal = $_POST["id_animais"]
	$nome_animal = $_POST["nome_animal"];
	$nome_cientifico = $_POST["nome_cientifico"];
	$ordem_animal = $_POST["ordem_animal"];
	$familia_animal = $_POST["familia_animal"];
	$descricao = $_POST["descricao"];
	$distribuicao = $_POST["distribuicao"];
	$descricao_geografica = $_POST["descricao_geografica"];
	$habito_alimentar = $_POST["habito_alimentar"];
	$pruducao = $_POST["pruducao"];
	$periodo_vida = $_POST["periodo_vida"];
	$habitat = $_POST["habitat"];
	$info_museu_id_info_museu = $_POST["info_museu_id_info_museu"];
	
	$sql_verifica = 'SELECT id_animais FROM animais WHERE id_animais = "'.$id_animal.'" ';
	
	$exec_row = $conn->query($sql_verifica);
	
	if($exec_row->num_rows == 0){
		$sql_insert = 'INSERT INTO animais (nome_animal, nome_cientifico, ordem_animal, familia_animal, descricao, distribuicao, descricao_geografica, habito_alimentar, pruducao, periodo_vida, habitat, info_museu_id_info_museu) ';
		$sql_insert .= ' VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
		
		$stm = $conn->prepare($sql_insert);
		$stm->bind_param("ssssssssssss", $id_animal, $nome_animal, $nome_cientifico, $ordem_animal, $familia_animal, $descricao, $distribuicao, $descricao_geografica, $habito_alimentar, $pruducao, $periodo_vida, $habitat, $info_museu_id_info_museu);
		
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
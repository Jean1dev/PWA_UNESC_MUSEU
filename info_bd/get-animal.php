<?php
	include "db.php";
	if (!isset($_POST["id_animais"])){
		exit;
	}
	$id_animais = $_POST["id_animais"];
    $sql_verifica = 'SELECT id_animais, nome_cientifico, ordem_animal, familia_animal, descricao, distribuicao, descricao_geografica, habito_alimentar, pruducao, periodo_vida, habitat, info_museu_id_info_museu FROM animais WHERE id_animais = "'.$id_animais.'';
    
    $retorno = $exec_row->fetch_row();
	$retorno_row = $retorno[1];
	$return = array('RETORNO-ANIMAL' => $retorno_row);

	echo json_encode($result);
	$conn->close();
?>
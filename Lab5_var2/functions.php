<?php 

/**
* получение настроек
**/
function get_options(){
	global $db;
	$query = "SELECT * FROM options";
	$res = mysqli_query($db, $query);
	$options = array();
	while($row = mysqli_fetch_assoc($res)){
		$options[$row['id']] = $row;
	}
	return $options;
}

/**
* обновление настройки
**/
function update_option(){
	global $db;
	$value = mysqli_real_escape_string($db, $_POST['new_val']);
	$id = (int)$_POST['id'];
	$query = "UPDATE options SET value = '$value' WHERE id = $id";
	$res = mysqli_query($db, $query);
	if( mysqli_affected_rows($db) ) return true;
		else return false;
}

?>
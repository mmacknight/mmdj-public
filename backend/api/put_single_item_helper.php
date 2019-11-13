<?php

function check_based_on_self($secure_value, $secure_key){
    if($secure_value == get_increment_token()){
        $secure_value = $secure_key." + 1";
    }
    elseif($secure_value == get_decrement_token()){
        $secure_value = $secure_key." - 1";
    }
    return $secure_value;
}


// Not necessary now, but would be used in real dev because we would have hash codes that
// change based on time and stuff and we would pass that instead
of "int" and "dec"
function get_increment_token(){
    return "inc";
}

function get_decrement_token(){
    return "dec";
}
?>
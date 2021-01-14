// import React from 'react';
// import ReactDOM from 'react-dom';
import $ from 'jquery';

$(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop() >40 ){
            $('#top_screen').fadeIn();
        }else{
            $('#top_screen').fadeOut();
        }
    });

    $("#top_screen").click(function(){
        $('html, body').animate({scrollTop : 0},800);
    });
});

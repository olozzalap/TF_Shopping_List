var list_entry_num = 1;

function add_item() {
	var list_entry_name = document.forms["add_items_form"]["item"].value;
	var list_entry_html = $("<div class='list_entry' id='list_entry_" + list_entry_num + "'>" + list_entry_name + "<form name='list_entry_checkbox_" + list_entry_num + "'><input type='checkbox' name='checkbox' class='checkbox'></form></div>");
	if (list_entry_name == null || list_entry_name == ""){
		$("#error").fadeIn("fast");
	}
	else {
		list_entry_num ++;
		$(list_entry_html).appendTo("#list_container");
	}
	return false;
}

$(document).ready(function(){
	$("#error").hover(function(){
		$(this).css("background-color", "#f7877c")
	},
	function(){
		$(this).css("background-color", "#e74c3c")
	});

	$("#error").click(function(){
		$(this).fadeOut("fast");
	});

	$("#remove_selected").hover(function(){
		$(this).css("background-color", "#f2d357")
	},
	function(){
		$(this).css("background-color", "#F1C40F")
	});

	$("#remove_selected").click(function(){
		for (var i = 0; i <= list_entry_num; i++) {
			if ($("#list_entry_" + i).length) {
				if (document.forms[i].checkbox.checked) {
					$("#list_entry_" + i).fadeOut();
				}
			}
		}
	});

	
});
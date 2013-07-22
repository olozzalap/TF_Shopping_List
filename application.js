$(document).ready(function(){
	var list_entry_html = "<div class='list_entry'>" + list_entry_name + "<form name='list_entry_checkbox'><input type='checkbox'></form></div>"
	var list_entry_name = "guns are drawn";
	function add_item() {
		$(document).hide();
		$(list_entry_html).appendTo("div#list_container");
		console.log(list_entry_name);
		return true;
	}




});
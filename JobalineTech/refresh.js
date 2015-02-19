function refresh() {
	var tab = $(".active").attr("id");
	$("#" + tab).children().remove();
	loadFeed(tab);
}
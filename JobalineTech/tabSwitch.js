function tabSwitch(tab) {
	$(".content").addClass("hidden");
	$("#" + tab).removeClass("hidden");
	$("#" + tab).addClass("active")
	if ($(".active").is(".noload")) {
		loadFeed(tab);
		$(".active").removeClass("noload");
	}
}
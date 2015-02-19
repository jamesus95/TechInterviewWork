function tabSwitch(tab) {
	$(".content").addClass("hidden");
	$(".active").removeClass("active");
	$("#" + tab).removeClass("hidden");
	$("#" + tab).addClass("active")
	if ($(".active").is(".noload")) {
		loadFeed(tab);
		$(".active").removeClass("noload");
	}
}
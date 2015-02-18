
function loadFeed(sectionID) {
	// default loads 4 entries
	var feed = new google.feeds.Feed("http://news.yahoo.com/rss/" + sectionID);
	feed.setNumEntries(7);
	
	feed.load(function(result) {
		
		for (var i = 0; i < result.feed.entries.length; i++) {
			var feedEntry = result.feed.entries[i];
			var feedEntryTitle = feedEntry.title;
			var feedEntryURL = feedEntry.link;
			var feedEntryContent = feedEntry.content;
			$("#" + sectionID).append("<div class=\"col-xs-12 entry\"><a href=\"" 
				+ feedEntryURL + "\">" + feedEntryTitle + "</a><p>" 
				+ feedEntryContent + "</p></div>");
		}

	});
};
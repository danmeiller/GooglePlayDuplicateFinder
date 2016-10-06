mySet = {};
var tracklist = document.getElementsByClassName("tracklist-entry");
for(i = 0; i < tracklist.length; i++)
{
	var trackListing = tracklist[i];

	var titleList = trackListing.getElementsByClassName("track-title");
	var titleElem = titleList[0];
	var title = titleElem.firstChild.nodeValue;

	var artistList = trackListing.getElementsByClassName("artist");
	var artistElem = artistList[0];
	var artist = artistElem.firstChild.nodeValue;

	var key = title + " - " + artist;

	if (!mySet.hasOwnProperty(key)){ // hashset
		mySet[key] = true;
        }
        else
        {
        	console.log("duplicate detected:  [" + (i + 1) + "]: " + key);
        }
}

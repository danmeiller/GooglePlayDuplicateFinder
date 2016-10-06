# Google Play Music Playlist Duplicate Finder
Finds duplicates in a publicly accessible google play music playlist.  

This will not work when logged in. It can work by using incognito/private browsing mode.

When run on a playlist page, it will return any duplicates (based on unique title and 
artist). It returns the duplicates with the number in the playlist. A known bug is the 
numbers being off if personally uploaded music is in the playlist. Since the music is 
private (not available from Google to stream to others), it will not be shown in the 
public version of the playlist and will cause the returned indices to be off. 

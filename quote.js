var quotes = [
 ['"The only thing that makes life possible is permanent, intolerable uncertainty; not knowing what comes next."', '-Ursula K. Le Guin'],
 ['"If you spend too much time thinking about a thing, you\'ll never get it done."', '-Bruce Lee'], 
 ['"They teach you there\'s a boundary line to music. But, man, there\'s no boundary line to art"', '-Charlie Parker'], 
 ['"I never ask a man what his business is, for it never interests me. What I ask him about are his thoughts and dreams."', '-H. P. Lovecraft'], 
 ['"By forgetting the past and by throwing myself into other interests, I forget to worry."', '-Jack Dempsey'], 
 ['"He who is not courageous enough to take risks will accomplish nothing in life."', '-Muhammad Ali'], 
 ['"I put in my best effort even if nothing good comes of it. That\'s my creed."', '-Leiji Matsumoto'], 
 ['"Science is basically an inoculation against charlatans."', '-Neil deGrasse Tyson'], 
 ['"I learned a long time ago that reality was much weirder than anyone\'s imagination."', '-Hunter S. Thompson'], 
 ['"There is only a finger\'s difference between a wise man and a fool."', '-Diogenes'], 
 ];
function getQuote(){
	var x = Math.floor(Math.random() * quotes.length);
	var quoteOut = quotes[x][0];
	var authorOut = quotes[x][1];
	var tweet = quoteOut + " " +authorOut;
	$('.quote').text(quoteOut);
	$('h2.author').text(authorOut);
	tweet = tweet.replace(';' ,'%3B');
	$('.tweet').attr
	("href", 'https://twitter.com/intent/tweet?text=' + tweet);
}
var color=['#2F537D' , '#7F0081', '#C73C3C', '#C1C1C1', '#E1E1AD',
 '#FFC24E', '#0066d8', '#420303', '#A8FFE3', '#F7F9E3'];
function getColor(){
	var y = Math.floor(Math.random() * color.length);
	var newBg= color[y];
	$('body').css('background-color', newBg);
}
$(document).ready(function() {

$('button').on('click.cQuote', getQuote);
$('button').on('click.cQuote', getColor);
});
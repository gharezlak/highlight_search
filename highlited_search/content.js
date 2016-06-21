
//LinkedIn
function findIt(doc){
	var qr = doc.getSelection(); 
	if( qr.toString() !== '') {
		return qr; 
	} 
	var els=doc.getElementsByTagName("iframe"); 
	for(var i=0;i<els.length;i++){
		qr = findIt(els[i].contentWindow.document); 
		if(qr.toString() !== ''){
			break; 
		}
	} 
	return qr;
}; 

function openIt(){
	loc = findIt(document); 
	window.open('https://www.linkedin.com/cap/peopleSearch/doSearch?resultsType=search&keywords='+loc+'', '_blank');
} 
openIt();

//Google
Qr=document.getSelection();
if(Qr){
	window.open('https://www.google.com/search?q='+escape(Qr),'_blank');
}

//Google Scholar
Qr=document.getSelection();
if(Qr){
	window.open('http://scholar.google.com/scholar?q='+escape(Qr)+'&btnG=&hl=en&as_sdt=0%2C5','_blank');
}

//Facebook
Qr=document.getSelection();
if(Qr){
	window.open('https://www.facebook.com/search/keyword/?q='+escape(Qr),'_blank');
}

//Github
Qr=document.getSelection();
if(Qr){
	window.open('https://github.com/search?utf8=%E2%9C%93&q='+escape(Qr)+'&type=Users&ref=searchresults','_blank');
}
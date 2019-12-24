function browerCheck(){
	var agent = navigator.userAgent.toLowerCase();

	if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ) {
		alert("인터넷 익스플로러 브라우저에서 본 페이지를 이용할 경우, \n제한이 있으실 수 있습니다.");
		window.close();
	}else {
	}
}
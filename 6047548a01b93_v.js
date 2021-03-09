function getURLParameter(name, url) {
            if (url) {
                var query = url.split("?")[1];
            } else {
                var query = window.location.search.substring(1);
            }
            var vars = query.split("&");
            for (var i = 0; i < vars.length; i++) {
                var pair = vars[i].split("=");
                if (pair[0] === name) {
                    return pair[1];
                }
            }
            return "";
        }

        function getParameter(name) {return decodeURI((RegExp(name + '=' + '(.*?)(&|$)').exec(location.search)||[,null])[1] || '');}
        
        if (getURLParameter('cpid')=='') {
	    var Img = new Image(1,1);
	    Img.src = 'https://go.buykoretrak.net/3b635615-55e1-4918-842e-6be03fdac157?site='+getParameter('site')+'&site_id='+getParameter('site_id')+'&title='+getParameter('title')+'&platform='+getParameter('platform')+'&campaign_id='+getParameter('campaign_id')+'&campaign_item_id='+getParameter('campaign_item_id')+'&thumbnail='+getParameter('thumbnail')+'&click_id='+getParameter('click_id'); 
                document.body.appendChild(Img); 
         };

        function aClick() {
            window.location = "https://go.buykoretrak.net/click";
            _tfa.push({notify: 'event', name: 'lead', id: 1359120});
            
        }
javascript:(
    function(){
        title = document.title;
        href = document.location.href;
        
        var output = '['+title+']('+href+')';
        execCopy(output);

        alert("クリップボードにコピーしました。");
        
        function execCopy(string){
            var div = document.createElement('div');
            var pre = document.createElement('pre');
            
            pre.style.webkitUserSelect = 'auto';
            pre.style.userSelect = 'auto';

            div.appendChild(pre).textContent = string;

            //divを画面外に持っていく
            var s = div.style;
            s.position = 'fixed';
            s.right = '200%';

            document.body.appendChild(div);
            document.getSelection().selectAllChildren(div);

            var result = document.execCommand('copy');

            //divを取り除く
            document.body.removeChild(div);

            return result;
        }
    }
)();
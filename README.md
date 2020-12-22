# MarkdownUrlGenerator
MarkdownUrlGeneratorは、WebサイトをGitHubマークダウンリンクとして出力するGoogleChrome用ブックマークレットです。   

# 使い方/動作
作成したブックマークレットをクリックすると、クリップボードにサイトの名前とURLをGitHubのマークダウン形式でコピーします。
   
### 生成されるリンク例
[ Atria64/MarkdownUrlGenerator: URL converter to output as GitHub markdown. ] ( https://github.com/Atria64/MarkdownUrlGenerator )
   
# 導入方法
 1. **GoogleChromeのブックマークマネージャーを開きます**(Ctrl+Shift+O)
 2. 右上の**新しいブックマーク**を開きます    
    
 ![image](https://user-images.githubusercontent.com/49768768/102811815-549e7f80-4409-11eb-88c3-e379b3f2e0d6.png)
    
 3. 名前には "MarkDownUrlGen" などの**任意の名前を入力**します。
 4. URLには以下の文字列を入力してください。([compiled.js](./compiled.js))    
   
```
 javascript:(function(){title=document.title;href=document.location.href;var b="["+title+"]("+href+")",a=document.createElement("div"),c=document.createElement("pre");c.style.webkitUserSelect="auto";c.style.userSelect="auto";a.appendChild(c).textContent=b;b=a.style;b.position="fixed";b.right="200%";document.body.appendChild(a);document.getSelection().selectAllChildren(a);document.execCommand("copy");document.body.removeChild(a);alert("\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u306b\u30b3\u30d4\u30fc\u3057\u307e\u3057\u305f\u3002")})();
```
    
![image](https://user-images.githubusercontent.com/49768768/102812233-08a00a80-440a-11eb-9b63-13b8b18dd2bd.png)

5. 保存を押して導入完了です。
 
# 利用しているもの
 - [Closure Compiler](https://closure-compiler.appspot.com/home)

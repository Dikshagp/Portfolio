

$("#jpbtn").on("click", function(){

    localStorage.setItem('languagePreference', 'jp');
  
    $("h1").text ("向上心のある フロントエンド Web デベロッパー");
    $(".lead").text("PHP、MySQL、HTML、CSS、Bootstrap、JavaScript、Jquery の熟練度を備え、Web 開発に移行中の経験豊富な QA エンジニア。現在スキルを向上させています。高品質の Web アプリケーションを保証し、部門を超えたチームで効果的にコラボレーションすることに熟練しています。フロントエンド開発におけるクリーンで効率的なコードと継続的な学習に専念しています。");

    $(".name").text("ディクシャ・パティル");

    $("#skill").text("スキル");
    $("#project").text("プロジェクト");
    $("#hanging-icons a").text("リンク");

    $("#testing ").text("私は設定に 3 年の経験があり、テスト ケースの作成と実行、およびバグの報告に精通しています。");
    
    $("#js ").text("java scriptに関する良い知識を持っており、自分のスキルを高め、貢献できる機会を探しています。");
    
    $("#jq ").text("jQueryについて基本的な理解を持っており、自分のスキルを高め、貢献できる機会を探しています。");
    
    $("#php ").text("PHPについてよく理解しており、自分のスキルを高め、貢献できる機会を探しています。");
    
    $("#mysql ").text("MYSQLについて基本的な理解を持っており、自分のスキルを高め、貢献できる機会を探しています。");
    
    $("#ht ").text("HTMLについてよく理解しており、自分のスキルを高め、貢献できる機会を探しています。");
    
    $("#cs ").text("CSSについてよく理解しており、自分のスキルを高め、貢献できる機会を探しています。");
    
    $("#bs ").text("Bootstrapについて基本的な理解を持っており、自分のスキルを高め、貢献できる機会を探しています。");
    
    $("#jpt ").text("日本語初級、JLPT N4 資格取得。");


    $("#proj1 ").text("html,css,javascriptを使用して開発されたシンプルなサイコロプロジェクトです。サイコロの目に従って画面が更新されると、勝者が宣言されます。アプリケーションはレスポンシブです。");
   
    $("#proj2 ").text("これはhtml,css,javascriptを使って開発されたシンプルなレスポンシブ・プロジェクトです。ドラムの画像をクリックすると音が鳴り、キーボードでも動作します。");

    $("#proj3 ").text("サイモンは短期記憶力を競うゲームです。html,css,javascript,jqueryを使用して開発されています。ユーザーが気分に合わせて遊べる、とても楽しいゲームです。。");
   
});



//$("#enbtn").click(function() {
   // location.reload();
//});

$(".name").css("color", "black").slideUp(2000).slideDown(2000);


$("#enbtn").click(function() {
    // Remove language preference from localStorage
    localStorage.removeItem('languagePreference');
    // Reload the page to reset to English (if needed, you can remove this if you want to maintain Japanese choice)
    location.reload();
});

// Function to determine initial language setting on page load
$(document).ready(function() {
    // Check localStorage for language preference
    var languagePreference = localStorage.getItem('languagePreference');
    // If Japanese was previously selected, set Japanese content
    if (languagePreference === 'jp') {
        $("#jpbtn").click(); // Trigger click to set Japanese content
    }
});
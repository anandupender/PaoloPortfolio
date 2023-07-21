window.onload = function () {
    window.scrollTo(0, 0);
}

function randomArticle(){
    var articles = ["https://www.kqed.org/arts/13900187/molcaxitl-kitchen-taco-stand-outer-sunset-indigenous-mexican-food", "https://brokeassstuart.com/2023/05/29/san-francisco-gay-mens-chorus-concert/", "https://brokeassstuart.com/2023/07/10/writing-poetry-events-bay-area-san-francisco/", "https://sf.eater.com/2023/3/7/23627631/korean-restaurants-san-francisco-bibimbar-matko-korner-store", "https://www.apartmenttherapy.com/queer-dinner-party-37177142", "https://sf.eater.com/2022/7/14/23207262/san-francisco-tenderloin-best-coffee-yemeni-mokhtar-alkhanshali", "https://sf.eater.com/23753360/diner-coffee-commodity-robusta-history"];
    
    var randomNum = Math.floor(Math.random() * (articles.length - 1));
    window.open(articles[randomNum], '_blank');
}

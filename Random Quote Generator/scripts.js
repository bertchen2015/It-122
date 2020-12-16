var quotes = ["“We don't need the memories!” –Inarizaki ",
              "“The future Belongs to those who beleive in the beauty of their dreams” - Shoyo Hinata",
              "“The last ones standing are the victors. Only the strongest. If you want to be the last one standing, become really strong” - Tobio Kageyama",
              "“Life's a bore if you don't challenge yourself” -Yu Nishinoya",
              "“There are some flowers you only see when you take detours” – Tanaka Saeko"
]

function createNewQuote(){
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteArea').innerHTML = quotes[randomNumber];
}

function newQuote(){
  var text = document.getElementById("quoteInsert").value;
  quotes[quotes.length] = text; 
}
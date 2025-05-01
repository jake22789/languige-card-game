var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors();


Deck starter =new Deck(new List<Card>{},new List<Flashcard>{});
void buildStarter(){
starter.drawpile.Add(new Flashcard(1,"friend","Amigo"));
starter.drawpile.Add(new Flashcard(2,"good","Bueno"));
starter.drawpile.Add(new Flashcard(3,"house","Casa"));
starter.drawpile.Add(new Flashcard(4,"Day","Día"));
starter.drawpile.Add(new Flashcard(5,"school","Escuela"));
starter.drawpile.Add(new Flashcard(6,"Family","Familia"));
starter.drawpile.Add(new Flashcard(7,"Cat","Gato"));
starter.drawpile.Add(new Flashcard(8,"Hello","Hola"));
starter.drawpile.Add(new Flashcard(9,"island","Isla"));
starter.drawpile.Add(new Flashcard(10,"juice","Jugo"));
starter.drawpile.Add(new Flashcard(11,"book","Libro"));
starter.drawpile.Add(new Flashcard(12,"table","Mesa"));
starter.drawpile.Add(new Flashcard(13,"Night","Noche"));
starter.drawpile.Add(new Flashcard(14,"eye","Ojo"));
starter.drawpile.Add(new Flashcard(15,"dog","Perro"));
starter.drawpile.Add(new Flashcard(16,"red","Rojo"));
starter.drawpile.Add(new Flashcard(17,"sun","sol"));
starter.drawpile.Add(new Flashcard(18,"cup","taza"));
starter.drawpile.Add(new Flashcard(19,"grape","uva"));
starter.drawpile.Add(new Flashcard(20,"wind","viento"));
starter.drawpile.Add(new Flashcard(21,"waffle","wafle"));
starter.drawpile.Add(new Flashcard(22,"shoe","zapato"));
starter.drawpile.Add(new Flashcard(23,"Yogurt","Yogur"));
starter.drawpile.Add(new Flashcard(24,"rice","arroz"));
starter.drawpile.Add(new Flashcard(25,"pescado","fish"));
starter.drawpile.Add(new Flashcard(26,"water","agua"));
}
buildStarter();
Stack<Card> english = new Stack<Card>();
foreach (var item in starter.drawpile)
{
    english.Push(new Card(item.id,item.word));
}
Stack<Card> forin = new Stack<Card>();
foreach (var item in starter.drawpile)
{
    forin.Push(new Card(item.id,item.forenword));
}
Stack<Card> draw = new Stack<Card>();
void ShuffleStacks(Stack<Card> stack1, Stack<Card> stack2, Stack<Card> result)
{
    var combined = stack1.Concat(stack2).OrderBy(_ => Guid.NewGuid()).ToList();
    foreach (var card in combined)
    {
        result.Push(card);
    }
}

ShuffleStacks(english, forin, draw);
Console.WriteLine(draw.Count);




var app = builder.Build();
app.UseCors(x => x.AllowAnyHeader().AllowAnyOrigin().AllowAnyMethod());
app.MapGet("/", () => "Hello World!");
app.MapGet("/deck",()=>{
    return starter.drawpile;

});
app.MapGet("/hand",()=>{
    if( draw.Count < 6)
    {
        ShuffleStacks(english, forin, draw);
    }
    starter.hand.Clear();
    for (int i = 0; i < 6; i++)
    {
    starter.hand.Add(draw.Pop());  
    }
    return starter.hand;
});
app.MapPost("/makecard/{normalWord}/{translated}",(string normalWord,string translated)=>{
    starter.drawpile.Add(new Flashcard(starter.drawpile.Count+1,normalWord,translated));
    
});

app.Run();

record Card(int id ,string word);
record Flashcard(int id ,string word, string forenword);
record Deck(List<Card> hand,List<Flashcard> drawpile);
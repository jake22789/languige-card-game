var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors();


Deck starter =new Deck(new List<Flashcard>{},new List<Flashcard>{});
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


var app = builder.Build();
app.UseCors(x => x.AllowAnyHeader().AllowAnyOrigin().AllowAnyMethod());
app.MapGet("/", () => "Hello World!");
app.MapGet("/deck",()=>{

});

app.Run();

record Flashcard(int id ,string word, string forenword);
record Deck(List<Flashcard> hand,List<Flashcard> drawpile);
var deepak={
name:"deepak",
last_name:"sharma",
age:19,
fullname:function() 
{
	return this.name+ this.last_name;
}//creating object through constructor


}
console.log(deepak.fullname());

function batsman(name,runscore,ballfaced)
{
	this.name=name;
	this.run_score=runscore;
	this.ball_faced=ballfaced;
}
var dhoni=new batsman("ms",81,52);
console.log(dhoni);

var person= new Object()
person.age=19;
person.height="5.4";
console.log(person);
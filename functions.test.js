const f = require('./functions');

test('Ejecucion Normal con Respuesta Esperada SIN PARAMETROS',()=>{
	expect( f.fizzBuzz() )
	.toEqual('12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz1617Fizz19BuzzFizz2223FizzBuzz26Fizz2829FizzBuzz3132Fizz34BuzzFizz3738FizzBuzz41Fizz4344FizzBuzz4647Fizz49BuzzFizz5253FizzBuzz56Fizz5859FizzBuzz6162Fizz64BuzzFizz6768FizzBuzz71Fizz7374FizzBuzz7677Fizz79BuzzFizz8283FizzBuzz86Fizz8889FizzBuzz9192Fizz94BuzzFizz9798FizzBuzz');
});

test('Ejecucion pasandole los parametros a fizzBuzz ONLY CASE [ Fizz ]',()=>{
	expect( f.fizzBuzz(3,3) ).toEqual('Fizz');
	expect( f.fizzBuzz(12,12) ).toEqual('Fizz');
	// test ONLY conditional i % 3 === 0
});


test('Ejecucion pasandole los parametros a fizzBuzz ONLY CASE [ FizzBuzz ]',()=>{
	expect( f.fizzBuzz(15,15) ).toEqual('FizzBuzz');
	expect( f.fizzBuzz(30,30) ).toEqual('FizzBuzz');
	// test i % 3 === 0 && i % 5 === 0
});


test('Ejecucion pasandole los parametros a fizzBuzz ONLY CASE [ Buzz ] ',()=>{
	expect( f.fizzBuzz(5,5) ).toEqual('Buzz');
	expect( f.fizzBuzz(10,10) ).toEqual('Buzz');
	expect( f.fizzBuzz(20,20) ).toEqual('Buzz');
	// test ONLY conditional i % 5 === 0
});

test('Ejecucion pasandole los parametros a fizzBuzz ONLY CASE [ Equal ] ',()=>{
	expect( f.fizzBuzz(1,1) ).toEqual('1');
	expect( f.fizzBuzz(2,2) ).toEqual('2');
	expect( f.fizzBuzz(4,4) ).toEqual('4');
	// test [ reurn Equal Value ]
});

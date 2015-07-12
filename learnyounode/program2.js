sum = 0;
for (var counter = 2 ; counter < process.argv.length ; counter++ )
{
	sum  += Number(process.argv[counter]);
}
console.log(sum);
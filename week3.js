let Ages = [3, 9, 23, 64, 2, 8, 28, 93]

var last = ages[ages.length - 1] 

var first = ages[ages.length - ages.length] 

var diff = last- first

Ages.push(20)

var sum = 0, avg = 0.0

for (var i = 0; i < ages.length; i++) {//running a loop from 0 to the length of the array

sum = sum + ages[i]//adding each age to the sum

}

avg = sum / ages.length//calculating avg


console.log(`Difference between first and last element is: ${diff}`)


let names =["Sam","Tommy","Tim","Sally","Buck","Bob"]
sum = 0;
		for (int i = 0; i < names.length; i++) {
			sum += names[i].length();
		}
		average = sum / names.length;
		System.out.println("The average number of letters per name in names[] = " + average );
		
		String allNames = "";
		for (int i = 0; i < names.length; i++) {
			allNames += names[i] + " ";
		}
		System.out.println(allNames);
        

	var a = [0,0,0,0,0,0,0,0];
	function myFunction(){
		/*for 1st box*/
		var oneT = document.getElementById("oneT").value;
		var oneF = document.getElementById("oneF").value;
		if( document.getElementById("oneT").checked == true){
			a[0] = oneT;
		}
		else{
			a[0] = oneF;
			}
			console.log(a[0]);
		/* */
		/*for second box*/
		var twoT = document.getElementById("twoT").value;
		var twoF = document.getElementById("twoF").value;
		if( document.getElementById("twoT").checked == true){
			a[1] = twoT;
		}
		else{
			a[1] = twoF;;
			}
			console.log(a[1]);
		/* */
		/* for third box*/
		var thirdT = document.getElementById("thirdT").value;
		var thirdF = document.getElementById("thirdF").value;
		if( document.getElementById("thirdT").checked == true){
			a[2] = thirdT;
		}
		else{
			a[2] = thirdF;
			}
			console.log(a[2]);
		/* */
		/* for fourth box */
		var fourthT = document.getElementById("fourthT").value;
		var fourthF = document.getElementById("fourthF").value;
		if( document.getElementById("fourthT").checked == true){
			a[3] = fourthT;
		}
		else{
			a[3] = fourthF;
			}
			console.log(a[3]);
		/* */ 
		/*for fifth box */
		var fifT = document.getElementById("fifT").value;
		var fifF = document.getElementById("fifF").value;
		if( document.getElementById("fifT").checked == true){
			a[4] = fifT;
		}
		else{
			a[4] = fifF;
			}
		console.log(a[4]); 
		/* */
		/*for sixth box */
		var sixthT = document.getElementById("sixthT").value;
		var sixthF = document.getElementById("sixthF").value;
		if( document.getElementById("sixthT").checked == true){
			a[5] = sixthT;
		}
		else{
			a[5] = sixthF;
			} 
			console.log(a[5]);
		/* */
		/*for seventh box */
		var svnT = document.getElementById("svnT").value;
		var svnF = document.getElementById("svnF").value;
		if( document.getElementById("svnT").checked == true){
			a[6] = svnT;
		}
		else{
			a[6] = svnF;
			} 
			console.log(a[6]);
		/* */
		//main script to find the number
		var power;
		var finalresult=0;
		var useableresult = 0;
		var i=0;
		for (i=0; i<=8; i++)
		{
			if(!isNaN(finalresult))
			{
				power = Math.pow(2,i);
				useableresult = finalresult;
				//console.log(a[i]);
				finalresult = finalresult + a[i] * power;
			}
		}
	console.log("Your Guessed Number Is");
	console.log(useableresult);
	var name = document.getElementById("name").value;
		console.log(name);
	var previous = document.getElementById("firstpage");
	var user = document.getElementById("user_name");
	var basic = document.getElementById("basic_text");
	var num = document.getElementById("num");
	var about = document.querySelector(".about");
	var whatsapp = document.querySelector(".whatsapp");
	whatsapp.style.display = "block";
	previous.style.display = "none";
	user.innerHTML =name;
	basic.innerHTML = "You Have Guessed";
	num.innerHTML = useableresult;
	about.innerHTML = "This Website Is Fully Hancrafted By Bijit. If You Like It Please Do Share.";
	}

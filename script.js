const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
let price = document.getElementsByClassName("price")


const getSum = () => {
//Add your code here
let sum = 0;
	
		for(let t of price){
			// t.innerText
            // console.log(t)
            let val = +t.innerText;
            // console.log(typeof val);
            // console.log(val);
            sum += val;
		}
	
//   return sum
// console.log(sum)
let div = document.createElement("div");
div.innerText = sum;
div.className = "prices"
document.body.appendChild(div);


};

getSumBtn.addEventListener("click", getSum);


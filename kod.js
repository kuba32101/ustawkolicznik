let counter = 0,ncounter = 0;
			function ddkol(){
				counter++;
				document.getElementById("ysk").insertAdjacentHTML("beforeend",`
					<li class="cys">
						<input type="text" placeholder="Wpisz nazwę"><br>siła:<span class="spanek">50</span><br>
						<input class="ranga" type="range" min="0" max="100" value="50" oninput="this.previousElementSibling.previousElementSibling.textContent=this.value">
					</li>`)}
					
			function ddnkol(){
				ncounter++;
				document.getElementById("osk").insertAdjacentHTML("beforeend",`
					<li class="cys">
						<input type="text" placeholder="Wpisz nazwę"><br>siła:<span class="spanek">50</span><br>
						<input class="ranga" type="range" min="0" max="100" value="50" oninput="this.previousElementSibling.previousElementSibling.textContent=this.value">
					</li>`)}
					
			function laczsila(){
				let s = 0;
				document.querySelectorAll("#ysk input[type=range]").forEach(e => s += +e.value);
				return s}
				
			function nlaczsila(){
				let s = 0;
				document.querySelectorAll("#osk input[type=range]").forEach(e=>s+=+e.value);
				return s}
			
			function sigmoid(x) {
				return 1 / (1 + Math.exp(-x));
			}
			
			function sprawdzwg(a,b){
				const blins = a - b;
				const procnt = sigmoid(blins * 0.05);
				const odp = procnt * 100;
				return Math.round(odp * 1000) / 1000;
			}

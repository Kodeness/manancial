let opcaoescolhidagl = ''

document.querySelectorAll("a").forEach(function(link) {
    link.addEventListener("click", function(event) {

        if (this.className == 'c-menu-item' || this.id == 'cred' ) {

        } else{
            event.preventDefault();

            document.getElementById("cardapio").classList.add("fade-out");
            document.getElementById("cardapio").style.display = "none";


            document.getElementById("confirmar-pedido").classList.add("fade-in");
            document.getElementById("confirmar-pedido").style.display = "block";


            const opcao = this.id;

            especialidades = { 'petitgateau' : 'Petit Gateau',
                        'sundae': 'Sundae',
                        'bananasplit': 'Banana Split',
                        'milkshaketradicional': 'Milk Shake Tradicional',
                        'milkshakegourmet': 'Milk Shake Gourmet',
                        'tacasensacao': 'Taça Sensação',
                        'bolonataca': 'Bolo na Taça',
                        'brownie' : 'Brownie',
                        'acai' : 'Açai',
                        'acresc' : 'Acrescimo'
                    };
            lanches = { 'coxinha' : 'Coxinha',
                        'empada': 'Empada',
                        'tortinha': 'Tortinha',
                        'chicagopizza': 'Chicago Pizza',
                        'pastel': 'Pastel',
                        'esfirra': 'Esfirra',
                        'minipizza': 'Mini Pizza'
                       
                    };
            
            bebidas = { 'vitaminaacai' : 'Vitamina de Açai',
                        'vitaminafruta': 'Vitamina de Fruta',
                        'suconatural': 'Suco Natural',
                        'refrilata': 'Refrigerante Lata',
                        'refrimini': 'Refrigerante Mini',
                        'agua': 'Água',
                       
            
                    };
        
        
            console.log("Clicou no id:", this.id);
            
   
            
            function sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }

            const barraprogresso = document.getElementById("progresso-barra");
            const barraprogressotamanho = barraprogresso.offsetWidth;
            const progresso = document.getElementById("progresso");

            let progressotamaho = progresso.offsetWidth;

            

            async function processarComEspera(valor,valormaximo,el) {
                
                try {
                    qtdPorLoop =  (valormaximo - valor)/6;
                    console.log(qtdPorLoop);
                    console.log(valormaximo);

                    while(valor <= valormaximo){
                        
                        valor = el.offsetWidth;
                        
                        await sleep(500);
                        
                        valor += qtdPorLoop;
                      
                        if (valor > valormaximo){
                            valor = valormaximo;
                            
                        } 

                        el.style.width = valor + 'px';

                        if (valor == valormaximo){
                            return true;
                        }

                    }

                    
                } catch (error) {
                    return false;
                }
 
            }
            
            
            let carregamento = false;

            processarComEspera(progressotamaho,barraprogressotamanho,progresso).then(result => {carregamento = result;} )
            
            console.log(carregamento);

            const rndatendente = Math.floor(Math.random() * 2) + 1;

            let atendente = 'https://api.whatsapp.com/send?phone=5533988236674&text=';

            if(rndatendente == 1){
                atendente = 'https://api.whatsapp.com/send?phone=5533988236674&text=';
            
            } else {
                atendente = 'https://api.whatsapp.com/send?phone=5533998238772&text=';
            };
            
           
            let opcaoescolhida = opcao;

            async function wpp() {
                let carregamento = false;

                carregamento = await processarComEspera(progressotamaho, barraprogressotamanho, progresso);
                
                if(carregamento){
                    
                    window.location.href = atendente + msgpadrao;
                            

                };
                   
            };

            wpp();

            

            if (especialidades.hasOwnProperty(opcao)) {

                opcaoescolhida = especialidades[opcao];
                opcaoescolhidagl = opcaoescolhida

                document.getElementById("lanche-especialidade").classList.add("fade-in-ad");
                document.getElementById("lanche-especialidade").style.display = "block";


            } else {

                if (lanches.hasOwnProperty(opcao)) {
                    opcaoescolhida = lanches[opcao];
                    opcaoescolhidagl = opcaoescolhida

                    document.getElementById("lanche-salgado").classList.add("fade-in-ad");
                    document.getElementById("lanche-salgado").style.display = "block";
                } else {
                    if (bebidas.hasOwnProperty(opcao)) {
                        opcaoescolhida = bebidas[opcao];
                        opcaoescolhidagl = opcaoescolhida

                        document.getElementById("bebida-f").classList.add("fade-in-ad");
                        document.getElementById("bebida-f").style.display = "block";
                    }
                }
               

            };

            

            let msgpadrao = 'Olá, gostaria de pedir um ' + opcaoescolhidagl + '.';
            
            if (opcao == 'finalizar-pedido'){
                 window.location.href = atendente + msgpadrao;
            }
            

            
        
        }
                    
            
    });
});
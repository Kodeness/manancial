let opcaoescolhidagl = '';

let keys = null;
let keysSemUltimos = null;
let randomIndex = null;
let randomKey = null;
let randomItem = null;
 

const especialidades = {
    'petitgateau': {
        whatsapp: 'um Petit Gateau',
        imagem: 'img/foods/petit.webp',
        nome: 'Petit Gateau',
        descricao: 'Bolo de chocolate quente e cremoso por dentro, servido com sorvete artesanal. Excelente para qualquer fome ou ocasião.',
        preco: 'R$ 18,00'
    },
    'sundae': {
        whatsapp: 'um Sundae',
        imagem: 'img/foods/sundae.webp',
        nome: 'Sundae',
        descricao: 'Uma explosão de cremosidade e frescor a cada colherada, trazendo aquela doçura que conforta e faz você sorrir.',
        preco: 'R$ 12,00'
        
    },
    'bananasplit': {
        whatsapp: 'uma Banana Split',
        imagem: 'img/foods/bananasplit.webp',
        nome: 'Banana Split',
        descricao: 'Banana, sorvete geladinho e aquele mix de sabores que explode na boca — a pedida perfeita pra refrescar e adoçar seu dia.',
        preco: 'R$ 16,00'
    },
    'milkshaketradicional': {
        whatsapp: 'um Milk Shake Tradicional',
        imagem: 'img/foods/milkshake.webp',
        nome: 'Milk Shake Tradicional',
        descricao: 'Cremoso, geladinho e feito na medida certa, aquele clássico que traz sabor nostálgico e refrescância para qualquer hora do dia.',
        preco: 'R$ 16,00'
    },
    'milkshakegourmet': {
        whatsapp: 'um Milk Shake Gourmet',
        imagem: 'img/foods/milkshake-gourmet.webp',
        nome: 'Milk Shake Gourmet',
        descricao: 'Com ingredientes super premium que elevam o clássico a um novo patamar de sabor e cremosidade.',
        preco: 'R$ 22,00'
    },
    'tacasensacao': {
        whatsapp: 'uma Taça Sensação',
        imagem: 'img/foods/tacasensacao.webp',
        nome: 'Taça Sensação',
        descricao: 'Camadas generosas de sabor e frescor que se encontram em uma experiência inesquecível — a escolha perfeita para quem quer se deliciar sem moderação.',
        preco: 'R$ 21,90'
    },
    'bolonataca': {
        whatsapp: 'um Bolo na Taça',
        imagem: 'img/foods/bolonataca.webp',
        nome: 'Bolo na Taça',
        descricao: 'Perfeito para qualquer hora, uma delícia que une camadas macias e cremosas, tornando seu sabor ainda mais especial.',
        preco: 'R$ 15,90'
    },
    'brownie': {
        whatsapp: 'um Brownie',
        imagem: 'img/foods/brownie.webp',
        nome: 'Brownie',
        descricao: 'Intensamente macio, com sabor marcante, uma delícia irresistível que derrete na boca.',
        preco: 'R$ 11,90'
    },
    'acai': {
        whatsapp: 'um Açai',
        imagem: 'img/foods/acai.webp',
        nome: 'Açai',
        descricao: 'Refrescante, cremoso e saudável, uma combinação perfeita de sabor autêntico e textura cremosa que revitaliza seu dia.',
        preco: ''
    },
    'acresc': {
        whatsapp: 'um Acrescimo',
        imagem: '',
        nome: 'Acrescimo',
        descricao: 'Quer turbinar o seu pedido? Escolha um acrescimo.',
        preco: ''
    }
};

const lanches = {
    'coxinha': {
        whatsapp: 'uma Coxinha',
        imagem: 'img/foods/coxinhas.webp',
        nome: 'Coxinha',
        descricao: 'Nossa coxinha é preparada com massa leve e crocante, recheada generosamente e temperada ao ponto.',
        preco: 'R$ 7,00'
    },
    'empada': {
        whatsapp: 'uma Empada',
        imagem: 'img/foods/empadas.webp',
        nome: 'Empada',
        descricao: 'Massa leve e macia que derrete na boca, recheada com ingredientes frescos e saborosos, simplesmente perfeita.',
        preco: 'R$ 7,00'
    },
    'tortinha': {
        whatsapp: 'uma Tortinha',
        imagem: 'img/foods/tortinhafrango.webp',
        nome: 'Tortinha',
        descricao: 'Massa leve e dourada com recheio suculento de frango temperado, ideal para matar aquela fome a qualquer hora.',
        preco: 'R$ 9,00'
    },
    'chicagopizza': {
        whatsapp: 'uma Chicago Pizza',
        imagem: 'img/foods/chicagopizza.webp',
        nome: 'Chicago Pizza',
        descricao: 'Massa grossa e crocante, recheada com queijo generoso, molho saboroso e ingredientes fresquinhos.',
        preco: 'R$ 15,00'
    },
    'pastel': {
        whatsapp: 'um Pastel',
        imagem: 'img/foods/pasteis.webp',
        nome: 'Pastel',
        descricao: 'Massa macia e levemente dourada, recheio caprichado e sabor artesanal.',
        preco: 'R$ 7,00'
    },
    'esfirra': {
        whatsapp: 'uma Esfirra',
        imagem: 'img/foods/esfirras.webp',
        nome: 'Esfirra',
        descricao: 'Massa leve e dourada, recheio suculento e temperado, um sabor tradicional em cada mordida.',
        preco: 'R$ 7,00'
    },
    'minipizza': {
        whatsapp: 'uma Mini Pizza',
        imagem: 'img/foods/minipizza.webp',
        nome: 'Mini Pizza',
        descricao: 'Massa crocante na medida certa, coberta com molho saboroso e ingredientes frescos.',
        preco: 'R$ 12,00'
    }
};

const bebidas = {
    'vitaminaacai': {
        whatsapp: 'uma Vitamina de Açai',
        imagem: 'img/foods/vitaminaacai.webp',
        nome: 'Vitamina de Açai',
        descricao: 'Cremosa e refrescante, feita com açaí e ingredientes naturais, perfeita para dar energia e sabor ao seu dia.',
        preco: '400 ml R$ 15,00'
    },
    'vitaminafruta': {
        whatsapp: 'uma Vitamina de Fruta',
        imagem: 'img/foods/vitamina.webp',
        nome: 'Vitamina de Fruta',
        descricao: 'Vitaminas de frutas frescas e deliciosas, cheias de sabor, refresca e nutri o seu dia.',
        preco: '400 ml R$ 8,00'
    },
    'suconatural': {
        whatsapp: 'um Suco Natural',
        imagem: 'img/foods/suconatural.webp',
        nome: 'Suco Natural',
        descricao: 'Sucos fresquinhos feitos com frutas selecionadas, 100% naturais.',
        preco: 'R$ 6,00'
    },
    'refrilata': {
        whatsapp: 'um Refrigerante Lata',
        imagem: 'img/foods/cocaspritefanta.webp',
        nome: 'Refrigerante Lata',
        descricao: 'Variedade de refrigerantes geladinhos para acompanhar seu lanche.',
        preco: '350 ml R$ 6,00'
    },
    'refrimini': {
        whatsapp: 'um Refrigerante Mini',
        imagem: 'img/foods/minirefri.webp',
        nome: 'Refrigerante Mini',
        descricao: 'Sabor refrescante na medida certa para dar um upgrade saboroso ao seu pedido.',
        preco: '200 ml R$ 3,00'
    },
    'agua': {
        whatsapp: 'uma Água',
        imagem: 'img/foods/agua.webp',
        nome: 'Água',
        descricao: 'Simples, leve e sempre geladinha. A escolha certa para matar a sede com equilíbrio.',
        preco: '500 ml R$ 3,00'
    }
};


document.querySelectorAll("a").forEach(function(link) {
    link.addEventListener("click", function(event) {

        if (this.className == 'c-menu-item' || this.id == 'cred' || this.id== 'logo' || this.id == 'fecharredirectok' ) {
            
            if (this.id == 'logo' || this.id == 'fecharredirectok') { 
                if (this.id == 'logo'){
                    location.reload();          
                } else if (this.id == 'fecharredirectok') {
                    document.getElementById("redirectok").classList.remove("fade-in");
                    document.getElementById("redirectok").classList.add("fade-out");
                     
                };
                
            } else{

                let outrasacoes =  this.id;
 
                gtag('event', outrasacoes, {
                    'event_category': 'Outras ações',
                    'event_label': outrasacoes,
                    'value': 1
                });
            }
            

        } else{
            event.preventDefault();

            document.getElementById("cardapio").classList.remove("fade-in");
            document.getElementById("cardapio").classList.add("fade-out");
            document.getElementById("cardapio").style.display = "none";

            document.getElementById("confirmar-pedido").classList.remove("fade-out");
            document.getElementById("confirmar-pedido").classList.add("fade-in");
            document.getElementById("confirmar-pedido").style.display = "block";

          



            const opcao = this.id;

            
        
         
            
            function sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }

            const barraprogresso = document.getElementById("progresso-barra");
            const barraprogressotamanho = barraprogresso.offsetWidth;
            const progresso = document.getElementById("progresso");

            let progressotamaho = progresso.offsetWidth;

            

            async function processarComEspera(valor,valormaximo,el) {
                
                try {
                    qtdPorLoop =  (valormaximo - valor)/5;
                    

                    while(valor <= valormaximo){
                        
                        valor = el.offsetWidth;
                        
                        await sleep(1000);
                        
                        valor += qtdPorLoop;
                      
                        if (valor > valormaximo){
                            valor = valormaximo;
                            
                        } 

                        el.style.width = valor + 'px';

                        if (valor == valormaximo){

                            el.style.width = '0px';
                            return true;
                        }

                    }

                    
                } catch (error) {
                    return false;
                }
 
            }
            
 

         

            const rndatendente = Math.floor(Math.random() * 2) + 1;

            let atendente = 'https://api.whatsapp.com/send?phone=5533988236674&text=';
            
            if(rndatendente == 1){
                atendente = 'https://api.whatsapp.com/send?phone=5533988236674&text=';
                        
            } else {
                atendente = 'https://api.whatsapp.com/send?phone=5533999222623&text=';
            };


           
            let opcaoescolhida = opcao;

            async function wpp() {
                let carregamento = false;

                carregamento = await processarComEspera(progressotamaho, barraprogressotamanho, progresso);
                
                if(carregamento){
                    document.getElementById("confirmar-pedido").classList.remove("fade-in");
                    document.getElementById("confirmar-pedido").classList.add("fade-out");
                    document.getElementById("confirmar-pedido").style.display = "none";

                    document.getElementById("cardapio").classList.remove("fade-out");
                    document.getElementById("cardapio").classList.add("fade-in");
                    document.getElementById("cardapio").style.display = "block"; 


                    document.getElementById("redirectok").classList.remove("fade-out");
                    document.getElementById("redirectok").classList.add("fade-in");
                    document.getElementById("redirectok").style.display = "flex"; 


                    window.location.href = atendente + msgpadrao;
                     
                };
                   
            };

            wpp();

            


            if (especialidades.hasOwnProperty(opcao)) {

                opcaoescolhida = especialidades[opcao].whatsapp;
                opcaoescolhidagl = opcaoescolhida;

                document.getElementById("lanche-salgado").style.display = "none";
                document.getElementById("lanche-especialidade").classList.add("fade-in-ad");
                document.getElementById("lanche-especialidade").style.display = "block";


            } else {

                if (lanches.hasOwnProperty(opcao) || bebidas.hasOwnProperty(opcao)) {

                    

                  

                    if (lanches.hasOwnProperty(opcao)){

                        opcaoescolhida = lanches[opcao].whatsapp;
                        opcaoescolhidagl = opcaoescolhida;
                        
                        keys = Object.keys(bebidas);
                      
                        randomIndex = Math.floor(Math.random() * keys.length);
                        randomKey = keys[randomIndex];
                        randomItem = bebidas[randomKey];


                    } else if (bebidas.hasOwnProperty(opcao)) {
                        opcaoescolhida = bebidas[opcao].whatsapp;
                        opcaoescolhidagl = opcaoescolhida;

                        keys = Object.keys(lanches);
                        keysSemUltimos = keys.slice(0, -2);
                        randomIndex = Math.floor(Math.random() * keysSemUltimos.length);
                        randomKey = keysSemUltimos[randomIndex];
                        randomItem = lanches[randomKey];
                    };


                    

                    gtag('event', opcaoescolhida, {
                        'event_category': 'Opção Escolhida',
                        'event_label': opcaoescolhidagl,
                        'value': 1
                    });

                    document.getElementById("lanche-especialidade").style.display = "none";
                    document.getElementById("lanche-salgado").classList.add("fade-in-ad");
                    document.getElementById("lanche-salgado").style.display = "block";

                    document.getElementById("img-pedido-f").style.backgroundImage =  `url('${randomItem.imagem}')`;
                    document.getElementById("nome-pedido-f").textContent = randomItem.nome;
                    document.getElementById("preco-pedido-f").textContent = randomItem.preco;
                    document.getElementById("descricao-pedido-f").textContent = randomItem.descricao;
                    
                    

                } };
               
            
                let msgpadrao = 'Olá vim do cardápio online, gostaria de pedir ' + opcaoescolhidagl + '.';
                

                if (opcao == 'finalizar-pedido'){
                    window.location.href = atendente + msgpadrao + ' Gostaria de acrescentar também  ' + randomItem.whatsapp + '.';
                } else if (opcao == 'finalizar-pedido-acresc'){
                    window.location.href = atendente + msgpadrao + ' Gostaria de pedir acrescimos também.';
                }
            

            };
  
        
        }
                    
            
    )});
 


JSON

Criamos o objeto
    pasta model
            produto.ts
Criamos a pasta json
        dentro da pasta json
                criamos o arquivo produto.json
                no produto.json
                    criamos dois produtos
                    {
    "produto": [
        { "id": 1,
         "nome":"mouse", 
         "preco": 100,
         "imagem":"https://www.logitech.com/content/dam/logitech/en/products/mice/m190-wireless-mouse/m190-wireless-mouse-blue-gallery-01.png"
         },
         { "id": 2,
            "nome":"computado", 
            "preco": 2000,
            "imagem":"https://a-static.mlcdn.com.br/618x463/kit-computador-desktop-dell-vostro-3681-m20m-10a-geracao-intel-core-i5-8gb-1tb-windows-10-monitor-21/dell/v3681w209w1/dede26e9bf2c75467333e9201ea2d6d1.jpg"
            }
        
    ]
}


Fazer a instalação do JSON-SERVER no meu projeto

vamos criar o componente produto

no terminal
ionic generate page produto

var barraAltura, barraLargura, jogadorPosicaoX;
        
function inicializar()
{	
	velocidadeJogador = 20;
    barraAltura = 15;
    barraLargura = 90;

    jogadorPosicaoX =  (canvas.width - barraLargura) / 2;

    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");

    context.fillRect(jogadorPosicaoX, canvas.height - barraAltura, barraLargura, barraAltura);
    document.addEventListener('keydown', keyDown);
}
function keyDown(e) 
{
    if(e.keyCode == 37)
    {
        jogadorPosicaoX -= velocidadeJogador;
    }
                
    if(e.keyCode == 39)
    {
        jogadorPosicaoX += velocidadeJogador;
    }

    context.fillRect(jogadorPosicaoX, canvas.height - barraAltura, barraLargura, barraAltura);
}
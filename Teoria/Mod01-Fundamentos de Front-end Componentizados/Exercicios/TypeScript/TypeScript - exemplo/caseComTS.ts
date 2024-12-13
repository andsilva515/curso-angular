type Hero = {
    nome: string;
    vulgo: string;
    telefone: number;
};

function ligarPara(heroi: Hero): string {
   return "ligando para :" + heroi.telefone;
}

ligarPara({
    nome: "felipe",
    vulgo: "Capitão America",
    telefone: 1131713388,
});

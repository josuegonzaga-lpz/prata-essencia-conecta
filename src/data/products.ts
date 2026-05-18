import watchGoldFem from "@/assets/watch-gold-fem.jpg";
import watchSilverFem from "@/assets/watch-silver-fem.jpg";
import watchBrownMasc from "@/assets/watch-brown-masc.jpg";

import aneis from "@/assets/cat-aneis.jpg";
import correntes from "@/assets/cat-correntes.jpg";
import brincos from "@/assets/cat-brincos.jpg";
import pulseiras from "@/assets/cat-pulseiras.jpg";
import pingentes from "@/assets/cat-pingentes.jpg";
import chocker from "@/assets/cat-chocker.jpg";
import berloques from "@/assets/cat-berloques.jpg";
import bracelete from "@/assets/cat-bracelete.jpg";
import solitario from "@/assets/cat-solitario.jpg";

export type Status = "disponivel" | "esgotado" | "em_breve";
export type Categoria = "relogios" | "estoque" | "em_breve";

export type Product = {
  id: string;
  nome: string;
  codigo?: string;
  preco: number;
  imagem: string;
  categoria: Categoria;
  status: Status;
  estoque?: number;
  destaque?: string; // e.g. "Saint-Germain"
  generoMasc?: boolean;
};

export const PRODUCTS: Product[] = [
  // ===== RELÓGIOS Saint-Germain =====
  {
    id: "w1",
    nome: "Relógio Feminino Dourado",
    destaque: "Saint-Germain",
    preco: 209.9,
    imagem: watchGoldFem,
    categoria: "relogios",
    status: "disponivel",
    estoque: 2,
  },
  {
    id: "w2",
    nome: "Relógio Feminino Prata",
    destaque: "Saint-Germain",
    preco: 189.9,
    imagem: watchSilverFem,
    categoria: "relogios",
    status: "esgotado",
  },
  {
    id: "w3",
    nome: "Relógio Masculino Couro Marrom",
    destaque: "Saint-Germain",
    preco: 189.9,
    imagem: watchBrownMasc,
    categoria: "relogios",
    status: "disponivel",
    estoque: 2,
    generoMasc: true,
  },

  // ===== EM ESTOQUE =====
  { id: "s1",  nome: "Pulseira na Renda Italiana 2.6mm", codigo: "PF85",    preco: 189.9, imagem: pulseiras, categoria: "estoque", status: "disponivel" },
  { id: "s2",  nome: "Escapulário Estrela de Davi 60cm na Corrente Cartier", codigo: "CX19", preco: 249.9, imagem: pingentes, categoria: "estoque", status: "disponivel" },
  { id: "s3",  nome: "Conjunto Corrente + Cruz",         codigo: "H17",     preco: 279.9, imagem: correntes, categoria: "estoque", status: "disponivel" },
  { id: "s4",  nome: "Pulseira Placa com Detalhe",       codigo: "HE1501",  preco: 219.9, imagem: pulseiras, categoria: "estoque", status: "disponivel" },
  { id: "s5",  nome: "Escapulário Estrela de Davi",      codigo: "P3162",   preco: 219.9, imagem: pingentes, categoria: "estoque", status: "disponivel" },
  { id: "s6",  nome: "Anel Solitário",                   codigo: "ANLSR78 (N14)", preco: 99.9,  imagem: solitario, categoria: "estoque", status: "disponivel" },
  { id: "s7",  nome: "Pulseira Infantil Zircônia Rosa e Azul", codigo: "PI16", preco: 89.9, imagem: pulseiras, categoria: "estoque", status: "disponivel" },
  { id: "s8",  nome: "Pulseira Árvore da Vida",          codigo: "PUP0184", preco: 159.9, imagem: pulseiras, categoria: "estoque", status: "disponivel" },
  { id: "s9",  nome: "Escapulário Árvore da Vida com Coração", codigo: "ESP0016", preco: 279.9, imagem: pingentes, categoria: "estoque", status: "disponivel" },

  // ===== EM BREVE =====
  { id: "b1",  nome: "Conjunto Flor com Detalhes",       codigo: "CJ867",   preco: 0, imagem: correntes, categoria: "em_breve", status: "em_breve" },
  { id: "b2",  nome: "Anel Todo com Detalhes",           codigo: "AN4796",  preco: 0, imagem: aneis,     categoria: "em_breve", status: "em_breve" },
  { id: "b3",  nome: "Corrente Veneziana V12 45cm",      codigo: "COLL125", preco: 0, imagem: correntes, categoria: "em_breve", status: "em_breve" },
  { id: "b4",  nome: "Berloques de Time (Palmeiras)",    codigo: "BL4484",  preco: 0, imagem: berloques, categoria: "em_breve", status: "em_breve" },
  { id: "b5",  nome: "Brinco Florzinha Infantil Prata 925", preco: 0, imagem: brincos, categoria: "em_breve", status: "em_breve" },
  { id: "b6",  nome: "Pulseira Prata 925 Piastrine 1.5mm",  preco: 0, imagem: pulseiras, categoria: "em_breve", status: "em_breve" },
  { id: "b7",  nome: "Pulseira Prata 925 Singapura 18cm",   preco: 0, imagem: pulseiras, categoria: "em_breve", status: "em_breve" },
  { id: "b8",  nome: "Pulseira Masculina Veneziana Longa 1.8mm", preco: 0, imagem: bracelete, categoria: "em_breve", status: "em_breve", generoMasc: true },
  { id: "b9",  nome: "Pulseira Feminina Rabo de Sereia Pendente", preco: 0, imagem: pulseiras, categoria: "em_breve", status: "em_breve" },
  { id: "b10", nome: "Pulseira Feminina Cruz e Pai Nosso", preco: 0, imagem: pulseiras, categoria: "em_breve", status: "em_breve" },
  { id: "b11", nome: "Pulseira Masculina Grumet Maciça 3mm", preco: 0, imagem: bracelete, categoria: "em_breve", status: "em_breve", generoMasc: true },
];

// Compatibility for legacy Categories component
export const CATEGORIES = [
  { slug: "relogios",  label: "Relógios Saint-Germain", image: watchGoldFem },
  { slug: "pulseiras", label: "Pulseiras",     image: pulseiras },
  { slug: "aneis",     label: "Anéis",         image: aneis },
  { slug: "correntes", label: "Correntes",     image: correntes },
  { slug: "escapularios", label: "Escapulários", image: pingentes },
  { slug: "brincos",   label: "Brincos",       image: brincos },
] as const;

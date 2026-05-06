import aneis from "@/assets/cat-aneis.jpg";
import correntes from "@/assets/cat-correntes.jpg";
import brincos from "@/assets/cat-brincos.jpg";
import pulseiras from "@/assets/cat-pulseiras.jpg";
import pingentes from "@/assets/cat-pingentes.jpg";
import aliancas from "@/assets/cat-aliancas.jpg";
import chocker from "@/assets/cat-chocker.jpg";
import berloques from "@/assets/cat-berloques.jpg";
import bracelete from "@/assets/cat-bracelete.jpg";
import solitario from "@/assets/cat-solitario.jpg";

export type Category =
  | "aneis"
  | "solitario"
  | "aliancas"
  | "correntes-masc"
  | "colares-fem"
  | "chockers"
  | "brincos"
  | "pulseiras-fem"
  | "pulseiras-masc"
  | "braceletes"
  | "pingentes"
  | "berloques";

export type Product = {
  id: string;
  nome: string;
  preco: number;
  imagem: string;
  categoria: Category;
  badge?: "lancamento" | "mais-vendido";
};

export const CATEGORIES: { slug: Category; label: string; image: string }[] = [
  { slug: "aneis", label: "Anéis", image: aneis },
  { slug: "solitario", label: "Anel Solitário", image: solitario },
  { slug: "aliancas", label: "Alianças", image: aliancas },
  { slug: "correntes-masc", label: "Correntes Masculinas", image: correntes },
  { slug: "colares-fem", label: "Colares Femininos", image: pingentes },
  { slug: "chockers", label: "Chockers", image: chocker },
  { slug: "brincos", label: "Brincos", image: brincos },
  { slug: "pulseiras-fem", label: "Pulseiras Femininas", image: pulseiras },
  { slug: "pulseiras-masc", label: "Pulseiras Masculinas", image: bracelete },
  { slug: "braceletes", label: "Braceletes", image: bracelete },
  { slug: "pingentes", label: "Pingentes", image: pingentes },
  { slug: "berloques", label: "Berloques", image: berloques },
];

export const PRODUCTS: Product[] = [
  { id: "p1",  nome: "Anel Solitário Brilho Eterno", preco: 189.9, imagem: solitario,  categoria: "solitario", badge: "mais-vendido" },
  { id: "p2",  nome: "Aliança Trabalhada Compromisso", preco: 349.0, imagem: aliancas, categoria: "aliancas", badge: "mais-vendido" },
  { id: "p3",  nome: "Corrente Cubana Masculina 60cm", preco: 459.0, imagem: bracelete, categoria: "correntes-masc", badge: "lancamento" },
  { id: "p4",  nome: "Pingente Coração Liso", preco: 119.9, imagem: pingentes, categoria: "pingentes" },
  { id: "p5",  nome: "Brincos Argola Cravejada", preco: 159.9, imagem: brincos, categoria: "brincos", badge: "mais-vendido" },
  { id: "p6",  nome: "Mix de Pulseiras Delicadas", preco: 209.9, imagem: pulseiras, categoria: "pulseiras-fem", badge: "lancamento" },
  { id: "p7",  nome: "Chocker Veludo & Prata", preco: 139.9, imagem: chocker, categoria: "chockers" },
  { id: "p8",  nome: "Bracelete Groumet Pesado", preco: 389.0, imagem: bracelete, categoria: "braceletes", badge: "mais-vendido" },
  { id: "p9",  nome: "Pulseira Masculina Lisa", preco: 229.9, imagem: bracelete, categoria: "pulseiras-masc" },
  { id: "p10", nome: "Berloque Cruz Reino", preco: 79.9, imagem: berloques, categoria: "berloques", badge: "lancamento" },
  { id: "p11", nome: "Colar Ponto de Luz", preco: 169.9, imagem: pingentes, categoria: "colares-fem" },
  { id: "p12", nome: "Anel Aparador Delicado", preco: 99.9, imagem: aneis, categoria: "aneis" },
];

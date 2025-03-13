"use client";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Promociones", href: "/Promociones/" },
  { name: "Tecnologías" },
  { name: "Financiamiento" },
  { name: "FordPass®" },
  { name: "Iniciar Sesión"},
];

export default function Header() {
  return (
    <header>
      <span>Header</span>
      {navigation.map((link) => (
              link.href ? (
                <a href={link.href}>{link.name}</a>                
              ) : (
                <a >{link.name}</a>
              )
            ))}
    </header>
  );
}

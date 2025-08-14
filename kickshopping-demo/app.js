// Productos demo
const products = [
  { id:1, name:"Sudadera beige", cat:"ropa de hombre", img:"https://images.unsplash.com/photo-1602810311514-4be3b7e4c2d6?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=000000" },
  { id:2, name:"Camiseta negra", cat:"ropa de hombre", img:"https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=000000" },
  { id:3, name:"Shorts black", cat:"ropa de hombre", img:"https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=000000" },
  { id:4, name:"Top deportivo", cat:"ropa de mujer", img:"https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80" },
  { id:5, name:"Camiseta blanca", cat:"ropa de mujer", img:"https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=000000" },
  { id:6, name:"Shorts mujer", cat:"ropa de mujer", img:"https://images.unsplash.com/photo-1543163521-1bf539c55d0e?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=000000" }
];

function createCard(p) {
  const card = document.createElement('article');
  card.className = 'card';
  card.innerHTML = `
    <img src="${p.img}" alt="${p.name}" />
    <div class="meta">
      <div class="name">${p.name}</div>
      <div class="cat">${p.cat}</div>
    </div>
  `;
  return card;
}

window.addEventListener('DOMContentLoaded', () => {
  const gridHombre = document.getElementById('productGridHombre');
  const gridMujer = document.getElementById('productGridMujer');
  const countLabelHombre = document.getElementById('countLabelHombre');
  const countLabelMujer = document.getElementById('countLabelMujer');

  // Hombre
  const productosHombre = products.filter(p => p.cat === 'ropa de hombre');
  gridHombre.innerHTML = '';
  productosHombre.forEach(p => gridHombre.appendChild(createCard(p)));
  countLabelHombre.textContent = `Mostrando ${productosHombre.length} productos`;

  // Mujer
  const productosMujer = products.filter(p => p.cat === 'ropa de mujer');
  gridMujer.innerHTML = '';
  productosMujer.forEach(p => gridMujer.appendChild(createCard(p)));
  countLabelMujer.textContent = `Mostrando ${productosMujer.length} productos`;
});

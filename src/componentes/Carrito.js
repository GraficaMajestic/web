// Carrito.jsx
import React, { useState, useEffect } from 'react';
import '../estilos/Carrito.css';
import { jsPDF } from 'jspdf';

function Carrito({ cart = [], setCart, total, setTotal }) {
  const initialCustomerInfo = {
    nombre: '',
    descripcion: '',
    metodoPago: ''
  };

  const [customerInfo, setCustomerInfo] = useState(initialCustomerInfo);

  // Asegurar que total en el estado padre esté sincronizado si el componente se monta con cart existente
  useEffect(() => {
    recalcTotal(cart);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // solo al montar

  const handleCustomerChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentChange = (e) => {
    setCustomerInfo((prev) => ({ ...prev, metodoPago: e.target.value }));
  };

  const recalcTotal = (newCart) => {
    const newTotal = newCart.reduce((acc, item) => {
      const qty = Number(item.cantidad || 1);
      const price = Number(item.price || 0);
      return acc + qty * price;
    }, 0);
    setTotal(Number(newTotal.toFixed(2)));
  };

  const updateQuantity = (index, delta) => {
    const newCart = cart.map((item, i) => {
      if (i !== index) return item;
      const nuevaCantidad = Math.max(0, (Number(item.cantidad || 1) + delta));
      return { ...item, cantidad: nuevaCantidad };
    }).filter(it => it.cantidad > 0); // eliminamos items con 0 cantidad (opcional)
    setCart(newCart);
    recalcTotal(newCart);
  };

  const removeItem = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
    recalcTotal(newCart);
  };

  const generarPDF = () => {
    if (!cart || cart.length === 0) {
      alert('El carrito está vacío. Agrega productos antes de generar la orden.');
      return;
    }

    const doc = new jsPDF();

    // Título
    doc.setFontSize(20);
    doc.setTextColor(75, 0, 130);
    doc.text('Detalle de la Compra', 105, 18, { align: 'center' });

    // Datos cliente
    doc.setFontSize(12);
    doc.setTextColor(60, 60, 60);
    doc.text(`Nombre: ${customerInfo.nombre || '-'}`, 14, 36);
    doc.text(`Descripción: ${customerInfo.descripcion || '-'}`, 14, 44);
    doc.text(`Método de Pago: ${customerInfo.metodoPago || '-'}`, 14, 52);

    // Separador
    doc.setDrawColor(220);
    doc.setLineWidth(0.4);
    doc.line(14, 58, 196, 58);

    // Productos
    doc.setFontSize(13);
    doc.text('Productos:', 14, 68);

    doc.setFontSize(11);
    cart.forEach((item, idx) => {
      const y = 78 + idx * 8;
      const nombre = item.name || 'Producto';
      const cantidad = Number(item.cantidad || 1);
      const linePrice = (Number(item.price || 0) * cantidad).toFixed(2);
      // Si se salta la página, añadir lógica de paginado sencillo
      if (y > 280) {
        doc.addPage();
        doc.setFontSize(11);
      }
      doc.text(`${idx + 1}. ${nombre} (x${cantidad}) — S/${linePrice}`, 14, y);
    });

    // Total
    const totalY = 78 + cart.length * 8 + 10;
    doc.setFontSize(13);
    doc.setTextColor(40, 40, 40);
    doc.text(`Total a Pagar: S/${Number(total || 0).toFixed(2)}`, 14, totalY);

    // Guardar PDF
    doc.save('detalle_compra.pdf');

    // Limpiar carrito y formulario
    setCart([]);
    setTotal(0);
    setCustomerInfo(initialCustomerInfo);
  };

  return (
    <div className="carrito">
      <h2>Carrito de Compras</h2>

      {(!cart || cart.length === 0) ? (
        <p style={{ textAlign: 'center', color: '#777' }}>Tu carrito está vacío.</p>
      ) : (
        <ul>
          {cart.map((item, index) => {
            const nombre = item.name || 'Producto';
            const descripcion = item.description || item.descripcion || '';
            const cantidad = Number(item.cantidad || 1);
            const precioUnit = Number(item.price || 0);
            const subtotal = (cantidad * precioUnit).toFixed(2);

            return (
              <li key={index}>
                <div style={{ flex: '1 1 60%', minWidth: '200px' }}>
                  <strong style={{ display: 'block' }}>{nombre}</strong>
                  {descripcion && <small style={{ display: 'block', color: '#666' }}>{descripcion}</small>}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <button onClick={() => updateQuantity(index, -1)} aria-label="disminuir">-</button>
                    <span style={{ minWidth: '26px', textAlign: 'center' }}>{cantidad}</span>
                    <button onClick={() => updateQuantity(index, +1)} aria-label="aumentar">+</button>
                  </div>

                  <div style={{ minWidth: '110px', textAlign: 'right' }}>
                    <div style={{ fontWeight: 700 }}>S/{subtotal}</div>
                    <div style={{ fontSize: '12px', color: '#777' }}>S/{precioUnit.toFixed(2)} c/u</div>
                  </div>

                  <div>
                    <button onClick={() => removeItem(index)}>Eliminar</button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      <h3 className="total-text">Total: S/{Number(total || 0).toFixed(2)}</h3>

      <div className="formulario">
        <h2>Completa tus Datos</h2>

        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={customerInfo.nombre}
            onChange={handleCustomerChange}
            placeholder="Tu nombre"
          />
        </label>

        <label>
          Descripcion:
          <input
            type="text"
            name="descripcion"
            value={customerInfo.descripcion}
            onChange={handleCustomerChange}
            placeholder="Comentarios / referencia"
          />
        </label>

        <div className="metodos-pago">
          <label>
            <input
              type="radio"
              name="metodoPago"
              value="Efectivo"
              checked={customerInfo.metodoPago === 'Efectivo'}
              onChange={handlePaymentChange}
            />
            Efectivo
          </label>

          <label>
            <input
              type="radio"
              name="metodoPago"
              value="Yape"
              checked={customerInfo.metodoPago === 'Yape'}
              onChange={handlePaymentChange}
            />
            Yape
          </label>

          <label>
            <input
              type="radio"
              name="metodoPago"
              value="Transferencia"
              checked={customerInfo.metodoPago === 'Transferencia'}
              onChange={handlePaymentChange}
            />
            Transferencia
          </label>
        </div>

        <button onClick={generarPDF} disabled={!cart || cart.length === 0}>Generar Orden en PDF</button>
      </div>
    </div>
  );
}

export default Carrito;

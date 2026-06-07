import React, { useState } from 'react';
import { ShoppingCart, Trash2, ShieldCheck, Tag, Plus, Minus, CreditCard, Sparkles, X, Check } from 'lucide-react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  qty: number;
  color: string;
}

export default function NextCartSandbox() {
  const [cart, setCart] = useState<CartItem[]>([
    { id: '1', name: 'Neural Accelerator Core', price: 149.99, qty: 1, color: 'text-cyan-400 border-cyan-500/15' },
  ]);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [orderFulfilled, setOrderFulfilled] = useState(false);

  const checkoutProducts = [
    { id: '1', name: 'Neural Accelerator Core', description: 'Real-time AI compute engine optimized for embedded Edge modules.', price: 149.99, color: 'text-cyan-400 bg-cyan-950/20' },
    { id: '2', name: 'Sleek Coder Board V1', description: 'Vapor-wave retro mechanical programming keyboard.', price: 89.99, color: 'text-purple-400 bg-purple-950/20' },
    { id: '3', name: 'Ambient Micro-LED', description: 'Applet visualizers with responsive rhythm adapters.', price: 39.99, color: 'text-emerald-400 bg-emerald-950/20' }
  ];

  const addToCart = (product: typeof checkoutProducts[0]) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item));
    } else {
      setCart([...cart, { id: product.id, name: product.name, price: product.price, qty: 1, color: product.color }]);
    }
  };

  const updateQty = (id: string, delta: number) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        const newQty = item.qty + delta;
        return newQty > 0 ? { ...item, qty: newQty } : item;
      }
      return item;
    }).filter(item => item.qty > 0));
  };

  const removeItem = (id: string) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const discount = discountApplied ? subtotal * 0.15 : 0;
  const delivery = subtotal > 150 ? 0 : 9.99;
  const total = subtotal - discount + delivery;

  const handleApplyPromo = () => {
    if (promoCode.toUpperCase() === 'RAJAN15') {
      setDiscountApplied(true);
    } else {
      alert('Invalid Promo code. Use "RAJAN15" for 15% discount!');
    }
  };

  const triggerMockPayment = () => {
    setOrderFulfilled(true);
    setTimeout(() => {
      setIsCheckoutOpen(false);
      setCart([]);
      setOrderFulfilled(false);
      setDiscountApplied(false);
      setPromoCode('');
    }, 2800);
  };

  return (
    <div id="nextcart-simulation" className="glass-panel rounded-2xl border border-white/10 overflow-hidden shadow-2xl bg-slate-950/20">
      {/* Header */}
      <div className="p-5 border-b border-white/5 bg-gradient-to-r from-purple-950/30 to-slate-900 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="p-2.2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 animate-pulse">
            <ShoppingCart className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold tracking-tight text-white text-base">NextCart Sandboxed Marketplace</h3>
            <p className="text-xs text-slate-400 font-mono">Simulated React client connected to virtual FastAPI endpoints.</p>
          </div>
        </div>
        <div className="text-[10px] font-mono px-2.5 py-1 bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/25">
          Razorpay Sandbox Integrated
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-8">
        {/* Marketplace Shell: Products Grid */}
        <div className="lg:col-span-8 space-y-6">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">Products Catalog</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {checkoutProducts.map((prod) => (
              <div key={prod.id} className="p-5 rounded-xl bg-slate-900 border border-white/5 flex flex-col justify-between hover:border-purple-500/30 transition-all duration-300">
                <div>
                  <div className={`p-2 rounded-lg inline-block text-xs font-bold font-mono ${prod.color} mb-3`}>
                    {prod.id === '1' ? 'AI Hardware' : prod.id === '2' ? 'Peripherals' : 'Ambient Gear'}
                  </div>
                  <h5 className="font-bold text-white text-sm mt-1">{prod.name}</h5>
                  <p className="text-[11px] text-slate-400 mt-1.5 leading-relaxed">{prod.description}</p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-200 font-mono">${prod.price}</span>
                  <button
                    onClick={() => addToCart(prod)}
                    className="p-1 px-2.5 bg-purple-500 hover:bg-purple-400 text-slate-950 rounded-lg text-xs font-bold cursor-pointer transition-colors duration-200 flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Cart & Pricing Calculator */}
        <div className="lg:col-span-4 bg-slate-900/40 border border-white/5 rounded-2xl p-5 flex flex-col justify-between space-y-5">
          <div>
            <div className="flex justify-between items-center border-b border-slate-800 pb-3 mb-4">
              <span className="text-xs font-black uppercase text-slate-400 tracking-wider">Your Shopping Bag</span>
              <span className="px-2 py-0.5 bg-slate-950 text-purple-400 border border-white/5 text-[10px] rounded font-mono font-bold">
                {cart.reduce((a, b) => a + b.qty, 0)} Items
              </span>
            </div>

            {/* Cart products list */}
            {cart.length === 0 ? (
              <div className="py-12 text-center text-slate-500 text-xs">
                Your basket is empty. Select products from catalog above.
              </div>
            ) : (
              <div className="space-y-3.5 max-h-[220px] overflow-y-auto pr-1">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center justify-between gap-2 p-2.5 bg-slate-950/60 rounded-xl border border-white/5">
                    <div>
                      <h6 className="text-xs font-bold text-slate-200 line-clamp-1">{item.name}</h6>
                      <span className="text-[10px] font-mono text-slate-500">${item.price} x {item.qty}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex items-center bg-slate-900 rounded border border-white/5 text-xs font-mono">
                        <button onClick={() => updateQty(item.id, -1)} className="px-1.5 py-0.5 text-slate-400 hover:text-white cursor-pointer"><Minus className="w-3 h-3" /></button>
                        <span className="px-2 text-slate-200">{item.qty}</span>
                        <button onClick={() => updateQty(item.id, 1)} className="px-1.5 py-0.5 text-slate-400 hover:text-white cursor-pointer"><Plus className="w-3 h-3" /></button>
                      </div>
                      <button onClick={() => removeItem(item.id)} className="text-slate-500 hover:text-rose-400 cursor-pointer p-1"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Pricing breakdowns */}
          <div className="border-t border-slate-800 pt-4 space-y-2.5 text-xs">
            <div className="flex justify-between text-slate-450 font-mono text-slate-400">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-slate-450 font-mono text-slate-400 items-center">
              <span className="flex items-center gap-1">
                <Tag className="w-3.5 h-3.5 text-purple-400" />
                Promo Discount
              </span>
              <span className="text-purple-400">-${discount.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-slate-450 font-mono text-slate-400">
              <span>Shipping Fee</span>
              <span>{delivery > 0 ? `$${delivery.toFixed(2)}` : 'FREE'}</span>
            </div>

            {/* Promo Code Input */}
            <div className="flex gap-2 pt-1">
              <input
                type="text"
                placeholder="PROMO: RAJAN15"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                disabled={discountApplied}
                className="w-full bg-slate-950 border border-slate-800 disabled:opacity-40 focus:border-purple-500 rounded-lg px-3 py-1.5 text-[10px] text-slate-200 uppercase outline-none"
              />
              <button
                onClick={handleApplyPromo}
                disabled={discountApplied}
                className="px-2.5 py-1 bg-purple-500/10 border border-purple-500/25 hover:bg-purple-500/25 text-purple-400 rounded-lg text-[10px] font-bold cursor-pointer disabled:opacity-45"
              >
                Apply
              </button>
            </div>

            <div className="border-t border-slate-800 pt-3 flex justify-between items-center text-sm font-bold font-mono">
              <span className="text-slate-200">Bag Total</span>
              <span className="text-white text-base">${total.toFixed(2)}</span>
            </div>

            <button
              onClick={() => cart.length > 0 && setIsCheckoutOpen(true)}
              disabled={cart.length === 0}
              className="w-full mt-3.5 py-3 bg-purple-500 hover:bg-purple-400 disabled:bg-slate-800 disabled:text-slate-500 text-slate-950 font-bold text-xs text-center rounded-xl cursor-pointer duration-200 transition-colors flex items-center justify-center gap-1.5"
            >
              <CreditCard className="w-4.5 h-4.5" />
              Secure Pay with Razorpay
            </button>
          </div>
        </div>
      </div>

      {/* Simulated Razorpay Payment overlay */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-md bg-slate-900 border border-purple-500/20 rounded-2xl p-6 shadow-2xl space-y-5">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-purple-500 rounded-full animate-ping" />
                <h5 className="font-bold text-white text-sm font-mono tracking-tight">RAZORPAY PAYMENT GATEWAY</h5>
              </div>
              <button 
                onClick={() => setIsCheckoutOpen(false)} 
                className="text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {orderFulfilled ? (
              <div className="py-12 text-center space-y-4 animate-fade-in">
                <div className="w-12 h-12 bg-purple-500 text-slate-950 rounded-full flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                  <Check className="w-6 h-6 stroke-[3.5]" />
                </div>
                <div className="space-y-1">
                  <h6 className="font-bold text-white text-sm uppercase tracking-wide">Sandbox Payment Successful</h6>
                  <p className="text-xs text-slate-400">FastAPI backend processed transaction ID: txn_84kdf8sh</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="p-4 bg-slate-950 rounded-xl border border-white/5 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-450 text-slate-450">Merchant Account</span>
                    <span className="font-semibold text-slate-200">NextCart Solutions</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-450">Billing Amount</span>
                    <span className="font-bold text-purple-400 text-sm font-mono">${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Simulated credit card forms */}
                <div className="space-y-3.5 text-xs">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider text-slate-500 font-bold block">Sandbox Credit Card Number</label>
                    <input 
                      type="text" 
                      placeholder="4321 •••• •••• 1223 (Test mode)" 
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-slate-300 outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-wider text-slate-500 font-bold block">Expiration</label>
                      <input 
                        type="text" 
                        placeholder="12/28" 
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-slate-300 outline-none"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-wider text-slate-500 font-bold block">CVV</label>
                      <input 
                        type="password" 
                        placeholder="***" 
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-slate-300 outline-none"
                      />
                    </div>
                  </div>
                </div>

                <button
                  onClick={triggerMockPayment}
                  className="w-full py-3 bg-purple-500 hover:bg-purple-400 text-slate-950 font-bold text-xs text-center rounded-xl cursor-pointer duration-200 transition-colors flex items-center justify-center gap-1.5"
                >
                  <ShieldCheck className="w-4.5 h-4.5" />
                  Authorize Sample Transaction
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

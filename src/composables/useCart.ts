import { ref, computed } from 'vue';

export interface CartItem {
  id: number;
  name: string;
  price: string;
  quantity: number;
  image: string;
}

const cartItems = ref<CartItem[]>([]);

export function useCart() {
  const loadCart = () => {
    const saved = localStorage.getItem('cart');
    if (saved) {
      cartItems.value = JSON.parse(saved);
    }
  };

  const saveCart = () => {
    localStorage.setItem('cart', JSON.stringify(cartItems.value));
  };

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    const existing = cartItems.value.find(i => i.id === item.id);
    
    if (existing) {
      existing.quantity += 1;
    } else {
      cartItems.value.push({ ...item, quantity: 1 });
    }
    
    saveCart();
  };

  const removeFromCart = (id: number) => {
    cartItems.value = cartItems.value.filter(item => item.id !== id);
    saveCart();
  };

  const updateQuantity = (id: number, quantity: number) => {
    const item = cartItems.value.find(item => item.id === id);
    if (item) {
      if (quantity <= 0) {
        removeFromCart(id);
      } else {
        item.quantity = quantity;
        saveCart();
      }
    }
  };

  const clearCart = () => {
    cartItems.value = [];
    localStorage.removeItem('cart');
  };

  const cartTotal = computed(() => {
    return cartItems.value.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', ''));
      return total + (price * item.quantity);
    }, 0);
  });

  const itemCount = computed(() => {
    return cartItems.value.reduce((count, item) => count + item.quantity, 0);
  });

  if (cartItems.value.length === 0) {
    loadCart();
  }

  return {
    cartItems,
    cartTotal,
    itemCount,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  };
}
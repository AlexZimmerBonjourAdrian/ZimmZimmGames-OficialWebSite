/**
 * Utilidades para manejar cookies del wishlist
 */

const WISHLIST_COOKIE_NAME = 'wata_wishlist_enabled';
const COOKIE_EXPIRY_DAYS = 180; // 6 meses

/**
 * Establece una cookie con el estado del wishlist
 * @param enabled - Estado del wishlist (true/false)
 */
export const setWishlistCookie = (enabled: boolean): void => {
  if (typeof window === 'undefined') return; // SSR check
  
  const expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + COOKIE_EXPIRY_DAYS);
  
  const cookieValue = enabled ? 'true' : 'false';
  const cookieString = `${WISHLIST_COOKIE_NAME}=${cookieValue}; expires=${expiryDate.toUTCString()}; path=/; SameSite=Lax`;
  
  document.cookie = cookieString;
};

/**
 * Obtiene el estado del wishlist desde las cookies
 * @returns true si el wishlist está habilitado, false si no
 */
export const getWishlistFromCookie = (): boolean => {
  if (typeof window === 'undefined') return false; // SSR check
  
  const cookies = document.cookie.split(';');
  const wishlistCookie = cookies.find(cookie => 
    cookie.trim().startsWith(`${WISHLIST_COOKIE_NAME}=`)
  );
  
  if (!wishlistCookie) return false;
  
  const value = wishlistCookie.split('=')[1];
  return value === 'true';
};

/**
 * Elimina la cookie del wishlist
 */
export const removeWishlistCookie = (): void => {
  if (typeof window === 'undefined') return; // SSR check
  
  document.cookie = `${WISHLIST_COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};

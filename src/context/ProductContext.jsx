import { createContext, useContext, useState } from 'react';

// Context
const ProductContext = createContext();

// Provider
export const ProductProvider = function ProductProvider({ children }) {
  // States
  const [productId, setProductId] = useState(null);
  const [productData, setProductData] = useState(null);

  // Send States
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <ProductContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        // States
        productId,
        productData,

        // Functions
        setProductId,
        setProductData,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// Export Context
export const useStateProduct = () => {
  // eslint-disable-next-line new-cap
  const context = new useContext(ProductContext);

  if (context === undefined) {
    throw new Error('useStateProduct must be used within a ProductProvider');
  }

  return context;
};

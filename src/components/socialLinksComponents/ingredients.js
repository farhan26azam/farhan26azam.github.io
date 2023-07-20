import image from "../../assets/javascript-logo.png"

export const allIngredients = [
    { icon: image, label: "LinkedIn" },
    { icon: "🥬", label: "GitHub" },
    { icon: "🧀", label: "Cheese" },
    { icon: "🥕", label: "Carrot" },
    { icon: "🍌", label: "Banana" },
    { icon: "🫐", label: "Blueberries" },
    { icon: "🥂", label: "Champers?" }
  ];
  
  const [tomato, lettuce, cheese] = allIngredients;
  export const initialTabs = [tomato, lettuce, cheese];
  
  export function getNextIngredient(ingredients) {
    const existing = new Set(ingredients);
    return allIngredients.find((ingredient) => !existing.has(ingredient));
  }
  
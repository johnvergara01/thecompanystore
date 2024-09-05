export const FindItemId = (id, array) => {
  const result = array.find((obj) => {
    return obj.id === id;
  });
  return result;
};

export const FindItemName = (name, array) => {
    const result = array.find((obj) => {
      return obj.name === name;
    });
    return result;
  };
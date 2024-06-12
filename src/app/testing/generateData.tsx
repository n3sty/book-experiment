interface data {
  id: number;
  name: string;
  description: string;
}
const parent = () => {
  const generateData = ():data => {

    // Generate dummy data
    const item:data = {
      id: 1,
      name: `Item`,
      description: `This is an item description`,
    };

    return item;
  };

  return <>
    generateData()
  </>
}

export default parent;

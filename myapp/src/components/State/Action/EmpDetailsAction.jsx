export const AddEmp = (name, desc, img) => ({
  type: "ADD_EMP",
  empData: {
    name,
    desc,
    img,
  },
});

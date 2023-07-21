export const MESSAGE_MAP = (value) => ({
  required: "This field is required",
  minLength: `This field must be at least ${value} characters`,
  maxLength: `This field must be at most ${value} characters`,
});

export const sortData = (data) => {
  let newData = [];
  if (data) {
    newData = data.sort((a, b) => a.order - b.order);
  }
  return newData;
};

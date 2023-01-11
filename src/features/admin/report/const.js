export const color = (text) => {
  switch (text) {
    case "Finished":
      return "success";
    case "MTC":
      return "danger";
    case "On Progress":
      return "info";
    case "Waiting":
      return "warning";
    case "QC":
      return "warning";
    case "Material":
      return "info";
  }
};

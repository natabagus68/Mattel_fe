export const statusColor = (status) => {
  let color = "";
  switch (status) {
    case "RUN":
      color = "text-green-400";
      break;
    case "QC":
      color = "text-warning";
      break;
    case "Material":
      color = "text-info";
      break;
    case "Maintenance":
      color = "text-danger";
      break;
  }
  return color;
};

export const fontSize = (status) => {
  let size = "";
  switch (status) {
    case "RUN":
      size = "4xl";
      break;
    case "QC":
      size = "4xl";
      break;
    case "Material":
      size = "xl";
      break;
    case "Maintenance":
      size = "base";
      break;
  }
  return size;
};

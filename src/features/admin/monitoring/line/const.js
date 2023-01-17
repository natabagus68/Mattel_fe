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
  switch (status) {
    case "RUN":
      return "4xl";

    case "QC":
      return "4xl";

    case "Material":
      return "xl";

    case "Maintenance":
      return "base";
  }
};

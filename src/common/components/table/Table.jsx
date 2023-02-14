import React from "react";
import { Order } from "./Order";
import { Thead } from "./Thead";
import { Tr } from "./Tr";
import { Th } from "./Th";
import { Td } from "./Td";
import { ShowFilter } from "./ShowFilter";

export const Table = ({ children }) => {
  return (
    <>
      <div className="max-w-full overflow-x-auto">
        <table className="border-t border-gray-100 w-full">{children}</table>
      </div>
    </>
  );
};
Table.Order = Order;
Table.Thead = Thead;
Table.Tr = Tr;
Table.Th = Th;
Table.Td = Td;
Table.ShowFilter = ShowFilter;

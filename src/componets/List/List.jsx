import React, { useContext } from "react";
import { DataContext } from "../App";
import ListUI from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { labels } from "../../constants";

export const List = () => {
  const { data } = useContext(DataContext);

  if (!data.length) {
    return "Нет данных";
  }

  return (
    <ListUI>
      {data.map((item) => (
        <ListItem key={item.date}>
          {Object.entries(item)
            .map(([key, value]) =>
              key === "date"
                ? `Дата: ${new Date(value).toLocaleDateString("ru-RU")}`
                : `${labels[key]}: ${value}`
            )
            .join(" | ")}
        </ListItem>
      ))}
    </ListUI>
  );
};

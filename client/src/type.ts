export type TypeMenuItem = {
  id: number
  value: string,
  url: string,
}

export type MenuProps = {
  menuItems: {
    id: number;
    value: string;
    url: string;
  }[];
};
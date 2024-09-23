export type User = {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;

}

export type Note = {
  id: number;
  title: string;
  content: string;
  autor_id: number;
  createdAt: Date;
  updatedAt: Date;
}
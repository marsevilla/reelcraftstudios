// Define la interfaz para el documento
export interface Movie {
  id: string;
  title: string;
  genre: string;
  directors: string[];
  status: string;
  release_date: string;
  producers: string[];
  budget: number;
  synopsis: string;
}

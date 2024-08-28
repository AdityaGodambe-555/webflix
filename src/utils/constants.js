export const TMDB_API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjQ1ZWQ2OGEyNzMwNTRlMzM3YWRlY2Q0N2Y5ZmMwMyIsIm5iZiI6MTcyNDc2MjUxOC41NzE2OCwic3ViIjoiNjZjZGM3ZjAyOGUxYzM2MzEzNmFhMTNiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.5ROFHDZ-q6hqDQ9QFeOCjERWceAZ5dnw5FMrugfEabk",
  },
};

export const TMDB_API = "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

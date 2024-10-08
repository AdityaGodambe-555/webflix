export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_large.jpg";
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

export const TMDB_MOVIE_DETAILS_API = "https://api.themoviedb.org/3/movie/";

export const SUPPORTED_LANGUAGE = [
  { identifier: "eng", lang: "English" },
  { identifier: "marathi", lang: "Marathi" },
  { identifier: "hindi", lang: "Hindi" },
];

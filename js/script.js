"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");
let message = "";
message =
  numberOfFilms < 10
    ? "Просмотрено довольно мало фильмов"
    : numberOfFilms <= 30
    ? "Вы классический зритель"
    : numberOfFilms > 30
    ? "Вы киноман"
    : "Произошла ошибка";
alert(message);
console.log(numberOfFilms);

class Movie {
  constructor(count, movies, actors, genres, privat) {
    this.count = count;
    this.movies = movies;
    this.actors = actors;
    this.genres = genres;
    this.privat = Boolean(privat);
  }

  showMyDB() {
    if (!this.privat) {
      console.log(this);
    }
  }

  writeYourGenres() {
    let genres = [];
    for (let i = 1; i < 4; i++) {
      let flag = true;
      let genre;
      while (flag) {
        genre = prompt(`Ваш любимый жанр под номером ${i}`);
        if (Boolean(genre)) {
          flag = false;
        }
        console.log(flag);
      }
      genres.push(genre);
    }
    this.genres = genres;
    genres.forEach((elem, index) =>
      console.log(`Любимый жанр #${index + 1} - это ${elem}`)
    );
  }

  toggleVisibleMyDB() {
    this.privat = !this.privat;
  }

  writeYourMovies() {
    let filmName = [];
    let rating = [];
    for (let i = 0; i < 2; i++) {
      let flag = true;
      while (flag) {
        filmName[i] = prompt(
          `[${i + 1}] Один из последних просмотренных фильмов?`
        );
        rating[i] = prompt(`[${i + 1}] На сколько оцените его?`);
        if (
          Boolean(filmName[i]) &&
          filmName[i].length < 50 &&
          Boolean(rating[i])
        ) {
          flag = false;
        }
      }
    }

    this.movies = {
      [filmName[0]]: rating[0],
      [filmName[1]]: rating[1],
    };
  }
}

let personalMovieDB = new Movie(numberOfFilms, {}, {}, [], false);
personalMovieDB.writeYourGenres();

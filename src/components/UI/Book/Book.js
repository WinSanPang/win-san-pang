// need to credit Codepen

import React from "react";

import classes from "./Book.module.scss";

const Book = () => {
  return (
    <div className={classes.bookWrapper}>
      <div className={classes.bookContainer}>
        <section className={classes.openBook}>
          <header>
            <h1>EDUCATION</h1>
            <h6>Win San Pang</h6>
          </header>
          <article>
            <h2 className={classes.chapterTitle}>Introduction</h2>
            <p className={classes.BookText}>
              Here you can read about what I've studied, from school to online
              courses I've taken. As you will probably figure out, I was a bit
              of a <span className={classes.openBookBlue}>bookworm</span> and
              became particularly interested in studying the{" "}
              <span className={classes.openBookYellow}>English Language</span>{" "}
              and how language worked.
            </p>
            <p className={classes.BookText}>
              It wasn't until I started working at{" "}
              <span className={classes.openBookGreen}>JustPark</span> that I
              developed an interest in{" "}
              <span className={classes.openBookOrange}>
                programming languages
              </span>
              . In my teenage years, I dismissed coding as being too "Science-y
              / Maths-y" for me, but little did I know how much I would come to
              love it years later.
            </p>
            <h2 className={classes.chapterTitle}>Udemy Courses 2020</h2>
            <br />
            <ul className={classes.BookText}>
              <li>
                <a
                  href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React - The Complete Guide (incl Hooks, React Router, Redux)
                </a>
              </li>
              <li>
                <a
                  href="https://www.udemy.com/course/modern-react-bootcamp/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Modern React Bootcamp (Hooks, Context, NextJS, Router)
                </a>
              </li>
            </ul>
            <br />
            <br />
            <h2 className={classes.chapterTitle}>King's College London 2014</h2>
            <ul className={classes.BookText}>
              <li>
                BA English Language & Communication: First-class honours (76%)
              </li>
            </ul>
            <h2 className={classes.chapterTitle}>
              Highams Park Sixth Form College 2011
            </h2>
            <h4>A Levels:</h4>
            <ul className={classes.BookText}>
              <li>English Language (A*)</li>
              <li>Psychology (A*)</li>
              <li>History (A)</li>
            </ul>
            <h4>AS Levels:</h4>
            <ul className={classes.BookText}>
              <li>Media Studies (A)</li>
              <li>Critical Thinking (B)</li>
            </ul>
            <h4>Additional Course:</h4>
            <ul className={classes.BookText}>
              <li>
                The Open University: Start Writing Fiction module, OU Level 1,
                10 credits (Pass)
              </li>
            </ul>
            <h2 className={classes.chapterTitle}>Willowfield 2009</h2>
            <h4>GCSEs:</h4>
            <ul className={classes.BookText}>
              <li>13 grade A* - C (including English and Maths)</li>
            </ul>
          </article>
          <footer>
            <ol className={classes.pageNumbers}>
              <li>1</li>
              <li>2</li>
            </ol>
          </footer>
        </section>
      </div>
    </div>
  );
};

export default Book;

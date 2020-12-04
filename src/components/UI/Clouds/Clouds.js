/* Copyright (c) 2020 - Win San Pang - https://fontawesome.com/icons/cloud?style=solid
Original Cloud FontAwesomeIcons made by Font Awesome, available for free on their website, MIT licensed with attribution.
Font Awesome free licence: https://fontawesome.com/license/free

The brand icons are a trademark of the respective owners. The use of this trademark does not indicate endorsement of the trademark holder by Font Awesome, nor vice versa.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify,
merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import React from "react";

import classes from "./Clouds.module.scss";

const Clouds = ({ skillset, type }) => {
  return (
    <div className={classes.Clouds}>
      {skillset.map((skill) => (
        <span className="fa-stack fa-3x">
          <i className="fas fa-cloud fa-stack-2x"></i>
          <span
            className="fa fa-stack-1x
          "
          >
            <span
              className={
                type === "programming"
                  ? classes.CloudTextProgramming
                  : [
                      type === "general"
                        ? classes.CloudTextGeneral
                        : [classes.CloudTextCreative],
                    ]
              }
            >
              {skill.name}
            </span>

            {Array(skill.level).fill(
              <span className={classes.CloudStars}>
                <i className="fas fa-star" />
              </span>
            )}
          </span>
        </span>
      ))}
    </div>
  );
};

export default Clouds;

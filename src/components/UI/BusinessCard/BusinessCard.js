/* Copyright (c) 2020 - Win San Pang - https://fontawesome.com/icons/phone-alt / https://fontawesome.com/icons/envelope / https://fontawesome.com/icons/linkedin / https://fontawesome.com/icons/github / https://fontawesome.com/icons/twitter
Original Phone, Envelope, LinkedIn GitHub, and Twitter FontAwesomeIcons made by Font Awesome, available for free on their website, MIT licensed with attribution.
Font Awesome free licence: https://fontawesome.com/license/free

Th brand icons are a trademark of the respective owners. The use of this trademark does not indicate endorsement of the trademark holder by Font Awesome, nor vice versa.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify,
merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import React from "react";

import classes from "./BusinessCard.module.scss";
import Subheader from "../Subheader/Subheader";
import Me from "../../../assets/images/Me.png";

const BusinessCard = () => {
  return (
    <div className={classes.BusinessCard}>
      <div className={classes.BusinessCardContainer}>
        <div className={classes.BusinessCardLeft}>
          <img src={Me} alt="Win San Pang" className={classes.Me} />
          <Subheader>Win San Pang</Subheader>
          <p>Associate Frontend Engineer</p>
        </div>
        <div className={classes.BusinessCardDivider} />
        <div className={classes.BusinessCardRight}>
          <ul className={classes.BusinessCardList}>
            <li>
              <i className="fas fa-phone-alt"></i>07704371027
            </li>
            <li>
              <a href="mailto:winsanpang@hotmail.co.uk">
                <i className="fas fa-envelope"></i>winsanpang@hotmail.co.uk
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/winsanpang/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
                https://www.linkedin.com/in/winsanpang/
              </a>
            </li>
            <li>
              <a
                href="https://github.com/WinSanPang"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
                https://github.com/WinSanPang
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/WinSanPang"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
                https://twitter.com/WinSanPang
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;

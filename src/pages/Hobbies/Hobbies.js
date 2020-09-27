import React from "react";

import classes from "./Hobbies.module.scss";
import Header from "../../components/UI/Header/Header";
import Divider from "../../components/UI/Divider/Divider";
import Paragraph from "../../components/UI/Paragraph/Paragraph";
import Photograph from "../../components/UI/Photograph/Photograph";

/* Keep this for the modal:
https://scontent.flhr3-1.fna.fbcdn.net/v/t1.0-9/89926783_10222425396407504_8040394351110520832_o.jpg?_nc_cat=101&_nc_sid=a4a2d7&_nc_ohc=WMMMjkUvFAIAX_Ddxo0&_nc_ht=scontent.flhr3-1.fna&oh=819e4c163afd7902da4b99c630da4611&oe=5F7767F4
* */
const hobbies = [
  {
    name: "Travelling",
    img:
      "https://scontent.flhr3-1.fna.fbcdn.net/v/t1.0-9/86793569_10222154382472325_2103051300789813248_n.jpg?_nc_cat=110&_nc_sid=730e14&_nc_ohc=YF7DfjG97LgAX9w_cnW&_nc_ht=scontent.flhr3-1.fna&oh=da98120345109b262159b23c00b56681&oe=5F7AA3E8",
    alt: "nong-nooch-garden",
    caption: "The beautiful Nong Nooch Garden in Pattaya, Thailand",
  },
  /*{ name: "Travelling", img: "https://scontent.flhr3-1.fna.fbcdn.net/v/t1.0-9/118884204_10224190971745784_4615322859062812871_o.jpg?_nc_cat=108&_nc_sid=0debeb&_nc_ohc=SyMv6s9ZhjwAX8Oi9sq&_nc_ht=scontent.flhr3-1.fna&oh=e49dd00e697754c8a2d407fa872dd02c&oe=5F77E1D7", alt: "hong-kong-photo"},
  { name: "Travelling", img: "https://scontent.flhr3-1.fna.fbcdn.net/v/t1.0-9/118956730_10224190971785785_3761572989167052034_o.jpg?_nc_cat=105&_nc_sid=0debeb&_nc_ohc=j1hSMGgP1pwAX-nF2H4&_nc_ht=scontent.flhr3-1.fna&oh=24f603e5a819994cee1717d800f0293e&oe=5F794EB0", alt: "hong-kong-photo"},*/
  {
    name: "Swimming",
    img:
      "https://scontent.flhr3-2.fna.fbcdn.net/v/t1.0-9/71111061_10220774019564115_5857447046478299136_n.jpg?_nc_cat=102&_nc_sid=730e14&_nc_ohc=4X_3WeiaeQUAX8Cn4o8&_nc_ht=scontent.flhr3-2.fna&oh=d8551b28a0ce57d4ffed517fc338e647&oe=5F798EA3",
    alt: "me-swimming",
    caption: "Swimming in the sea for the first time ever  in Mallorca",
    // It's never too late to learn, and the same with my coding journey. Started learning in 2017
  },
  {
    name: "Photography",
    img:
      "https://scontent.flhr3-2.fna.fbcdn.net/v/t1.0-9/118874583_10224190936424901_5394046387647201492_n.jpg?_nc_cat=102&_nc_sid=0debeb&_nc_ohc=E13_2eoLrOgAX_0DOg9&_nc_ht=scontent.flhr3-2.fna&oh=4d2828f60e0787958af71452f3baf7bc&oe=5F7873C5",
    alt: "singapore-exhibition",
    caption:
      "A stunning light show at the 'Future World: Where Art Meets Science' exhibition",
  },
  {
    name: "Lego building",
    img:
      "https://scontent.flhr3-1.fna.fbcdn.net/v/t1.0-9/71348721_10220819708746316_8137253624641224704_n.jpg?_nc_cat=111&_nc_sid=730e14&_nc_ohc=NV1z2LkPJPIAX9dSHM0&_nc_ht=scontent.flhr3-1.fna&oh=4dd880c46412c18dca6a24bf2fc5de86&oe=5F79C729",
    alt: "lego-spider-man",
    caption:
      "A completed Lego Spider-Man after three days of blood, sweat and tears",
  },
  {
    name: "Theatre",
    img:
      "https://scontent.flhr3-1.fna.fbcdn.net/v/t31.0-8/27023782_10215520835717802_307547697000684753_o.jpg?_nc_cat=103&_nc_sid=cdbe9c&_nc_ohc=3nppnSeNr4cAX_zRhdj&_nc_ht=scontent.flhr3-1.fna&oh=4a33b7310a45094f51a2131c4f874ae5&oe=5F780DC1",
    alt: "mischief-cast",
    caption: "Meeting the awesome and very funny Mischief Theatre cast",
  },
  {
    name: "Cooking",
    img:
      "https://scontent.flhr3-1.fna.fbcdn.net/v/t1.0-9/94556738_10222934756781195_5909921406417633280_o.jpg?_nc_cat=103&_nc_sid=730e14&_nc_ohc=XSoQCJOUaMAAX-m0mov&_nc_ht=scontent.flhr3-1.fna&oh=f75b5f3d0c6d325e68789f3c97282b47&oe=5F799A11",
    alt: "sushi-rice-bowl",
    caption: "Lovingly made crabstick sushi rice salad bowl and prawn nigiri",
  },
];

const Hobbies = () => {
  return (
    <div className={classes.Hobbies}>
      <div className={classes.HobbiesHeader}>
        <Header>
          Hobbies{" "}
          <span role="img" aria-labelledby="person-swimming-emoji">
            🏊🏻
          </span>
        </Header>
      </div>
      <Paragraph>
        Here you can find out about some my hobbies and interests. If you want
        to know more, just click onto the photographs.
      </Paragraph>
      <Divider />
      <div className={classes.HobbiesPhotographs}>
        {hobbies.map((item) => (
          <Photograph key={item.name}>
            <img src={item.img} alt={item.alt} />
            <p>{item.caption}</p>
            <h3>{item.name}</h3>
          </Photograph>
        ))}
      </div>
    </div>
  );
};

export default Hobbies;

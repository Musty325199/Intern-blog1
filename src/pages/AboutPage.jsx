import React from "react";

const AboutPage = () => {
  return (
    <div id="about" className="flex border-2 rounded-lg gap-5 p-5 border-violet-950 my-10 text-justify flex-col items-center justify-center mt-24 m-5 md:ml-[20rem] md:w-2/4">
      <h3 className="text-3xl text-violet-950 font-semibold">About Us</h3>
      <p className="text-xl ">
        "Welcome to our daily blog! We’re a passionate team dedicated to
        bringing you fresh content every day, covering everything from lifestyle
        and wellness to trends and personal stories. Our mission is to inspire,
        entertain, and provide valuable insights to our readers. Whether you're
        here for a daily dose of motivation or to explore new ideas, we’re
        excited to have you along for the journey!" Feel free to tweak it
        according to your blog’s tone and style!
      </p>
    </div>
  );
};

export default AboutPage;

import Navbar from "@/components/navbar/Navbar";
import React from "react";
import NewsLetter from "./NewsLetter";
import Category from "../pageSections/homepage/Categories";

const Layout = ({ children }: { children: JSX.Element }) => {
  const content = `
  [React](https://reactjs.org/) is an open source front-end javascript library to build web application and websites. React is build by [Facebook](https://facebook.com/) in may 2013.

There are so many resources to learn react.js but here, I've shared my journey about how I learned react.js after learning javascript. Before to learn react.js, You've to learn basic javascript concepts.

#### Here's I've added list of concepts to learn before react.

- Function Declarations and Arrow Functions
- Template Literals
- Short Conditionals
- Three Array Methods: .map(), .filter(), .reduce()

> These array methods are very useful while implementing data populating concepts where you'll fetch data from an API to your front-end interface.

> The examples of those type of web applications is [movie app](https://react-movie-app-000.netlify.app/), [recipe app](https://recipe-app-fawn-three.vercel.app/) etc.

- Object Tricks: Property Shorthand, Destructuring, Spread Operator
- Promises + Async/Await Syntax
- ES Modules + Import / Export syntax

Here's the [blog post](https://www.freecodecamp.org/news/javascript-skills-you-need-for-react-practical-examples/) to refer all the things and I've list out above concepts from this article.

## Learning perspectives

There are 2 learning point of views by my side.

1. Learn concepts by doing projects.
2. Learn concepts by making notes for those concepts.

Personally, I prefer 1st aspect to learn any technology. Again, there's nothing is wrong with 2nd point of view. It's also a good way to learn concepts. But 2nd way is better when if we are learning any particular programming language.

### Here's, Why I prefer 1st way to learn react.js

I've noticed one thing while learning react.js or learning any framework or library implementation where every youtuber or anyone who is teaching react.js, there are directly implementing concepts of that library or framework in any project and again trust me, It's the best way to learn framework.

> Quick Tip : The best way to learn any framework is from it's own documentation.

## Where I've learn React.js

So, Finally came to the point, I wasn't following any particular course from youtube or udemy. I switched to many courses and tutorials and finally I've realized the one thing, which is to learn react.js by doing projects and implementing concepts in my projects.

### Personal advice to learn React.js from

So, my personal advice to learn react.js is to not stick to any one course or tutorial. The best way to learn react.js is to explore blogs which is written by developers but for that you need to get an index or kind of [roadmap of react.js](https://github.com/adam-golab/react-developer-roadmap)

So, first explore react.js road map [(github repository)](https://github.com/adam-golab/react-developer-roadmap) and then go with the flow. You can also follow youtube videos for any specific concept or a topic.

### Why I prefer online tutorials over books?

React.js versions update on daily bases. In current version of "react@18.2.0" There are top updates and it [changes](https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html) some code basis of index root files. In this versions they've [updated to server side rendering apis](https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-server-rendering-apis).
So, the point is when you're learning from books, it can't be update but online tutorials can be. That's why, I prefer to learn from online resources.

## Creating animations with react.js

There's one of the best library to create animations with react.js is called [Framer Motion](https://www.framer.com/motion/).

## React.js examples

Here, I'm mentioning the best websites for react examples

- [ReactJs Examples](https://reactjsexample.com/)
- [FreeCodeCamp Tags](https://www.freecodecamp.org/news/tag/reactjs/)

## Web development free Resources & Tools

[I](https://www.abhidadhaniya.com/) and my developer friend [Rohan](https://www.rohankiratsata.xyz/) have created free resources to master full stack web development by using this [free resources](https://web-dev-resources.notion.site/web-dev-resources/Web-Development-Resources-be1207bcc32e434481c1ce6e90756964).

  `;
  return (
    <>
      <div className="text-white lg:px-10 px-5 max-w-6xl mx-auto">
        <Navbar />
        {children}
        <div className="py-16 border-y-[1px] border-solid border-white/10">
          <NewsLetter />
        </div>
      </div>
    </>
  );
};

export default Layout;

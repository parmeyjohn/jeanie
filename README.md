## Description
Jeanie is a full-stack e-commerce app which utilizes the Stripe API to process user purchases made through the React front-end. It was created as a prototype for an e-commerce store I'm working on, and also as an exploration of several highly recommended web technologies.

## Demo

[![Jeanie App Demo](https://img.youtube.com/vi/CHxTcQiFjGk/0.jpg)](https://www.youtube.com/watch?v=CHxTcQiFjGk)

## Features

Users can browse different departments of clothing depending on their preference and within each users can filter products based on category or sort by price. Users can also search for their desired product based on the title or category of the product. Additionally, they can adjust products in their cart easily by visiting product pages, changing the quantity. Finally, users can login to secure their cart history and recently viewed items. 

## Getting Started

1. Clone the app to your local machine
2. Navigate to the root folder for the project on your local machine
3. Install the dependencies by typing "npm install ." in the terminal.
4. Run the development server by typing "npm run dev"
5. Visit http://localhost:3000/ in your browser of choice

## Tech

Most of the tech decisions were either frameworks I've heard great things about or ones I wanted to personally try out. Here are some of my thoughts on each technology I used:
* **NextJS**: Overall I enjoyed my experience with Next but may not use it for every project going forward. Learning about the differences between server and client side rendering to optimize SEO load times and SEO was very interesting but a bit confusing at times. I felt like it abstracted some of what made coding a Node/Express server fun but it did help me work quicker. I would use it again in the future but would like the push the limits of a pure Node backend first. 
* **TypeScript**: I enjoyed the developer benefits but it felt like overkill. In some instances where I found myself doing code gynmnastics just to get the annotations to work, I just ended up using "type: any" and moving on. I definitely think TS could add to a bigger or longer term project, it didn't match the scope of this project well.
* **Tailwind**: I still really enjoy tailwind for quick projects; being able to stay anchored in one folder helps me get into a flow easier than plain CSS.
* **Firebase**: The auth and storage were easy to set up, only requiring a bit of tweaking to work with my Next project. I would definitely consider using it again for future projects. Overall I'm glad I decided to use it and I feel much more confident moving to more complete cloud solutions like AWS or GCP.
* **Stripe API**: It was very intuitive to use and I am 100% using it again in the future. I want to try an alternative offering like shopify as well, but I had no issues and it was easy to use.

## Challenges

Firstly, I couldn't find any decent data sets for an ecommerce site. I really wanted to implement my own backend instead of just relying on shopify or a pre-existing API (most of which were just random items). I wanted to emulate a clothing store because I wanted it to be very close to the actual use case. My solution was using a kaggle dataset of images and adding the rest of the data information manually.

NextJS had a small learning curve based. I don't love how routing works within the new app router with NextJS 13; I felt like I had a million page files open in VSCode. I'm sure there's a workaround but I think the issues would just get worse on a larger scale project. 

## Future Updates

I really like how the UI turned out, however, I think I overdid it on hover effects and CSS transitions. For an ecommerce site, the main page needs to look great, but the product pages should really just be as fast as possible. For my next iteration I would love to speed up the animations and make everything as clear as possible for the end user. I also wanted to add more features like a wishlist or reviews, but opted to wait until the next iteration to do so.


## Feedback
For any requests feel free to post an issue and I'll respond to it. For general feedback feel free to contact me via my socials on my profile.

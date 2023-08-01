Hi Morpheus Space team!

I wanted to provide some documentation on my take-home assessment. The goal of this ReadME is to provide context behind the choices I made when completing this assessment.

One thing that was stressed during my call and in the assessment document was to get it as close to the FIGMA as possible. Every decision I made was to bring it closer to the designs that was provided.

Starting from top, I created a Breadcrumbs component. I know this wasn't included, but I got carried away and created it. One interested challenge this component creates is how to make it dynamic. There are two elements that make it a challenge:

1. The bolding of the links/texts that isn't the current page
2. Including the arrow only when it isn't the first and last element of the breadcrumbs

The Data Display component looks simple but has

I chose to pass on SCSS as I found that using the BEM (block-element-modifier) naming convention provides enough specificity where I don't have to invest into nesting. BEM is a practice that I enjoy. I've been recently been using a ton of Tailwind (Utility-based post-css) and it has been offloading a lot stress when naming classnames so I apologize for the lack of creativity when naming the classes. I do think the variable feature is important and useful in this project, but given the scope of this project, I think it's okay to use CSS modules.

Setting up Redux boilerplate can be monotonous and tricky but I recognize the beauty of creating a streamlined dispatch/action/store pipeline that can increase the efficiency and performance of the frontend. Enchancing Performance and improving developer experience is important to me, so I included Redux in this project.

I made it a point to modularize code where I could — this extends to types. I have seen a number of ways on how types were stored and imported, and I found that having specific exports within a 'type' folder makes it simple yet effective.

Keeping mobile views in mind, I opted for 'rem' when thinking about sizing because it scales with the font-size of the root of the project. I think this is especially important because it:

1. reduces the workload and redundancy of frontend work
2. reduces bloat in css
3. scales smoothly when altering the screen size dynamically

One decision that I want to bring to light is the use of selectedId and not holding the entire selected object in the store. I believe that state/stores should only hold what is absolutely necessary and everything else can be filtered out. This is the case with selectedId - during the handleClick, I set the selectedId and find the match within CDMData to increase efficiency. After I find the selected object, I pass that down as a prop to the DataDisplay component to render and display it.

The Gauge was probably the most interesting component I've worked on recently. As of now, it's a working component, but if I had a couple more hours, it could be refactored into a polished component. I enjoyed the quick math puzzle to calculate the percent using the lower and upper bounds that was provided and converting that into a CSS property.

Although it isn't the best example, I wanted to make sure to include a simple loading state and error handling to make it feel more like an actual app.

When I read through the prompt, I was considering two options for the DataTable. I recently came across a group of frontend devs that preferred creating tables out of divs, mocking the design of a table rather than using table tags because of the lack of responsiveness. Tables made with table tags aren't responsive because the tables can resist the natural flow of the page. I was tempted to give it a try because mobile views are incredibly important, but ultimately decided against it because of the tabular nature of the data.

I hope you enjoy reading through my work - I tried to give it the best I could with the limited amount of time I had.

Thank you!
Justin

## Getting Started

First, run the development server:

```bash
npm run dev
```
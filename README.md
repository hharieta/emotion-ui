# Emotion Analyzer Dashboard

This is a dashboard that analyzes the emotions of a text. It uses the [IBM Watson NLU](https://www.ibm.com/mx-es/products/natural-language-understanding) API to analyze the emotions of a text. The emotions are classified into 5 categories: joy, sadness, anger, fear and disgust.

![Dashboard](/public/Screenshot%202024-07-29%20at%203.23.41 p.m..png)

![Text Area](/public/Screenshot%202024-07-29%20at%203.37.16 p.m..png)

## How to run the project

1. Clone the repository
2. Install the dependencies with `pnpm install`
3. Create a `.env.local` file with the following content:
```bash
NEXT_PUBLIC_API_URL=http://localhost:3000/
```
4. Run the project with `pnpm dev`

**Note**: You need to have the backend running in order to use the dashboard. You can find the backend repository [here](https://github.com/hharieta/fastapi-watson-nlu)

## Technologies used

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn](https://shadcn.com/)
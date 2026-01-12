# TinyTales Authentication Task

This is a Next.js application implementing authentication flows (Login, Register, OTP Verification) with `react-hook-form`, `zod`, `react-query`, and a global `AuthContext`.

## Features

-   **Registration**: User registration with form validation.
-   **OTP Verification**: Account verification after registration.
-   **Login**: Secure login with JWT token storage.
-   **Dashboard**: Protected route displaying user information.
-   **Auth Context**: Centralized state management for authentication.

## Setup Instructions

### Prerequisites

-   Node.js (v18 or higher)
-   npm or yarn or pnpm

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd task
    ```

2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  Set up environment variables:
    Create a `.env.local` file in the root directory and add your API base URL:
    ```env
    NEXT_PUBLIC_BASE_URL=https://tinytales.trendline.marketing/api
    ```

### Running the Application

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

### Deploying to Vercel

1.  Push your code to a GitHub/GitLab/Bitbucket repository.
2.  Go to [Vercel](https://vercel.com) and sign up/login.
3.  Click **"Add New..."** -> **"Project"**.
4.  Import your repository.
5.  In the **"Environment Variables"** section, add `NEXT_PUBLIC_BASE_URL` with your API URL.
6.  Click **"Deploy"**.

Your application will be live in a few minutes!

### Live Demo

[Insert your live demo link here]

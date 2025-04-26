This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## World ID Verification Setup

This application uses World ID verification via the Worldcoin Mini App. To set it up:

1. Create an account on the [Worldcoin Developer Portal](https://developer.worldcoin.org/)
2. Create a new App in the Developer Portal
3. Create a new "Incognito Action" within your app for the verification
   - Incognito Actions are a primitive of World ID and allow you to gate functionality behind a unique human check
   - You can limit the number of times a user can perform an action
4. Copy your app ID and update the `.env.local` file:
   ```
   NEXT_PUBLIC_WLD_APP_ID="app_YOUR_MINI_APP_ID_HERE"
   NEXT_PUBLIC_WLD_ACTION_ID="tute-claim-action" # Or your custom action ID
   ```
5. Make sure you have the World App installed on your device to test the verification flow

### Implementation Details

The verification flow is triggered when clicking the "Verify to Claim" button, which will:

1. Open the World App for verification
2. Prompt the user to confirm the verification
3. Send the proof to the backend for verification
4. Upon successful verification, allow the user to claim TUTE tokens

#### Event-Based Approach

This implementation uses the event-based approach as recommended in the World ID documentation:

1. We use `MiniKit.commands.verify()` instead of the async version to initiate the verification
2. Event listeners are set up to handle the verification result:
   ```javascript
   document.addEventListener("miniapp-verify-action-success", handleSuccess);
   document.addEventListener("miniapp-verify-action-error", handleError);
   ```
3. When a successful verification event is received, we then verify the proof on the backend

This follows the exact implementation guidelines from the [World ID Verify Command documentation](https://docs.world.org/mini-apps/commands/verify).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

To learn more about World ID and Mini Apps:

- [World ID Documentation](https://docs.world.org/)
- [Mini Apps Quick Start](https://docs.world.org/mini-apps/quick-start)
- [Verify Command Documentation](https://docs.world.org/mini-apps/commands/verify)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

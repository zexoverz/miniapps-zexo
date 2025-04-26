import { MiniAppWalletAuthSuccessPayload } from "@worldcoin/minikit-js";

interface VerifyResult {
  isValid: boolean;
  error?: string;
  siweMessageData?: {
    address: string;
    [key: string]: any;
  };
}

/**
 * Verifies a SIWE (Sign-In with Ethereum) message from World ID Wallet
 */
export async function verifySiweMessage(
  payload: MiniAppWalletAuthSuccessPayload,
  nonce: string
): Promise<VerifyResult> {
  try {
    if (!payload) return { isValid: false, error: "No payload provided" };
    if (!payload.message)
      return { isValid: false, error: "No message in payload" };
    if (!payload.signature)
      return { isValid: false, error: "No signature in payload" };
    if (!payload.address)
      return { isValid: false, error: "No address in payload" };

    // Parse the SIWE message to extract the nonce
    const messageLines = payload.message.split("\n");
    const nonceLine = messageLines.find((line) => line.startsWith("Nonce:"));

    if (!nonceLine)
      return { isValid: false, error: "No nonce found in message" };

    const messageNonce = nonceLine.replace("Nonce:", "").trim();

    // Verify the nonce in the message matches our expected nonce
    if (messageNonce !== nonce) {
      return {
        isValid: false,
        error: `Nonce mismatch. Got: ${messageNonce}, Expected: ${nonce}`,
      };
    }

    // Extract address from the message
    const addressLine = messageLines.find((line) =>
      line.startsWith("address:")
    );
    const address = addressLine
      ? addressLine.replace("address:", "").trim().toLowerCase()
      : payload.address.toLowerCase();

    return {
      isValid: true,
      siweMessageData: { address },
    };
  } catch (error) {
    console.error("Error verifying SIWE message:", error);
    return {
      isValid: false,
      error:
        error instanceof Error ? error.message : "Unknown verification error",
    };
  }
}

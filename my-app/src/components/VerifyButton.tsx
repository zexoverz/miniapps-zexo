"use client";

import { useState } from "react";
import { Shield } from "lucide-react";
import {
  MiniKit,
  VerifyCommandInput,
  VerificationLevel,
  ISuccessResult,
} from "@worldcoin/minikit-js";

interface VerifyButtonProps {
  onVerificationSuccess: () => void;
}

export function VerifyButton({ onVerificationSuccess }: VerifyButtonProps) {
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationError, setVerificationError] = useState<string | null>(
    null
  );

  const handleVerify = async () => {
    // Don't start verification if it's already in progress
    if (isVerifying) {
      console.log("Verification already in progress");
      return;
    }

    if (!MiniKit.isInstalled()) {
      setVerificationError("World App is not installed");
      return;
    }

    try {
      console.log("Starting verification process");
      setIsVerifying(true);
      setVerificationError(null);

      const verifyPayload: VerifyCommandInput = {
        action: "web3-template",
        signal: "",
        verification_level: VerificationLevel.Device,
      };

      // Use async approach with commandsAsync
      console.log("Using async verification approach");

      // Ensure the MiniKit is correctly initialized before using it
      if (
        !MiniKit.commandsAsync ||
        typeof MiniKit.commandsAsync.verify !== "function"
      ) {
        throw new Error(
          "MiniKit.commandsAsync.verify is not available. Make sure you're using the latest version of the MiniKit library."
        );
      }

      // Execute the verify command and wait for the result
      const { finalPayload } = await MiniKit.commandsAsync.verify(
        verifyPayload
      );

      if (finalPayload.status === "error") {
        console.log("Error payload", finalPayload);
        setVerificationError(`Verification failed: Please try again`);
        setIsVerifying(false);
        return;
      }

      try {
        const verifyResponse = await fetch("/api/verify", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            payload: finalPayload as ISuccessResult,
            action: process.env.NEXT_PUBLIC_WLD_ACTION_ID || "web3-template",
            signal: "",
          }),
        });

        setIsVerifying(false);
        setVerificationError(null);
        onVerificationSuccess();
      } catch (error) {
        console.error("Server verification error:", error);
        setVerificationError(
          error instanceof Error
            ? `Verification error: ${error.message}`
            : "Unknown verification error occurred"
        );
      }

      // Process successful verification
      //   await verifyOnServer(finalPayload as ISuccessResult);
    } catch (error) {
      console.error("Verification error:", error);
      setVerificationError(
        error instanceof Error
          ? `Verification error: ${error.message}`
          : "Unknown verification error occurred"
      );
      setIsVerifying(false);
    }
  };

  return (
    <>
      {verificationError && (
        <div className="text-red-500 text-sm mb-2">{verificationError}</div>
      )}

      <button
        onClick={handleVerify}
        disabled={isVerifying}
        className="w-full max-w-xs px-8 py-4 bg-blue-500 text-white font-medium text-lg rounded-xl shadow-sm hover:bg-blue-600 active:bg-blue-700 transition-colors touch-manipulation flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        <Shield className="w-5 h-5" />
        {isVerifying ? "Verifying..." : "Verify to open"}
      </button>
    </>
  );
}

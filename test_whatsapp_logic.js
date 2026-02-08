
// Mock state and data
let formData = {
    machineName: "Industrial Pump",
    powerType: "AC",
    machineLink: "https://example.com/machine-specs",
    ratingI: "10",
    ratingV: "230",
    ratingW: "2000",
    keypadLock: true,
    boxType: "Waterproof",
    buttons: [
        {name: "Start", working: "Starts the motor"},
        {name: "Stop", working: "Stops the motor"}
    ],
    platform: "Own App (Managed)",
    extraRequirements: "Need emergency stop integration",
    agreedToTerms: true
};

const handleWhatsApp = () => {
    if (!formData.machineName || !formData.powerType || !formData.ratingI || !formData.ratingV || !formData.agreedToTerms) {
      console.log("Validation Failed");
      return;
    }

    const message = `*CUSTOM BUILD INQUIRY*

*Machine Name:* ${formData.machineName}
*Machine Link:* ${formData.machineLink || "NA"}
*Power Type:* ${formData.powerType}
*Ratings:*
  - Current (I): ${formData.ratingI} A
  - Voltage (V): ${formData.ratingV} V
  - Power (W): ${formData.ratingW || "NA"}

*Hardware Features:*
  - Keypad Lock: ${formData.keypadLock ? "Yes" : "No"}
  - Box Type: ${formData.boxType}

*Buttons Configuration:*
${formData.buttons.map((b, i) => `  ${i + 1}. ${b.name} - ${b.working}`).join("\n") || "  None"}

*Platform Selected:*
  - ${formData.platform}

*Extra Requirements:*
${formData.extraRequirements || "None"}

I agree to the terms and conditions.`;

    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/919974486076?text=${encodedMessage}`;
    
    console.log("Generated URL:");
    console.log(url);
    console.log("\nDecoded Message:");
    console.log(message);
};

handleWhatsApp();

import otpGenerator from "otp-generator";

export const generateCode = (num) => {
  const code = otpGenerator.generate(num, {
    upperCaseAlphabets: true,
    specialChars: false,
  });
  return `#${code}`;
};

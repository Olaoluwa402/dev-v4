import otpGenerator from "otp-generator"

export const codeGenerator=(num)=>{
    const code = otpGenerator.generate(num,{
        upperCaseAlphabets: true,
        specialChars: true,
    });

    return `#${code}`
}
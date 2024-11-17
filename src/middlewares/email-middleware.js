import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "projectuserrr.05@gmail.com",
    pass: "hnpg daep cfnd bphk",
  },
});

export const sendConfirmationEmail = (userEmail, companyName, designation) => {
  const mailOptions = {
    from: "projectuserrr.05@gmail.com",
    to: userEmail,
    subject: `Application Confirmation for ${designation} at ${companyName}`,
    html: `<h3>Dear Applicant,</h3>
           <p>Thank you for applying for the <strong>${designation}</strong> position at <strong>${companyName}</strong>. 
           We have received your application and will review it shortly.</p>
           <p>Best of luck with your application!</p>
           <p>Kind regards,<br>${companyName} Recruitment Team</p>`,
  };

  return transporter
    .sendMail(mailOptions)
    .then((info) => console.log("Email sent: " + info.response))
    .catch((error) => console.log("Error sending email: " + error));
};

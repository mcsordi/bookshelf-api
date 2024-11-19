import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAILPASS
  }
});

export async function main(opt, email) {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL, // sender address
      to: `${email}`, // list of receivers
      subject: "BookShelf código de recuperação de senha", // Subject line
      text: "Recovery password", // plain text body
      html: `<!DOCTYPE html>
<html>
  <body>
    <div style="width: 16rem; margin: 1.25rem auto; text-align: center;">
     <div style="text-align: center;">
        <span style="font-size: 2.25rem; line-height: 2.5rem; font-weight: 600; border-bottom: 4px solid rgb(250, 204, 21); border-radius: 0.125rem; vertical-align: baseline; display: inline-block;">Book</span>
        <span style="font-size: 1.5rem; line-height: 2rem; font-weight: 500; vertical-align: baseline; display: inline-block;">Shelf</span>
      </div>
      <h2 style="font-size: 1.25rem; line-height: 1.75rem; font-weight: 500; margin-top: 2rem;">Código de redefinição de senha</h2>
      <div style="border: 2px solid rgb(31, 41, 55); padding: 0.75rem; font-weight: 600; border-radius: 0.375rem; background-color: rgb(12, 74, 110); color: rgb(255, 255, 255); font-size: 1.5rem; line-height: 2rem; margin-top: 1rem;">${opt}</div>
      <div style="text-align: left; margin-top: 2rem;">
        <p>Att,<br>BookShelf.</p>
      </div>
    </div>
  </body>
</html>`
    });
  } catch (error) {
    console.log(error)
  }
}
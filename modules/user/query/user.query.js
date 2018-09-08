import UserModel from "../model/user.model";

export function signupUser(params) {
  return new Promise(function(resolve, reject) {
    UserModel.findOne({
      email: params.email
    })
      .then(function(user) {
        if (user) {
          return reject({
            message: "Email is already registered!"
          });
        } else {
          let newUser = UserModel(params);
          newUser.save(function(err, user) {
            if (err) {
              return reject({
                message: String(err)
              });
            } else {
              resolve({
                data: user,
                message: "User created successfully!"
              });
            }
          });
        }
      })
      .catch(function(err) {
        reject({
          err
        });
      });
  });
}

export function getUserByID(params) {
  return new Promise(function(resolve, reject) {
    UserModel.findById(params.userID)
      .then(function(user) {
        if (user) {
          return resolve({
            data: user
          });
        } else {
          return resolve({
            message: "User not found!"
          });
        }
      })
      .catch(function(err) {
        reject({
          message: err
        });
      });
  });
}

export function updateUser(params) {
  return new Promise(function(resolve, reject) {
    UserModel.findByIdAndUpdate(params._id, { $set: params }, { new: true })
      .then(function(user) {
        if (!user)
          return resolve({
            message: "User not found!"
          });
        return resolve({
          message: "Profile updated!",
          data: user
        });
      })
      .catch(function(err) {
        reject({ message: err });
      });
  });
}

export function updatePassword(user_id, passwords) {
  return new Promise(function(resolve, reject) {
    UserModel.findById(
      {
        _id: user_id
      },
      {
        password: 1
      },
      function(err, user) {
        if (err) reject(err);
        if (!user) {
          reject({
            result: "User not found!"
          });
        } else {
          user.verifyPassword(passwords.oldPassword, function(err, isMatch) {
            if (isMatch && !err) {
              user.password = passwords.newPassword;
              user.save(function(err) {
                if (err) reject(err);
                resolve({
                  result: "Password updated sucessfully!"
                });
              });
            } else {
              reject({
                result: "Authentication failed, Wrong password!"
              });
            }
          });
        }
      }
    );
  });
}

export function forgotPassword(email) {
  return new Promise(function(resolve, reject) {
    async.waterfall(
      [
        function createRandomToken(done) {
          crypto.randomBytes(16, (err, buf) => {
            const token = buf.toString("hex");
            done(err, token);
          });
        },
        function setRandomToken(token, done) {
          UserModel.findOne(
            {
              email
            },
            (err, user) => {
              if (err) {
                return done(err);
              }
              if (!user) {
                return done({
                  msg: "Account with that email address does not exist."
                });
              }
              user.passwordResetToken = token;
              user.passwordResetExpires = Date.now() + 3600000; // 1 hour
              user.save(err => {
                done(err, token, user);
              });
            }
          );
        },
        function sendForgotPasswordEmail(token, user, done) {
          const transporter = smtpTransport;
          const mailOptions = {
            to: user.email,
            from: "parwatkunwar11@gmail.com",
            subject: "Reset your password",
            text: `You are receiving this email because you (or someone else) have requested the reset of the password for your account.\n\n
              Please click on the following link, or paste this into your browser to complete the process:\n\n
              http://localhost:9001/#/resetPassword?token=${token}\n\n
              If you did not request this, please ignore this email and your password will remain unchanged.\n`
          };
          transporter.sendMail(mailOptions, (err, info) => {
            done(err);
          });
        }
      ],
      err => {
        if (err) {
          return reject(err);
        }
        return resolve({
          message: "mail sent"
        });
      }
    );
  });
}

export function resetPassword(token, newPassword) {
  return new Promise(function(resolve, reject) {
    async.waterfall(
      [
        function resetPassword(done) {
          UserModel.findOne({
            passwordResetToken: token
          })
            .where("passwordResetExpires")
            .gt(Date.now())
            .exec((err, user) => {
              if (err) {
                return done(err);
              }
              if (!user) {
                return done({
                  msg: "Password reset token is invalid or has expired."
                });
              }
              user.password = newPassword;
              user.passwordResetToken = undefined;
              user.passwordResetExpires = undefined;
              user.save(err => {
                if (err) {
                  return done(err);
                }
                return done(null, user);
              });
            });
        },
        function sendResetPasswordEmail(user, done) {
          const transporter = smtpTransport;

          const mailOptions = {
            to: user.email,
            from: "parwatkunwar11@gmail.com",
            subject: "Your password has been changed",
            text: `Hello,\n\nThis is a confirmation that the password for your account ${
              user.email
            } has just been changed.\n`
          };
          transporter.sendMail(mailOptions, err => {
            return done(err);
          });
        }
      ],
      err => {
        if (err) {
          return reject(err);
        }
        return resolve({
          msg: "Success! Your password has been changed!"
        });
      }
    );
  });
}
